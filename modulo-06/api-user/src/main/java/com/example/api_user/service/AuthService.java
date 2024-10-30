package com.example.api_user.service;

import com.example.api_user.dto.LoginDTO;
import com.example.api_user.model.User;
import com.example.api_user.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Service
public class AuthService {
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;
    private final UserService userService;

    public AuthService(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider, UserService userService) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.userService = userService;
    }

    @Value("${spring.security.oauth2.client.registration.github.client-id}")
    private String clientId;

    @Value("${spring.security.oauth2.client.registration.github.client-secret}")
    private String clientSecret;

    @Value("${spring.security.oauth2.client.provider.github.authorization-uri}")
    private String authorizationUri;

    @Value("${spring.security.oauth2.client.provider.github.token-uri}")
    private String tokenUri;

    @Value("${spring.security.oauth2.client.provider.github.user-info-uri}")
    private String userInfoUri;

    public String login(LoginDTO loginDTO){
        try{
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginDTO.getUsername(), loginDTO.getPassword())
            );
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            User user = this.userService.findByUsername(userDetails.getUsername());
            return this.jwtTokenProvider.generateToken(userDetails, user.getId());
        }catch (AuthenticationException e){
            throw new RuntimeException("Invalid Credentials");
        }
    }

    public String redirectToGithub(){
        String redirectUri = "http://localhost:8080/auth/oauth2/callback";
        String completeUrl = String.format(
                "%s?client_id=%s&redirect_uri=%s&scope=%s",
                authorizationUri,
                clientId,
                redirectUri,
                "user:email");
        return completeUrl;
    }

    public String handleGithubCallback(String code) {
        String accessToken = getAccessToken(code);
        return getUserToken(accessToken);
    }

    private String getAccessToken(String code) {
        String requestUrl = String.format(
                "%s?client_id=%s&client_secret=%s&code=%s",
                tokenUri,
                clientId,
                clientSecret,
                code
        );

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<?> requestEntity = new HttpEntity<>(headers);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Map> responseEntity = restTemplate.exchange(
                requestUrl,
                HttpMethod.POST,
                requestEntity,
                Map.class
        );

        if (!responseEntity.getStatusCode().equals(HttpStatus.OK)) {
            throw new RuntimeException("Failed to get access token from GitHub");
        }

        return (String) responseEntity.getBody().get("access_token");
    }

    private String getUserToken(String accessToken) {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);
        HttpEntity<?> userRequestEntity = new HttpEntity<>(headers);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Map> userResponseEntity = restTemplate.exchange(userInfoUri, HttpMethod.GET, userRequestEntity, Map.class);

        if (!userResponseEntity.getStatusCode().equals(HttpStatus.OK)) {
            throw new RuntimeException("Failed to get user info from GitHub");
        }

        String login = (String) userResponseEntity.getBody().get("login");
        Integer userId = (Integer) userResponseEntity.getBody().get("id");

        List<GrantedAuthority> authorities = List.of(new SimpleGrantedAuthority("ROLE_USER"));
        UserDetails userDetails = new org.springframework.security.core.userdetails.User(login, "", authorities);

        return jwtTokenProvider.generateTokenByOAuth2Authentication(userDetails, userId);
    }
}

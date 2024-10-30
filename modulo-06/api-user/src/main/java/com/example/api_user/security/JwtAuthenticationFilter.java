package com.example.api_user.security;

import com.example.api_user.service.CustomUserDetailsService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;
import java.util.List;

@Configuration
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtTokenProvider jwtTokenProvider;
    private final CustomUserDetailsService userDetailsService;

    public JwtAuthenticationFilter(JwtTokenProvider jwtTokenProvider, CustomUserDetailsService userDetailsService) {
        this.jwtTokenProvider = jwtTokenProvider;
        this.userDetailsService = userDetailsService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        String jwt = authHeader.substring(7);

        String username = this.jwtTokenProvider.extractUsername(jwt);
        String role = this.jwtTokenProvider.extractRoleFromToken(jwt);

        List<GrantedAuthority> authorities = List.of(new SimpleGrantedAuthority(role));

        UserDetails userDetails = null;

        boolean isOAuth2User = this.jwtTokenProvider.isOAuth2Token(jwt);

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            if (!isOAuth2User) {
                try {
                    userDetails = this.userDetailsService.loadUserByUsername(username);
                } catch (UsernameNotFoundException e) {
                    userDetails = new org.springframework.security.core.userdetails.User(username, "", authorities);
                }
            } else {
                userDetails = new org.springframework.security.core.userdetails.User(username, "", authorities);
            }
        }

        if (jwtTokenProvider.isTokenValid(jwt, userDetails)) {
            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
            authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);
        }

        filterChain.doFilter(request, response);
    }
}
package com.example.api_user.controller;

import com.example.api_user.dto.LoginDTO;
import com.example.api_user.service.AuthService;
import io.jsonwebtoken.io.IOException;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> login(@RequestBody LoginDTO loginDTO) {
        String login = this.authService.login(loginDTO);
        return ResponseEntity.status(HttpStatus.OK).body(login);
    }

    @GetMapping("/oauth2/authorize")
    public RedirectView redirectToGithub() {
        String oauthUrl = this.authService.redirectToGithub();
        return new RedirectView(oauthUrl);
    }

    @GetMapping("/oauth2/callback")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> handleGithubCallback(@RequestParam String code) throws IOException {
        String token = this.authService.handleGithubCallback(code);
        return ResponseEntity.status(HttpStatus.OK).body(token);
    }
}

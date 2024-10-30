# Task 13 - Troubleshooting involving JWT

The goal here was to correct the OAuth2 flow that generated an invalid JWT. What it does now is both authenticate via login and password with JWT and via OAuth2 from github.

**OAuth2 flow
- Login via Github
- Get the OAuth2 token and exchanges it for a JWT for validation on other routes (without persisting the data)

**Instructions:**
- Open the project in your IDE;
- Run project

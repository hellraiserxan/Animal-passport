package org.example.auth;

import lombok.Data;

@Data
public class SignupRequest {
    private String password;
    private String username;
    private String email;

    public String getUsername() {
        return username;
    }
}

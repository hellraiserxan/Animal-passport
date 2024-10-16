package org.example.auth;

import lombok.Data;

@Data
public class SigninRequest {
    private String password;
    private String username;
}

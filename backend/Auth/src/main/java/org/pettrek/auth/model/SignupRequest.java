package org.pettrek.auth.model;

import lombok.Data;

@Data
public class SignupRequest {
    private String password;
    private String username;
    private String email;
}

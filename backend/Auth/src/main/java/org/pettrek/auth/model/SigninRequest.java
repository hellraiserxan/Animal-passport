package org.pettrek.auth.model;

import lombok.Data;

@Data
public class SigninRequest {
    private String password;
    private String username;
}

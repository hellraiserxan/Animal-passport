package org.pettrek.auth.model;

import lombok.Data;

@Data
public class TokenRefreshRequest {
    private String refreshToken;
}

package org.pettrek.auth.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.*;

import java.util.Date;

@Component
public class JwtCore {
    @Value("${auth.app.secret}")
    private String secret;
    @Value("${auth.app.accessTokenLifetime}")
    private int accessTokenLifetime;
    @Value("${auth.app.refreshTokenLifetime}")
    private int refreshTokenLifetime;

    public String generateAccessToken(Authentication authentication) { // блядский токен создается и не рефрешиться, надо пиздануть refreshToken()
        UserDetailsImpl user = (UserDetailsImpl) authentication.getPrincipal();
         return Jwts.builder()
                 .setSubject(user.getUsername())
                    .setIssuedAt(new Date())
                        .setExpiration(new Date((new Date()).getTime()+accessTokenLifetime))
                            .signWith(SignatureAlgorithm.HS256, secret)
                                .compact();
    }
    public String generateRefreshToken(Authentication authentication) {
        UserDetailsImpl user = (UserDetailsImpl) authentication.getPrincipal();
        return Jwts.builder()
                .setSubject(user.getUsername())
                    .setIssuedAt(new Date())
                        .setExpiration(new Date((new Date()).getTime() + refreshTokenLifetime))
                            .signWith(SignatureAlgorithm.HS256, secret)
                                 .compact();
    }
    public String getUsernameFromToken(String token) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getSubject();
    }

    public boolean isTokenExpired(String token) {
        Date expirationDate = Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getExpiration();
        return expirationDate.before(new Date());
    }

    public String getNameFromJwt(String token) {
        return Jwts.parser()
                .setSigningKey(secret)
                    .parseClaimsJws(token)
                        .getBody()
                            .getSubject();
    }

}

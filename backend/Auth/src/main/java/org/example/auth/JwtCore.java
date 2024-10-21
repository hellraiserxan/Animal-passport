package org.example.auth;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.*;

import java.util.Date;

@Component
public class JwtCore {
    @Value("${auth.app.secret}")
    private String secret;
    @Value("${auth.app.lifetime}")
    private int lifetime;

    public String generateToken(Authentication authentication) {
         UserDetailsImpl user = (UserDetailsImpl) authentication.getPrincipal();
         return Jwts.builder().setSubject(user.getUsername()).setIssuedAt(new Date())
                 .setExpiration(new Date((new Date()).getTime()+lifetime))
                 .signWith(SignatureAlgorithm.HS256, secret)
                 .compact();
    }
    public String getNameFromJwt(String token) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getSubject();
    }

}

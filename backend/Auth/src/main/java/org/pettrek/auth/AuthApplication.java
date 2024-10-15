package org.pettrek.auth;

import org.pettrek.auth.config.JwtCore;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.bind.annotation.RestController;

@EnableWebSecurity(debug = true)
@SpringBootApplication
@EnableJpaRepositories("org.pettrek.auth")
@EntityScan(value = "org.pettrek.auth")
@RestController
public class  AuthApplication {
    private JwtCore jwtCore;

    public void setJwtCore(JwtCore jwtCore) {
        this.jwtCore = jwtCore;
    }

    public static void main(String[] args) {
        SpringApplication.run(AuthApplication.class, args);
    }

}

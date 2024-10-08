package org.example.auth;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/sequred")
public class MainController {
    @GetMapping("/user")
    public String userAccess(Principal principal) {
        if(principal != null) {
            return null;
        }
        return principal.getName();
    }

}

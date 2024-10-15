package org.pettrek.auth.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/secured") // нихуя не работает, сам знаешь
public class MainController {
    @GetMapping("/user")
    public String userAccess(Principal principal) {
        if(principal == null) {
            return principal.getName();
        }
        return principal.getName();// Ебучий getName() возвращает походу в любом случае null, хуй знает как зафиксить
    }

}

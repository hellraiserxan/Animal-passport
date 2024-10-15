package org.pettrek.auth.config;

import org.pettrek.auth.model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

public class UserDetailsImpl implements UserDetails { // ТУТ ВАЩЕ ПИЗДЕЦ везде дрисня полная в коде, методы проверки нахуй не работают
    // ЗАФИКСИТЬ В СРОЧНОМ ИЛИ НЕ ОЧЕНЬ ПОРЯДКЕ
    //ДОПИСАТЬ УЖЕ GETEMAIL(ВПАДЛУ)
    private Long id;
    private String username;
    private String password;
    private String email;

    // Конструктор
    public UserDetailsImpl(Long id, String username, String password, String email) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    // Статический метод build
    public static UserDetailsImpl build(final User user) {
        return new UserDetailsImpl(
                user.getId(),
                user.getUsername(),
                user.getPassword(),
                user.getEmail()
        );
    }



    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of();
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public Long getId() {
        return id;
    }
}

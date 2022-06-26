package vn.codegym.pharmacy_project.service.impl;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import vn.codegym.pharmacy_project.model.Users;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class UserDetailsImpl implements UserDetails {
    private String username;
    private Boolean flag;
    private String password;

    List<GrantedAuthority> authorities = null;


    public UserDetailsImpl(String username, Boolean flag, String password, List<GrantedAuthority> authorities) {
        this.username = username;
        this.flag = flag;
        this.password = password;
        this.authorities = authorities;
    }

    public static UserDetails build(Users users){
        List<GrantedAuthority> authorities = users.getUserRoleList()
                .stream().map( role -> new SimpleGrantedAuthority(role.getRoles().getRoleName()))
                .collect(Collectors.toList());
        return  new UserDetailsImpl(
                users.getUsername(),
                users.isFlag(),
                users.getPassword(),
                authorities
        );
    }



    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
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
        return flag;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UserDetailsImpl)) return false;
        UserDetailsImpl that = (UserDetailsImpl) o;
        return username.equals(that.username);
    }

    @Override
    public int hashCode() {
        return Objects.hash(username);
    }
}

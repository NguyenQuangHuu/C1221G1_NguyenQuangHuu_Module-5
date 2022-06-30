package vn.codegym.pharmacy_project.service.impl;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;
import vn.codegym.pharmacy_project.model.Users;

import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

public class UserDetailsImpl implements OAuth2User,UserDetails {
    private String username;
    private Boolean flag;
    private String password;

    private List<GrantedAuthority> authorities = null;
    private Map<String, Object> attributes;


    public UserDetailsImpl(String username, Boolean flag, String password, List<GrantedAuthority> authorities) {
        this.username = username;
        this.flag = flag;
        this.password = password;
        this.authorities = authorities;
    }

    public static UserDetailsImpl build(Users users){
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

    public static UserDetailsImpl create(Users users, Map<String, Object> attributes){
        UserDetailsImpl userDetails = UserDetailsImpl.build(users);
        userDetails.setAttributes(attributes);
        return userDetails;
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


    public void setUsername(String username) {
        this.username = username;
    }

    public Boolean getFlag() {
        return flag;
    }

    public void setFlag(Boolean flag) {
        this.flag = flag;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setAuthorities(List<GrantedAuthority> authorities) {
        this.authorities = authorities;
    }

    public Map<String, Object> getAttributes() {
        return attributes;
    }

    public void setAttributes(Map<String, Object> attributes) {
        this.attributes = attributes;
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

    @Override
    public String getName() {
        return String.valueOf(username);
    }
}

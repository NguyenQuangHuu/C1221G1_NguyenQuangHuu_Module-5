package vn.codegym.pharmacy_project.dto;

import vn.codegym.pharmacy_project.model.Roles;

import java.util.List;

public class SignUpRequest {
    private String username;
    private String password;
    private List<Roles> roles;

    public SignUpRequest() {
    }

    public SignUpRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Roles> getRoles() {
        return roles;
    }

    public void setRoles(List<Roles> roles) {
        this.roles = roles;
    }
}

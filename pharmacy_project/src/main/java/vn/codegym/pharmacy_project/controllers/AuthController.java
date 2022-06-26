package vn.codegym.pharmacy_project.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.codegym.pharmacy_project.dto.JwtResponse;
import vn.codegym.pharmacy_project.dto.LoginRequest;
import vn.codegym.pharmacy_project.dto.SignUpRequest;
import vn.codegym.pharmacy_project.model.Roles;
import vn.codegym.pharmacy_project.model.UserRole;
import vn.codegym.pharmacy_project.model.Users;
import vn.codegym.pharmacy_project.repository.IUserRoleRepository;
import vn.codegym.pharmacy_project.repository.IUsersRepository;
import vn.codegym.pharmacy_project.util.JwtUtils;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private IUsersRepository iUsersRepository;

    @Autowired
    private IUserRoleRepository iUserRoleRepository;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private JwtUtils jwtUtils;

    @PostMapping("/sign-in")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtKey(authentication);
        User user = (User) authentication.getPrincipal();
        List<String> role = user.getAuthorities()
                .stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList());
        return ResponseEntity.ok(new JwtResponse(
                jwt, loginRequest.getUsername(), loginRequest.getPassword(), role)
        );
    }

    @PostMapping("/sign-up")
    public ResponseEntity<?> registerUser(@RequestBody SignUpRequest signUpRequest) {
        if (iUsersRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity.badRequest().body(
                    "Error: Email is already in use!"
            );
        }
        Users users = new Users(signUpRequest.getUsername(),encoder.encode(signUpRequest.getPassword()));
        List<Roles> rolesList = signUpRequest.getRoles();
        this.iUsersRepository.save(users);
        rolesList.forEach( roles ->
        {
            this.iUserRoleRepository.save(new UserRole(users,roles));
        }
        );
        return  ResponseEntity.ok("Đăng kí thành công");
    }

}

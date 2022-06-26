package vn.codegym.pharmacy_project.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import vn.codegym.pharmacy_project.model.Users;
import vn.codegym.pharmacy_project.repository.IUsersRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class UsersDetailService implements UserDetailsService {

    @Autowired
    private IUsersRepository iUsersRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Users users = this.iUsersRepository.findByUsername(username)
                .orElseThrow(()-> new UsernameNotFoundException("Not found user with username: "+username));
        List<GrantedAuthority> authorities = new ArrayList<>();
        for (int i = 0; i < users.getUserRoleList().size(); i++) {
            authorities.add( new SimpleGrantedAuthority(users.getUserRoleList().get(i).getRoles().getRoleName()));
        }
        return new User(users.getUsername(),
                users.getPassword(),
                true,true,true,true,
                authorities);
    }

}

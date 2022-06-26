package vn.codegym.pharmacy_project.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.rememberme.InMemoryTokenRepositoryImpl;
import org.springframework.security.web.authentication.rememberme.PersistentTokenRepository;
import vn.codegym.pharmacy_project.service.impl.UsersDetailService;
import vn.codegym.pharmacy_project.util.AuthEntryPointJwt;
import vn.codegym.pharmacy_project.util.AuthTokenFilter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {


    @Autowired
    private UsersDetailService usersDetailService;

    @Autowired
    private AuthEntryPointJwt unauthorizedHandler;

    @Autowired
    public AuthTokenFilter authTokenFilter;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(usersDetailService).passwordEncoder(passwordEncoder());
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
//        http.cors().and().csrf().disable().exceptionHandling().authenticationEntryPoint(unauthorizedHandler);
//        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        //Cho phép tất cả các truy cập vào đây không yêu cầu login
//        http.authorizeRequests().antMatchers("/api/auth/sign-in","/api/auth/sign-up").permitAll();

        //Cho phép customer truy cập
//        http.authorizeRequests().antMatchers("/customer-page/**").
//                access("hasRole('CUSTOMER')");

        //Cho phép employee truy cập
//        http.authorizeRequests().antMatchers("/employee-page/**")
//                .access("hasAnyRole('EMPLOYEE','MANAGER')");

        //Chỉ cho phép manager truy cập
//        http.authorizeRequests().antMatchers("/manager-page/**")
//                .access("hasRole('MANAGER')");
        http.cors().and().csrf().disable()
                .authorizeRequests().antMatchers("/api/auth/sign-in","/api/auth/sign-up","/api/").permitAll()
                .antMatchers("/api/customer-page**").hasRole("USER")
                .antMatchers("/api/employee-page**").hasAnyRole("EMPLOYEE","MANAGER")
                .antMatchers("/api/manager-page**").hasRole("MANAGER")
                .anyRequest()
                .authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .exceptionHandling()
                .authenticationEntryPoint(unauthorizedHandler)
        .and().rememberMe().tokenRepository(persistentTokenRepository())
        .tokenValiditySeconds(60 * 60 * 24)
        .and()
        .logout().logoutSuccessUrl("/api/");
        http.addFilterBefore(authTokenFilter, UsernamePasswordAuthenticationFilter.class);
        //Cấu hình cho login
//        http.authorizeRequests().and().formLogin()
//                .loginProcessingUrl("/j_spring_security_check")
//                .usernameParameter("username")
//                .passwordParameter("password")
//                .loginPage("/api/auth/sign-in")
//                .loginProcessingUrl("/api/manager-page");

        //Cấu hình remember me
//        http.authorizeRequests().and()
//                .rememberMe().tokenRepository(this.persistentTokenRepository())
//                .tokenValiditySeconds(60 * 60 * 24);
    }

    private PersistentTokenRepository persistentTokenRepository() {
        InMemoryTokenRepositoryImpl memoryTokenRepository = new InMemoryTokenRepositoryImpl();
        return memoryTokenRepository;
    }
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

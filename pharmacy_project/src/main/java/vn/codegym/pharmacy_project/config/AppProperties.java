package vn.codegym.pharmacy_project.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class AppProperties {

    private final Auth auth =  new Auth();
    private final OAuth2 oAuth2 =  new OAuth2();

    public static class Auth{
        private String tokenSecret;
        private long tokenExpirationMs;

        public String getTokenSecret() {
            return tokenSecret;
        }

        public void setTokenSecret(String tokenSecret) {
            this.tokenSecret = tokenSecret;
        }

        public long getTokenExpirationMs() {
            return tokenExpirationMs;
        }

        public void setTokenExpirationMs(long tokenExpirationMs) {
            this.tokenExpirationMs = tokenExpirationMs;
        }
    }

    public static class OAuth2{
        private List<String> authorizedRedirectUris = new ArrayList<>();

        public List<String> getAuthorizedRedirectUris() {
            return authorizedRedirectUris;
        }

        public OAuth2 authorizedRedirectUris(List<String> authorizedRedirectUris){
            this.authorizedRedirectUris = authorizedRedirectUris;
            return this;
        }
    }

    public Auth getAuth() {
        return auth;
    }

    public OAuth2 getoAuth2() {
        return oAuth2;
    }
}

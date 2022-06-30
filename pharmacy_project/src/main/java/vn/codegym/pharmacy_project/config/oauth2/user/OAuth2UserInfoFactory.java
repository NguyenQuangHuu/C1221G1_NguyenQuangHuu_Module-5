package vn.codegym.pharmacy_project.config.oauth2.user;

import vn.codegym.pharmacy_project.exception.OAuth2AuthenticationProcessingException;

import java.util.Map;

public class OAuth2UserInfoFactory {

    public static OAuth2UserInfo getOAuth2UserInfo(
            String registrationId, Map<String, Object> attributes)
    {
        if(registrationId.equalsIgnoreCase("facebook")){
            return new FacebookOAuth2UserInfo(attributes);
        }else{
            throw new OAuth2AuthenticationProcessingException("Sorry! Login with");
        }
    }
}

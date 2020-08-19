package com.in28minutes.rest.webservices.restfulwebservices.basic.auth;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfigurationBasicAuth extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// disable csrf
		http.csrf().disable()
		.authorizeRequests()
		// enable all the options request without authentication
		.antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
		// authenticate all the other requests and use basic authentication
		.anyRequest().authenticated()
		.and()
		.httpBasic();
	}

}

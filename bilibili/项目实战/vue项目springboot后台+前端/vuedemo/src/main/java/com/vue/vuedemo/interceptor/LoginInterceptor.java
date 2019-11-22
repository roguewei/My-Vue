package com.vue.vuedemo.interceptor;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @ClassName LoginInterceptor
 * @Author: Winston
 * @Description: TODO
 * @Date:Create：in 2019/11/20 16:01
 * @Version：
 */
@Component
public class LoginInterceptor implements HandlerInterceptor {

    public static final String TOKEN_KEY = "Authorization";
    public static final String TOKEN_VALUE = "vue_token";

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String header = request.getHeader(TOKEN_KEY);
        if(TOKEN_VALUE.equals(header)){
            return true;
        }
        response.sendRedirect(request.getContextPath() + "/login");
        return false;
    }
}

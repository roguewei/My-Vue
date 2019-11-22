package com.vue.vuedemo.controller;

import com.vue.vuedemo.eneity.User;
import com.vue.vuedemo.interceptor.LoginInterceptor;
import com.vue.vuedemo.result.Result;
import com.vue.vuedemo.service.ILoginService;
import com.vue.vuedemo.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @ClassName LoginController
 * @Author: Winston
 * @Description: TODO
 * @Date:Create：in 2019/11/20 11:21
 * @Version：
 */
@RestController
public class LoginController {

    @Autowired
    private ILoginService loginService;

    @Autowired
    private IUserService userService;

    @GetMapping("/login")
    public Result login(){
        return Result.error(10000, "登录过期，请重新登录！");
    }

    @PostMapping("/login")
    public Result login(@RequestBody User user){
        boolean login = loginService.login(user);
        if(login){
            Map<String, String> result = new HashMap<>();
            result.put("token", LoginInterceptor.TOKEN_VALUE);
            return Result.success("登录成功！",result);
        }else{
            return Result.error(10010, "登录失败！");
        }
    }

}

package com.vue.vuedemo.service.impl;

import com.vue.vuedemo.eneity.User;
import com.vue.vuedemo.eneity.UserExample;
import com.vue.vuedemo.result.Result;
import com.vue.vuedemo.service.ILoginService;
import com.vue.vuedemo.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;

/**
 * @ClassName LoginServiceImpl
 * @Author: Winston
 * @Description: TODO
 * @Date:Create：in 2019/11/20 11:15
 * @Version：
 */
@Service
public class LoginServiceImpl implements ILoginService {

    @Autowired
    private IUserService userService;

    @Override
    public boolean login(User user) {
        if(StringUtils.isEmpty(user.getName()) || StringUtils.isEmpty(user.getPassword()))
            return false;
        Result query = userService.query(user, 1, 10);
        if(query != null)
            return true;
        return false;
    }
}

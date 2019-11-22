package com.vue.vuedemo.service.impl;

import com.vue.vuedemo.eneity.UserRole;
import com.vue.vuedemo.eneity.UserRoleExample;
import com.vue.vuedemo.mapper.UserRoleMapper;
import com.vue.vuedemo.service.IUserRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @ClassName UserRoleServiceImpl
 * @Author: Winston
 * @Description: TODO
 * @Date:Create：in 2019/11/20 16:33
 * @Version：
 */
@Service
public class UserRoleServiceImpl implements IUserRoleService {

    @Autowired
    private UserRoleMapper mapper;

    @Override
    public UserRole queryByUserId(Integer userId) {
        UserRoleExample example = new UserRoleExample();
        example.createCriteria().andUserIdEqualTo(userId);
        List<UserRole> userRoles = mapper.selectByExample(example);
        return userRoles.get(0);
    }
}

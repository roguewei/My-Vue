package com.vue.vuedemo.service.impl;

import com.vue.vuedemo.eneity.Role;
import com.vue.vuedemo.mapper.RoleMapper;
import com.vue.vuedemo.service.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @ClassName RoleServiceImpl
 * @Author: Winston
 * @Description: TODO
 * @Date:Create：in 2019/11/20 16:32
 * @Version：
 */
@Service
public class RoleServiceImpl implements IRoleService {

    @Autowired
    private RoleMapper mapper;

    @Override
    public Role queryById(Integer id) {
        return mapper.selectByPrimaryKey(id);
    }
}

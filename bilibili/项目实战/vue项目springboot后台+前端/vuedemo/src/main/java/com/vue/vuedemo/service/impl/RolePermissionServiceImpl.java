package com.vue.vuedemo.service.impl;

import com.vue.vuedemo.eneity.RolePermission;
import com.vue.vuedemo.eneity.RolePermissionExample;
import com.vue.vuedemo.mapper.RolePermissionMapper;
import com.vue.vuedemo.service.IRolePermissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @ClassName IRolePermissionServiceImpl
 * @Author: Winston
 * @Description: TODO
 * @Date:Create：in 2019/11/20 16:26
 * @Version：
 */
@Service
public class RolePermissionServiceImpl implements IRolePermissionService {

    @Autowired
    private RolePermissionMapper mapper;

    @Override
    public List<RolePermission> queryByRoleId(Integer roleId) {
        RolePermissionExample example = new RolePermissionExample();
        example.createCriteria().andRoleIdEqualTo(roleId);
        List<RolePermission> rolePermissions = mapper.selectByExample(example);
        return rolePermissions;
    }
}

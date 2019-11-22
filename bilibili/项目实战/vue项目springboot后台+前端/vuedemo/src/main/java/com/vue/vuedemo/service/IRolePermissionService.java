package com.vue.vuedemo.service;

import com.vue.vuedemo.eneity.RolePermission;

import java.util.List;

/**
 * @ClassName IRolePermission
 * @Author: Winston
 * @Description: TODO
 * @Date:Create：in 2019/11/20 16:25
 * @Version：
 */
public interface IRolePermissionService {

    List<RolePermission> queryByRoleId(Integer roleId);

}

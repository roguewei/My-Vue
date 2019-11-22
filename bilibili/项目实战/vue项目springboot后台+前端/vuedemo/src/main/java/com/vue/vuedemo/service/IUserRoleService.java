package com.vue.vuedemo.service;

import com.vue.vuedemo.eneity.UserRole;

public interface IUserRoleService {

    UserRole queryByUserId(Integer userId);

}

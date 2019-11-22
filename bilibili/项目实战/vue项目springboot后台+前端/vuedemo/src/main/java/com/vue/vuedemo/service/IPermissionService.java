package com.vue.vuedemo.service;

import com.vue.vuedemo.eneity.Permission;

import java.util.List;
import java.util.Map;

public interface IPermissionService {

    List<Map<String, Object>> query();

    Permission queryById(Integer id);

}

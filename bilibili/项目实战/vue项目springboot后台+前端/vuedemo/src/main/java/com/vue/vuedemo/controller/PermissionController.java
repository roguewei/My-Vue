package com.vue.vuedemo.controller;

import com.vue.vuedemo.eneity.Permission;
import com.vue.vuedemo.result.Result;
import com.vue.vuedemo.service.IPermissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

/**
 * @ClassName PermissionController
 * @Author: Winston
 * @Description: TODO
 * @Date:Create：in 2019/11/20 17:41
 * @Version：
 */
@RestController
@RequestMapping("/per")
public class PermissionController {

    @Autowired
    private IPermissionService permissionService;

    @GetMapping
    public Result query(){
        List<Map<String, Object>> query = permissionService.query();
        if(query != null && query.size() > 0)
            return Result.success(query);
        else
            return Result.error(10010, "菜单列表为空");
    }

}

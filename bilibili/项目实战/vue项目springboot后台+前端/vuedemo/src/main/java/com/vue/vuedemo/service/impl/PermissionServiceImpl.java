package com.vue.vuedemo.service.impl;

import com.vue.vuedemo.eneity.Permission;
import com.vue.vuedemo.eneity.PermissionExample;
import com.vue.vuedemo.mapper.PermissionMapper;
import com.vue.vuedemo.service.IPermissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @ClassName PermissionServiceImpl
 * @Author: Winston
 * @Description: TODO
 * @Date:Create：in 2019/11/20 16:26
 * @Version：
 */
@Service
public class PermissionServiceImpl implements IPermissionService {

    @Autowired
    private PermissionMapper mapper;

    @Override
    public List<Map<String, Object>> query() {
        List<Map<String, Object>> navList = new ArrayList<>();
        PermissionExample example = new PermissionExample();
        example.createCriteria().andTypeEqualTo(0);
        // 一级导航
        List<Permission> navPer = mapper.selectByExample(example);

        navPer.forEach(nav -> {
            PermissionExample menuExample = new PermissionExample();
            menuExample.createCriteria().andTypeEqualTo(1).andParentIdEqualTo(nav.getId());
            // 二级导航（子菜单）
            List<Permission> menuPer = mapper.selectByExample(menuExample);

            List<Map<String, Object>> menuList = new ArrayList<>();
            menuPer.forEach(menuItem -> {

                PermissionExample btnExample = new PermissionExample();
                btnExample.createCriteria().andTypeEqualTo(2).andParentIdEqualTo(menuItem.getId());
                // 三级导航（按钮）
                List<Permission> btnPer = mapper.selectByExample(btnExample);

                List<Map<String, Object>> btnList = new ArrayList<>();
                btnPer.forEach(btnItem -> {
                    Map<String, Object> third = putMap(btnItem);

                    btnList.add(third);
                });

                Map<String, Object> second = putMap(menuItem);
                second.put("children", btnList);

                menuList.add(second);
            });

            Map<String, Object> first = putMap(nav);
            first.put("children", menuList);
            navList.add(first);
        });
        return navList;
    }

    private Map<String, Object> putMap(Permission nav) {
        Map<String, Object> first = new HashMap<>();
        first.put("id", nav.getId());
        first.put("name", nav.getPerName());
        first.put("path", nav.getPerPath());
        first.put("parentId", nav.getParentId());
        first.put("type", nav.getType());
        first.put("icon", nav.getPerIcon());
        return first;
    }

    @Override
    public Permission queryById(Integer id) {
        return mapper.selectByPrimaryKey(id);
    }
}

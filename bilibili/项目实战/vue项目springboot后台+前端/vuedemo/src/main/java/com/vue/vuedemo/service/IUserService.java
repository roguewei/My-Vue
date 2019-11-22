package com.vue.vuedemo.service;

import com.vue.vuedemo.eneity.User;
import com.vue.vuedemo.result.Result;

import java.util.List;

public interface IUserService {

    Result query(User user, Integer page, Integer length);

    User queryById(Integer id);

    void add(User user);

    void update(User user);

    void del(Integer id);

}

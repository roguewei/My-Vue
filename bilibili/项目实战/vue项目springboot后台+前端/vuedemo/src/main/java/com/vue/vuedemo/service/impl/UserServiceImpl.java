package com.vue.vuedemo.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.vue.vuedemo.eneity.User;
import com.vue.vuedemo.eneity.UserExample;
import com.vue.vuedemo.mapper.UserMapper;
import com.vue.vuedemo.result.Result;
import com.vue.vuedemo.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;

/**
 * @ClassName UserServiceImpl
 * @Author: Winston
 * @Description: TODO
 * @Date:Create：in 2019/11/19 9:08
 * @Version：
 */
@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    private UserMapper mapper;

    @Override
    public Result query(User user, Integer page, Integer length) {
        PageHelper.startPage(page, length);

        UserExample example = new UserExample();
        UserExample.Criteria criteria = example.createCriteria();
        if(!StringUtils.isEmpty(user.getName())){
            criteria.andNameEqualTo(user.getName());
        }
        if(!StringUtils.isEmpty(user.getPassword())){
            criteria.andPasswordEqualTo(user.getPassword());
        }
        List<User> users = mapper.selectByExample(example);
        PageInfo pageInfo = new PageInfo(users);
        return Result.success("success", users, pageInfo);
    }

    @Override
    public User queryById(Integer id) {
        return mapper.selectByPrimaryKey(id);
    }

    @Override
    public void add(User user) {
        user.setState(1);
        mapper.insertSelective(user);
    }

    @Override
    public void update(User user) {
        mapper.updateByPrimaryKeySelective(user);
    }

    @Override
    public void del(Integer id) {
        User user = mapper.selectByPrimaryKey(id);
        user.setState(0);
        mapper.updateByPrimaryKeySelective(user);
    }
}

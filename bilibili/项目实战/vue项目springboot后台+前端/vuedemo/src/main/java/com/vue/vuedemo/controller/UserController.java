package com.vue.vuedemo.controller;

import com.vue.vuedemo.eneity.User;
import com.vue.vuedemo.result.Result;
import com.vue.vuedemo.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @ClassName UserController
 * @Author: Winston
 * @Description: TODO
 * @Date:Create：in 2019/11/19 9:08
 * @Version：
 */
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private IUserService service;

    @GetMapping
    public Result query(User user, Integer page, Integer length){
        return service.query(user, page, length);
    }

    @GetMapping("/queryById")
    public Result queryById(Integer id){
        User user = service.queryById(id);
        return Result.success(user);
    }

    @PostMapping("/add")
    public Result add(@RequestBody User user){
        service.add(user);
        return Result.success("新增成功！");
    }

    @PostMapping("/update")
    public Result postParam(@RequestBody User user){
        service.update(user);
        return Result.success("修改成功");
    }

    @GetMapping("/del")
    public Result del(Integer id){
        service.del(id);
        return Result.success("删除成功");
    }

}

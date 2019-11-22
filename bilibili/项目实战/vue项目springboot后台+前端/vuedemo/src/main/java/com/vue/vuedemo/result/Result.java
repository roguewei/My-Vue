package com.vue.vuedemo.result;

import com.github.pagehelper.PageInfo;
import lombok.Data;

import java.io.Serializable;

/**
 * @ClassName Result
 * @Author: Winston
 * @Description: TODO
 * @Date:Create：in 2019/11/19 9:12
 * @Version：
 */
@Data
public class Result<T> implements Serializable {

    private static final long serialVersionUID = 8735132092273200831L;

    private Integer status;
    private String msg;
    private T data;
    private Integer page = 1;
    private Integer count = 0;
    private Long total = 0L;

    private Result(T data){
        this.status = 200;
        this.msg = "success";
        this.data = data;
    }

    private Result(String msg, T data){
        this.status = 200;
        this.msg = msg;
        this.data = data;
    }

    private Result(String msg, T data, PageInfo pageInfo){
        this.status = 200;
        this.msg = msg;
        this.data = data;
        if(pageInfo != null){
            this.page = pageInfo.getPageNum();
            this.count = pageInfo.getSize();
            this.total = pageInfo.getTotal();
        }
    }

    private Result(Integer status, String msg){
        this.status = status;
        this.msg = msg;
        this.data = null;
    }

    public static <T> Result<T> success(T data){
        return new Result<T>(data);
    }

    public static <T> Result<T> success(String msg, T data){
        return new Result<T>(msg, data);
    }

    public static <T> Result<T> success(String msg, T data, PageInfo pageInfo){
        return new Result<T>(msg, data, pageInfo);
    }

    public static <T> Result<T> error(Integer status, String msg){
        return new Result<T>(status, msg);
    }

}

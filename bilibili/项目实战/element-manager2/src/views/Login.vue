<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" />
      </div>
      <el-form
        ref="loginFormRef"
        :rules="loginFormRules"
        :model="form"
        label-width="80px"
        class="login_form"
      >
        <el-form-item label="用户名" for="name" prop="name">
          <el-input
            v-model="form.name"
            id="name"
            placeholder="请输入用户名"
            prefix-icon="iconfont wgsaccount"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" for="password" prop="password">
          <el-input
            v-model="form.password"
            id="password"
            type="password"
            placeholder="请输入密码"
            prefix-icon="iconfont wgspassword"
          ></el-input>
        </el-form-item>
        <el-form-item class="login_form_btn" label-width="0px">
          <el-button type="primary" @click="loginClick">登录</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { request } from '../network/request'

export default {
  name: 'Login',
  data() {
    return {
      form: {
        name: '',
        password: ''
      },
      loginFormRules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    loginClick() {
      this.$refs.loginFormRef.validate(valid => {
        if (!valid) {
          return
        } else {
          request({
            url: '/login',
            data: this.form,
            method: 'post'
          }).then(res => {
            console.log(res)

            if (res.status === 200) {
              this.$message({
                message: res.msg,
                type: 'success',
                showClose: true
              })
              // 保存数据到sessionStroage，保存数据到sessionStroage只在当前网站打开期间生效
              window.sessionStorage.setItem('username', res.data.name)
              // 通过编程式导航跳转页面
              this.$router.push('/home')
            } else {
              this.$message({
                message: res.msg,
                type: 'error',
                showClose: true
              })
            }
          })
        }
      })
    },
    reset() {
      // 调用element里form表单的函数来重置表单，如果上面的data里设置了初始值，则重置之后就会是初始值
      this.$refs.loginFormRef.resetFields()
    }
  }
}
</script>
<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 5px;

  // 绝对定位
  position: absolute;
  left: 50%;
  top: 50%;
  // 偏移量，偏移相对自身50%
  transform: translate(-50%, -50%);
}

.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  // 偏移量，偏移相对自身50%
  transform: translate(-50%, -50%);
  background-color: #fff;
  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}

.btns {
  display: flex;
  justify-content: flex-end;
}

.login_form_btn {
  margin-left: 0%;
  text-align: center;
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
}
</style>

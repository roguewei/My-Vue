<template>
  <div>
    <!-- 导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>系统管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区 -->
    <el-card class="box-card">
      <!-- gutter设置每个el-col之间的间隙 -->
      <el-row :gutter="10">
        <el-col :span="12">
          <el-input
            placeholder="请输入内容"
            v-model="queryInfo.name"
            class="input-with-select"
            clearable
            @clear="getUserList"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="getUserList"
            ></el-button>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" @click="showAddDialog()">新增</el-button>
        </el-col>
      </el-row>

      <!-- 表格 -->
      <el-table :data="userList" style="width: 100%" boder stripe>
        <el-table-column type="index" width="50"> </el-table-column>
        <el-table-column prop="age" label="年龄" width="180"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
        <el-table-column label="状态">
          <!-- 使用作用域插槽获取当前行的数据 -->
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.state"
              :active-value="1"
              :inactive-value="0"
              @change="switchChange(scope.row)"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <!-- 使用作用域插槽获取当前行的数据 -->
          <template slot-scope="scope">
            <el-tooltip
              class="item"
              effect="dark"
              content="修改"
              placement="top"
              :enterable="false"
            >
              <el-button
                type="warning"
                icon="el-icon-edit"
                size="mini"
                @click="showEditDialog(scope.row.id)"
              ></el-button>
            </el-tooltip>
            <el-tooltip
              class="item"
              effect="dark"
              content="删除"
              placement="top"
              :enterable="false"
            >
              <el-button
                type="danger"
                icon="el-icon-delete"
                size="mini"
                @click="showEditDialog(scope.row)"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页区 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.page"
        :page-sizes="pageSizes"
        :page-size="queryInfo.length"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>

    <!-- 新增、修改用户对话框 -->
    <el-dialog
      title="新增、修改用户"
      :visible.sync="addDialogVisible"
      width="50%"
      @close="addDialogClose"
      @before-close="addDialogBeforeClose"
    >
      <!-- 内容主体区 -->
      <el-form
        :model="addForm"
        :rules="addFormRules"
        ref="addFormRef"
        label-width="70px"
      >
        <el-form-item label="id" prop="id" class="el-form-item-id">
          <el-input v-model="addForm.id"></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="name">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="addForm.password"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="addForm.age"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="addForm.address"></el-input>
        </el-form-item>
      </el-form>
      <!-- 底部按钮区 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 提示对话框 -->
    <el-dialog title="注销用户" :visible.sync="dialogVisible" width="30%">
      <span>确定删除用户吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { request } from '../../../network/request'

export default {
  name: '',
  data() {
    // 自定义校验规则
    var checkAge = (rule, value, callback) => {
      const regAge = /\d+/
      if (!value) {
        return callback(new Error('年龄不能为空'))
      } else if (!regAge.test(value)) {
        return callback(new Error('请输入数字值'))
      } else if (value < 18) {
        return callback(new Error('年龄不能小于18岁'))
      } else {
        callback()
      }
    }
    return {
      msg: 'this is user page',
      isAddDialog: true,
      // 用户列表参数
      queryInfo: {
        name: '',
        page: 1,
        length: 5
      },
      userList: [],
      total: 0,
      pageSizes: [5, 10, 100, 500],
      dialogVisible: false,
      // 添加用户对话框的显示隐藏
      addDialogVisible: false,
      // 添加用户的表单数据对象
      addForm: {
        name: '',
        password: '',
        age: '',
        address: ''
      },
      // 表单验证规则
      addFormRules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        age: [
          { required: true, message: '请输入年龄', trigger: 'blur' },
          // { type: 'number', message: '年龄必须为数字值' }
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    addDialogClose() {
      this.$refs.addFormRef.resetFields()
    },
    handleSizeChange(length) {
      this.queryInfo.length = length
      this.getUserList()
    },
    handleCurrentChange(current) {
      this.queryInfo.page = current
      this.getUserList()
    },
    switchChange(userInfo) {
      request({
        url: '/user/update',
        method: 'post',
        data: userInfo
      }).then(res => {
        if (res.status === 200) {
          return this.$message({
            message: res.msg,
            type: 'success',
            showClose: true
          })
        } else {
          userInfo.state = userInfo.state === 1 ? 0 : 1
          return this.$message({
            message: '更新用户状态失败',
            type: 'error',
            showClose: true
          })
        }
      })
    },
    addUser() {
      this.$refs.addFormRef.validate(valid => {
        if (!valid) return
        let reqPath = ''
        if (this.isAddDialog) {
          reqPath = '/user/add'
        } else {
          reqPath = '/user/update'
        }
        request({
          url: reqPath,
          data: this.addForm,
          method: 'post'
        }).then(res => {
          // this.$message.success(res.msg)
          this.$message({
            message: res.msg,
            type: 'success',
            showClose: true
          })
          this.addDialogVisible = false
          this.getUserList()
        })
      })
    },
    userDel(userInfo) {
      request({
        url: '/user/del',
        method: 'get',
        params: {
          id: userInfo.id
        }
      }).then(res => {
        userInfo.state = 0
        this.$message({
          message: '删除用户成功',
          type: 'error',
          showClose: true
        })
      })
    },
    userUpdate(userInfo) {
      console.log(userInfo)
      this.getUserList()
    },
    showAddDialog() {
      // console.log('----------')

      this.isAddDialog = true
      this.addDialogVisible = true
      // this.$refs.addFormRef.resetFields()
    },
    showEditDialog(id) {
      this.addDialogVisible = true
      this.isAddDialog = false

      request({
        url: '/user/queryById',
        method: 'get',
        params: {
          id: id
        }
      }).then(res => {
        console.log(res);
        
        this.addForm = res.data
      })
    },
    addDialogBeforeClose() {
      this.$refs.addFormRef.resetFields()
    },
    getUserList() {
      request({
        url: '/user',
        method: 'get',
        params: this.queryInfo
      }).then(data => {
        console.log(data)
        if (data.status !== 200) {
          this.$message({
            message: data.msg,
            type: 'error',
            showClose: true
          })
          return
        }
        this.userList = data.data
        this.total = data.total
      })
    }
  },
  created() {
    this.getUserList()
  }
}
</script>
<style>
.el-table {
  margin-top: 15px;
}
.el-pagination {
  margin-top: 15px;
}
.el-form-item-id {
  display: none;
}
</style>

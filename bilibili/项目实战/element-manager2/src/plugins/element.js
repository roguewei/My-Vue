import Vue from 'vue'
import { Button, Form, FormItem, Input } from 'element-ui'
// 弹框提示组件
import { Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

// 弹框需要全局挂载,这样每个组件都可以直接通过this.$message来调用
Vue.prototype.$message = Message

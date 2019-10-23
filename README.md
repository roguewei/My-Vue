# My-Vue Note

+ v-cloak
>隐藏vue标签

+ v-html
>解析HTML字符串

+ v-bind
>属性绑定机制 缩写是 ：
>>示例 < input type="button" value="按钮" v-bind:title="mytitle"/>
---
>>简写 < input type="button" value="按钮" :title="mytitle"/>

+ v-on
>事件保定机制 缩写是 @
>>示例 < input type="button" value="按钮" :title="mytitle" v-on:click="show"/>
---
>>简写 < input type="button" value="按钮" :title="mytitle" @click="show"/>


## 事件修饰符
+ .stop
> 阻止冒泡
+ .prevent
> 阻止默认事件
+ .capture
> 添加事件侦听器是使用事件捕获模式
+ .self
> 只当事件在该元素本身（比如不是子元素）触发时触发回调
+ .once
> 事件只触发一次

# 什么是路由：

路由其实就跟现实中的路由器一样的，对外是只有一根线连通的，然后对内进行转发到各个连接到路由的设备。



## 路由器的配置：
> 参考文档：https://router.vuejs.org/zh-cn/api/options.html#routes

```javascript
{
  // 访问路径，带斜杆“/”则会从根目录请求
  path: '/index',
  // 使用的组件
  // component: Chart,
  // 路由的名称
  name: 'index',
  // 命名视图组件配置
  components: {
    // 默认的视图组件
    default: Chart,
    // 指定name的视图组件
    'hello': HelloWorld
  },
  // 重定向
  // redirect: '/admin/index',
  // 配置，待研究
  props: '',
  // 别名，意思是访问 home时也会路由到 index，但url上不会变
  alias: '/home',
  // 子路由
  children: [{
    path: 'user/:userId',
    name: 'user',
    component: User,
    // 子路由
    children: [{
      path: 'userInfo',
      name: 'userInfo',
      component: UserInfo
    }]
  }],
  // 进入之前的处理，待研究
  // beforeEnter(to, from, next) {
  //   return;
  // },
  // 路由元素，待研究
  meta: {},
  // 匹配规则是否大小写敏感？(默认值：false)
  caseSensitive: false,
  //编译正则的选项，待研究
  pathToRegexpOptions: {}
}
```

## router-link 的使用：
> 参考文档：https://router.vuejs.org/zh-cn/api/router-link.html

```html
<!-- 字符串 -->
<router-link to="home">Home</router-link>
<!-- 渲染结果 -->
<a href="home">Home</a>

<!-- 使用 v-bind 的 JS 表达式 -->
<router-link v-bind:to="'home'">Home</router-link>

<!-- 不写 v-bind 也可以，就像绑定别的属性一样 -->
<router-link :to="'home'">Home</router-link>

<!-- 同上 -->
<router-link :to="{ path: 'home' }">Home</router-link>

<!-- 命名的路由 -->
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>

<!-- 带查询参数，下面的结果为 /register?plan=private -->
<router-link :to="{ path: 'register', query: { plan: 'private' }}">Register</router-link>
```


## query 与 params 区别：


**query 是在url路径上问号之后的查询条件，例如：**

router-link：
```html
<router-link :to="{ path: 'auth', query: {authId: 123} }">权限页面</router-link>
```

auth 页面：

请求的路径效果“http://localhost:8848/index/auth?authId=123”，会在url问号后面拼接参数，这里的authId只能通过 this.$route.query.authId 来获取

```javascript
let authId = this.$route.query.authId
```




**params 是请求页面时，router-link 上带过来的参数，例如：**

router-link：
```html
<router-link :to="{ path: 'auth', params: {authId: 123} }">权限页面</router-link>
```

auth 页面：

请求的路径效果"http://localhost:8848/index/auth"，不会直接在url后面拼接参数的，这里的authId只能通过 this.$route.params.authId 来获取

```javascript
let authId = this.$route.params.authId
```

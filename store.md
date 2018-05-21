#store
> 状态管理器，其实也可以理解一个全局变量

在开发中，可能有需要对一个对象进行多次传值。

例如：

A.vue
```javascript
<a href="javascript:void(233)" @click="showDialog = true">显示弹窗</a>

<t-dialog :showDialog.sync="showDialog"></t-dialog>
```

dialog.vue
```javascript
<div v-show="showDialog">
这是内容
<a href="javascript:void(233)" @click="showDialog = false">关闭</a>
</div>

...

props:{
  showDialog: false
},
// 监听showDialog的变化
switch:{
  showDialog(value){
    this.$emit('update:showDialog', value);
  }
}
```

上面这种太麻烦了，这个时候如果用vuex就简单很多了

main.js
```javascript
let store = new vuex.Store({
  state: {
    showDialog: false
  },
  mutations:{
    showDialog(state, data){
      state.showDialog = data;
    }
  }
})

new Vue({
  ...
  store
  ...
})
```

A.vue
```javascript
<a href="javascript:void(233)" @click="$store.commit('showDialog', true)">显示弹窗</a>

<t-dialog></t-dialog>
```

dialog.vue
```javascript
<div v-show="$store.state.showDialog">
这是内容
<a href="javascript:void(233)" @click="$store.commit('showDialog', false)">关闭</a>
</div>

...
props:{
},
switch:{
}
```

但是都这样维护在一个js中，后期会变得很混乱很难维护和管理，所以需要按模块来定义管理好这些状态数据。



参考文档：
[https://segmentfault.com/a/1190000009404727](https://segmentfault.com/a/1190000009404727)

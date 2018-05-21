
# 过滤器
> 过滤器就是对接收到的数据进行处理。

也许我们有需求需要对name的值进行处理转换，我们可以写一个计算或方法来处理，但是计算和方法有时候不够直观，而且需要多次处理的时候也比较麻烦。这时候就可以使用过滤器来处理了，过滤器的使用跟Linux的命令中的管道（|）一样。

比如：
```javascript
<h1>大家好， 我是{{name|change}}</h1>
<a :href="url | changeUrl">test</a>

...
data(){
  return {
    name: '骗子',
    url: '/api/open/'
  }
},
filters:{
  change(text){
    let reg = /骗子/ig;
    if(reg.test(text)){
      return '一名遵纪守法的普通百姓';
    }else{
      return text;
    }
  },
  changeUrl(text){
    return 'http://neice.ezhiyang.com' + text;
  }
}
```

也可以绑定到全局的过滤器上。

```javascript
Vue.filter('changeUrl', function (text) {
  return 'http://neice.ezhiyang.com' + text;
})
```

但是如果过滤器多了也不方便维护，这个时候可以单独抽取出来。

filters/index.js
```javascript
let change = function(text){
  let reg = /骗子/ig;
  if(reg.test(text)){
    return '一名遵纪守法的普通百姓';
  }else{
    return text;
  }
}

let changeUrl = function(text){
  return 'http://neice.ezhiyang.com' + text;
}

exports default {
  change,
  changeUrl
}
```

main.js
```javascript
import filters from './filters'

// 循环绑定全局的过滤器
for(key in filters){
  Vue.filter(key, filters[key]);
}
```





参考文档：
[https://cn.vuejs.org/v2/guide/filters.html](https://cn.vuejs.org/v2/guide/filters.html)

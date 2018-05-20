<template>
  <div class="hello">
    <el-table :data="tableData" style="width: 100%" stripe>
      <el-table-column :prop="item.code" :label="item.label" :width="item.width" v-for="(item,i) in titles" :key="i" sortable :sort-method="sort(item)">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  computed: {},
  methods: {
    sort(item) {
      return function(a, b) {
        if (item.code === "username") {
          console.log("-------------%o%o", a, b);
        } else {
          console.log("+++++++++++++%o%o", a, b);
        }
      };
    }
  },
  data() {
    return {
      custSort: ["username"],
      tableData: [
        {
          username: "xiaoming",
          password: "123123",
          email: "xiaoming@163.com",
          phone: "15618526752"
        },
        {
          username: "xiaomi",
          password: "123123",
          email: "xiaomi@163.com",
          phone: "15618526752"
        },
        {
          username: "xiaomijiao",
          password: "123123",
          email: "xiaomijiao@163.com",
          phone: "15618526752"
        },
        {
          username: "xiaohuajiao",
          password: "123123",
          email: "xiaohuajiao@163.com",
          phone: "15618526752"
        },
        {
          username: "xiaohongjiao",
          password: "123123",
          email: "xiaohongjiao@163.com",
          phone: "15618526752"
        },
        {
          username: "xiaolajiao",
          password: "123123",
          email: "xiaolajiao@163.com",
          phone: "15618526752"
        },
        {
          username: "xiaohuli",
          password: "123123",
          email: "xiaohuli@163.com",
          phone: "15618526752"
        },
        {
          username: "xiaotuzi",
          password: "123123",
          email: "xiaotuzi@163.com",
          phone: "15618526752"
        },
        {
          username: "xiaolaoxu",
          password: "123123",
          email: "xiaolaoxu@163.com",
          phone: "15618526752"
        },
        {
          username: "xiaomu",
          password: "123123",
          email: "xiaomu@163.com",
          phone: "15618526752"
        }
      ],
      titles: [
        {
          code: "username",
          label: "用户名"
        },
        {
          code: "password",
          label: "密码"
        },
        {
          code: "email",
          label: "邮箱"
        },
        {
          code: "phone",
          label: "电话"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

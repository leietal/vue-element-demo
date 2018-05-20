<template>
  <div class="home-container">
    <div class="home-header">

    </div>
    <div class="home-content">
      <div class="home-aside">
        <menu-list :menus="menus" />
      </div>
      <div class="home-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import MenuList from "./MenuList";

export default {
  name: "Home",
  components: {
    MenuList
  },
  data() {
    return {
      menus: [
        {
          icon: "el-icon-setting",
          title: "a测试111",
          router: {
            name: "user",
            params: {
              type: 1000
            }
          }
        },
        {
          icon: "el-icon-document",
          title: "b测试222",
          router: {
            name: "user",
            params: {
              type: 2000
            }
          }
        },
        {
          icon: "el-icon-date",
          title: "c测试333",
          router: {
            name: "user",
            params: {
              type: 3000
            }
          }
        },
        {
          icon: "el-icon-bell",
          title: "d测试444",
          router: {
            name: "user",
            params: {
              type: 4000
            }
          }
        },
        {
          icon: "el-icon-goods",
          title: "测试555",
          children: [
            {
              title: "测试51",
              router: {
                name: "user",
                params: {
                  type: 5000
                }
              }
            },
            {
              title: "测试52",
              router: {
                name: "user",
                params: {
                  type: 6000
                }
              }
            }
          ]
        }
      ]
    };
  },
  mounted() {},
  methods: {},
  computed: {},
  watch: {}
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.home-header {
  height: 60px;
  flex-grow: 0;
  flex-shrink: 0;
  background-color: #f56c6c;
  z-index: 2;
}
.home-content {
  height: auto;
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
}
.home-aside {
  width: 200px;
  flex-grow: 0;
  flex-shrink: 0;
  background-color: #dcdfe6;
}
.home-main {
  flex-grow: 1;
  flex-shrink: 0;
}
</style>


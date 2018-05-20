<template>
  <div class="menu-item" @click="triggerMenu()" :class="{'active': !hasChind && menu.active}">
    <span class="menu-icon">
      <i :class="menu.icon"></i>
    </span>
    <span class="menu-title">{{menu.title | capitalize | reverseString}}</span>
    <span class="menu-trigger">
      <i class="el-icon-arrow-down" v-if="menu.children"></i>
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MenuItem",
  props: {
    menu: {}
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    triggerMenu(idx, pidx) {
      if (this.hasChind) {
        this.$set(this.menu, "open", !this.menu.open);
      } else {
        this.$router.push(this.menu.router);
        this.$emit("trigger", this.menu);
      }
    }
  },
  computed: {
    ...mapState({
      active: state => state.menu.active
    }),
    hasChind() {
      return this.menu.children;
    }
  },
  watch: {}
};
</script>

<style scoped>
.menu-item {
  display: block;
  padding: 16px 0;
  font-size: 14px;
  color: #303133;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu-item .menu-icon,
.menu-item .menu-trigger {
  flex-grow: 0;
  flex-shrink: 0;
  text-align: center;
  width: 40px;
}
.menu-item .menu-title {
  width: auto;
  margin: auto 5px;
  text-align: left;
  flex-grow: 1;
  flex-shrink: 0;
}
.menu-item:hover {
  background-color: #f2f6fc;
  color: #f56c6c;
}
.menu-open .el-icon-arrow-down {
  transform: rotate(180deg);
}
.sub-list .menu-item {
  font-size: 13px;
}
.menu-item.active {
  color: #f56c6c;
  background-color: #f2f6fc;
  box-shadow: inset -3px 0 0 0 #f56c6c;
}
</style>
<template>
  <div class="menu-container">
    <div v-for="(menu, i) in menus" :key="i">
      <menu-item :menu="menu" @trigger="triggerActive" :class="{'menu-open': menu.open}"></menu-item>
      <div class="sub-list" v-if="menu.children" v-show="menu.open">
        <menu-item :menu="sub" v-for="(sub, si) in menu.children" :key="si" @trigger="triggerActive"></menu-item>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MenuItem from "./MenuItem";

export default {
  name: "MenuList",
  components: {
    MenuItem
  },
  props: {
    menus: {}
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    triggerAll(list) {
      list.forEach(item => {
        this.$set(item, "active", false);
        if (item.children) {
          this.triggerAll(item.children);
        }
      });
    },
    triggerActive(menu) {
      this.triggerAll(this.menus);
      this.$set(menu, "active", true);
    }
  },
  computed: {
    ...mapState({
      active: state => state.menu.active,
      trigger: state => state.menu.trigger
    })
  },
  watch: {}
};
</script>

<style scoped>
.menu-container {
  margin-top: 20px;
}
</style>
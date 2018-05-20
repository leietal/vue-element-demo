<template>
    <div v-show="show">
        <h1>hello</h1>
        <a href="javascript:void(233)" @click="$store.dispatch('switch_dialog_action')">关闭</a>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Dialog",
  props: {},
  data() {
    return { sss: false };
  },
  mounted() {
    this.sss = this.$store.state.dialog.showDialog;
  },
  methods: {
    closeDialog() {
      this.$store.commit("changeShowDialog"); //dialog.showDialog
    }
  },
  computed: {
    ...mapState({
      show: state => state.dialog.showDialog
    })
  },
  watch: {}
};
</script>

<style scoped>
h1 {
  color: rgb(21, 166, 233);
  font-size: 24px;
}
</style>
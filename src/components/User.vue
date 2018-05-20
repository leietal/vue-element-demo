<template>
  <div>
    <h1>User--->hello {{type}}</h1>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      type: null
    };
  },
  mounted() {},
  methods: {},
  computed: {},
  watch: {
    $route: {
      handler(to, from) {
        this.type = this.$route.params.type;
      },
      immediate: true
    }
  }
};
</script>

<style scoped>
h1 {
  color: rgb(233, 21, 64);
}
</style>
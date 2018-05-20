<template>
  <div>
    <h1>System--->hello {{type}}</h1>
  </div>
</template>

<script>
export default {
  name: "System",
  data() {
    return {
      type: this.$route.params.type
    };
  },
  mounted() {},
  methods: {
  },
  computed: {},
  watch: {}
};
</script>

<style scoped>
h1 {
  color: rgb(233, 21, 21);
}
</style>
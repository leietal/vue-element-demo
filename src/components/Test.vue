<template>
  <div>
    <h1>Test--->hello {{type}}</h1>
  </div>
</template>

<script>
export default {
  name: "Test",
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
  color: rgb(21, 233, 39);
}
</style>
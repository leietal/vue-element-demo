<template>
  <div>
    <h1>Role--->hello {{type}}</h1>
  </div>
</template>

<script>
export default {
  name: "Role",
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
  color: rgb(120, 21, 233);
}
</style>
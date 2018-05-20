<template>
  <div>
    <h1>Base--->hello {{type}}</h1>
  </div>
</template>

<script>
export default {
  name: "Base",
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
  color: rgb(21, 166, 233);
}
</style>
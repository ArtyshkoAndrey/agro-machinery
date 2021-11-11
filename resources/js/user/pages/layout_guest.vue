<template>
  <Child />
</template>

<script>
import Child from "~/user/components/Child.vue";
export default {
  components: {
    Child
  },
  middleware: 'guest',
  scrollToTop: false,
  data: () => ({
    title: window.config.appName,
  }),
  mounted() {
    this.$root.$loading.finish()
  }
}
</script>

<style scoped>

</style>

<template>
  <Child/>
</template>

<script>
import Child from "~/user/components/Child.vue";
export default {
  middleware: 'guest',
  metaInfo() {
    return {title: 'Главная страница'}
  },
  scrollToTop: false,
  components: {
    Child
  },
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

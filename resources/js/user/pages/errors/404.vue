<template>
  <div class="row text-center">
    <h3>{{ $t('errors.404.content') }}</h3>
  </div>
</template>

<script>
export default {
  metaInfo () {
    return { title: this.$t('error.404.title') }
  },
  scrollToTop: false,
  data: () => ({
    title: window.config.appName
  })
}
</script>

<style scoped>

</style>

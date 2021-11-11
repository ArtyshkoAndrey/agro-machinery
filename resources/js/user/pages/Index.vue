<template>
  <div>
    <HeaderSection />
  </div>
</template>

<script>
import HeaderSection from "~/user/components/HeaderSection";
export default {
  name: "Index",
  components: {
    HeaderSection
  },
  metaInfo() {
    return {
      title: 'Главная страница'
    }
  },
}
</script>

<style scoped>

</style>
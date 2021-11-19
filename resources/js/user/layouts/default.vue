<template>
  <div>
    <Menu />
    <main class="container">
      <Child />
    </main>
  </div>
</template>

<script>
import Child from '~/user/components/Child.vue';
import Menu from '~/user/components/Menu.vue';
export default {
  name: 'Default',
  components: {
    Child,
    Menu
  },
  data: () => {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import "resources/scss/user/variables";
  main {
    margin-top: 80px;

    @include respond-to(md) {
      margin-top: 220px;
    }

    @include respond-to(lg) {
      margin-top: 250px;
    }
  }
</style>

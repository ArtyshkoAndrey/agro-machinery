<template>
  <div>
    <Menu />
    <main class="container" style="margin-top: 70px">
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

<style>
</style>

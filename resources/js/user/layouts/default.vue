<template>
  <main class="container">
    <Child />
  </main>
</template>

<script>
import Child from '~/user/components/Child.vue';

export default {
  name: 'Default',
  components: {
    Child
  },
  data: () => {
    return {}
  }
}
</script>

<style>
</style>

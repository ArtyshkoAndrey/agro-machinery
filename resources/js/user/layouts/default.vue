<template>
  <div class="theme-container" :style="!user ? 'margin-left: 0' : ''">

    <main class="container">
      <Child />
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Child from '~/user/components/Child.vue'
export default {
  name: 'Default',
  components: {
    Child
  },
  data: () => {
    return {
    }
  }
}
</script>

<style>
</style>

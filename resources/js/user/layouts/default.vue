<template>
  <div>
    <Menu />
    <main class="container">
      <Child />
    </main>

<!--    <Footer />-->

    <Cart />
  </div>
</template>

<script>
import Child from '~/user/components/Child';
import Menu from '~/user/components/Menu';
import Cart from '~/user/components/Cart';
import Footer from '~/user/components/Footer';

export default {
  name: 'Default',
  components: {
    Child,
    Menu,
    Cart,
    Footer
  },
  data: () => {
    return {}
  },
  mounted() {
    this.$store.dispatch('cart/fetchProducts')
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

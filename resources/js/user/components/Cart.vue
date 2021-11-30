<template>
  <div id="modal-cart">
    <transition name="fade">
      <div v-if="isRoute" class="container position-relative d-flex justify-content-end">
        <button class="opened-model" form @click="redirect()">
          <span class="badge rounded-pill bg-dark">
            {{ products_count }}
          </span>
          <iconly name="buy" type="outline" />
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  data: () => ({

  }),
  computed: {
    ...mapGetters({
      products_count: 'cart/products_count'
    }),
    isRoute () {
      if (this.$route.name === null) {
        return false
      }
      return this.$route.name !== 'cart'
    }
  },
  methods: {
    redirect () {
      this.$router.push({name: 'cart'})
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/user/variables';
#modal-cart {
  z-index: 100;

  button.opened-model {
    position: fixed;
    bottom: 30px;
    border-radius: 100%;
    background: $color-orange;
    border: 0;
    height: 70px;
    width: 70px;
    z-index: 12;

    margin-right: 10px;

    @include respond-to(md) {
      margin-right: 0;
      bottom: 80px;
    }

    .badge {
      position: absolute;
      top: -10px;
      right: -10px;
      border-radius: 100%;
      background: $color-dark;
      color: #FFFFFF;
      text-align: center;

      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
    }

    svg {
      height: 32px;
      width: 32px;
    }
  }
}
</style>

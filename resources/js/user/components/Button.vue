<template>
  <button class="btn"
          :class="($attrs.rounded_angle === '' ? 'btn-rounded-angle ' : '') +
            ($attrs.rounded === '' ? 'btn-rounded ' : '') +
            ($attrs.orange === '' ? 'btn-orange ' : '') +
            ($attrs.dark === '' ? 'btn-dark ' : '') +
            ($attrs.big === '' ? 'btn-big ' : '') +
            ($attrs.small === '' ? 'btn-small ' : '') +
            ($attrs.hover === 'orange' ? 'btn-hover-orange' : '') "

          @click="redirect"
  >
    <slot />

    <iconly v-if="$attrs.arrow === ''" name="arrow-right" type="light" />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    query: {
      type: Object,
      required: false,
      default: function () { return {} },
    }
  },
  computed: {
  },
  created() {
    console.log(this.$attrs)
  },
  methods: {
    redirect () {
      this.$router.push({
        name: this.$attrs.route_link,
        query: this.query
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "resources/scss/user/variables";

.btn-rounded-angle {
  border-radius: 8px 0;
  padding: 9.5px 14.5px;

  @include respond-to(md) {
    border-radius: 16px 0;
    padding: 13px 22px;
  }

  @include respond-to(lg) {
    border-radius: 24px 0;
    padding: 17.5px 27px;
  }
}

.btn-rounded {
  border-radius: 4px;
  @include respond-to(md) {
    border-radius: 8px;
  }
}

.btn-orange {
  background-color: $color-orange!important;
  color: $color-dark!important;
}

.btn-dark {
  background-color: $color-dark!important;
  color: #ffffff!important;
}

.btn {
  outline: none;
  border: none;

  &.btn-big {
    font-size: 14px;

    @include respond-to(md) {
      font-size: 16px;
    }

    @include respond-to(lg) {
      font-size: 18px;
    }
  }

  &.btn-small {
    font-size: 12px;

    @include respond-to(md) {
      font-size: 14px;
    }

    @include respond-to(lg) {
      font-size: 16px;
    }
  }

  &.btn-hover-orange {
    transition: .5s background-color, .4s color;

    &:hover {
      background-color: $color-orange!important;
      color: $color-dark !important;
    }
  }
}
</style>

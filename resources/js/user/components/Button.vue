<template>
  <button class="btn" :class="$attrs.rounded_angle === '' ? 'btn-rounded-angle' : ''" :style="color">
    <slot />

    <iconly v-if="$attrs.arrow === ''" name="arrow-right" type="light" />
  </button>
</template>

<script>
export default {
  name: "Button",
  computed: {
    color () {
      if (this.$attrs.orange === '') {
        return 'background-color: #F4B12F'
      } else {
        return ''
      }
    }
  },
  created() {
    console.log(this.$attrs)
  }
}
</script>

<style scoped>

</style>
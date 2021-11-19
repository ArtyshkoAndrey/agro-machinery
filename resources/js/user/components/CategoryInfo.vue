<template>
  <div class="category-item row align-items-center" :class="reverse ? 'category-item-reverse' : null">
    <div class="col-8 col-md-6 col-lg-4 offset-lg-1 category-item_image">
      <div class="bg-gray">
        <div class="col-12 category-item_image_text">
          <span class="category-item_counter">
            28
          </span>
          <span class="category-item_title">
            {{ $t('index.category-item.count') }}
          </span>
        </div>
        <div class="col-12">
          <img alt="track" :src="category.image">
        </div>
      </div>
    </div>

    <div class="col-10 offset-2 col-md-6 offset-md-0 col-lg-4 offset-lg-1 category-item_info">
      <p class="category-item_info_title">
        {{ category.name }}
      </p>
      <p>
        {{ category.description }}
      </p>
      <Button orange rounded_angle arrow big>
        {{ $t('button.catalog') }}
      </Button>
    </div>
  </div>
</template>

<script>
import Button from "~/user/components/Button";
export default {
  name: "CategoryInfo",
  components: {
    Button
  },
  props: {
    category: {
      type: Object,
      required: true,
    },
    reverse: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style scoped>

</style>
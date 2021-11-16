<template>
  <div class="category-item row align-items-center" :class="$attrs.reverse === '' ? 'category-item-reverse' : null">
    <div class="col-8 col-md-6 category-item_image">
      <div class="bg-gray">
        <div class="col-12 category-item_image_text">
          <span class="category-item_counter">
            28
          </span>
          <span class="category-item_title">
            Позиций
          </span>
        </div>
        <div class="col-12">
          <img v-if="$attrs.reverse !== ''" alt="track" src="public/images/user/track_1.png">
          <img v-else alt="track" src="public/images/user/track_2.png">
        </div>
      </div>
    </div>

    <div class="col-10 offset-2 col-md-6 offset-md-0 category-item_info">
      <p class="category-item_info_title">
        Посев и посадка
      </p>
      <p>
        Плуги и другие виды сельскохозяйственной техники изготавливаются на современных заводах с преимущественным
        использованием роботизированной техники!
      </p>
      <Button orange rounded_angle arrow>
        Каталог
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
  }
}
</script>

<style scoped>

</style>
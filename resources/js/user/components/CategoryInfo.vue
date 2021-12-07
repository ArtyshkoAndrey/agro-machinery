<template>
  <div class="category-item row align-items-center" :class="reverse ? 'category-item-reverse' : null">
    <div class="col-8 col-md-6 col-lg-4 offset-lg-1 category-item_image">
      <div class="bg-gray">
        <div class="col-12 category-item_image_text">
          <span class="category-item_counter">
            {{ category.countProducts ? category.countProducts : 'Nan' }}
          </span>
          <span class="category-item_title">
            {{ $t('index.category-item.count') }}
          </span>
        </div>
        <div class="col-12">
          <img alt="track" :src="category.image.uri + '?w=500&h=auto&fit=crop&fm=webp'">
        </div>
      </div>
    </div>

    <div class="col-10 offset-2 col-md-6 offset-md-0 col-lg-4 offset-lg-1 category-item_info">
      <p class="category-item_info_title">
        {{ category.translations.find(e => e.locale === locale).name }}
      </p>
      <p>
        {{ category.translations.find(e => e.locale === locale).description }}
      </p>
      <Button orange rounded_angle arrow big route_link="catalog" :query="{category: category.id}">
        {{ $t('button.catalog') }}
      </Button>
    </div>
  </div>
</template>

<script>
import Button from "~/user/components/Button"
import { mapGetters } from 'vuex'

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
  },
  computed: {
    ...mapGetters({
      locale: 'lang/locale',
    })
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="card product-card">
    <span class="badge">{{ item.category.translations.find(e => e.locale === locale).name }}</span>
    <div class="product-card-image">
      <img :src="item.image.uri + '?w=300&h=auto3&fit=crop&fm=webp'" alt="product">
    </div>
    <div class="product-card-info">
      <div class="row h-100">
        <div class="col-12">
          <p class="product-card-info-name">
            {{ item.translations.find(e => e.locale === locale).name }}
          </p>
        </div>
        <div class="col-12 mt-auto">
          <div class="row">
            <div class="col-12 col-md">
              <span class="product-card-info-cost">
                {{ $t('Product.prefix-cost') }} {{ $cost(item.cost) }} ₸
              </span>
            </div>
            <div class=" col-12 col-md-auto">
              <Button dark rounded small hover="orange" class="w-100">
                {{ $t('button.more') }}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/user/components/Button'
import { mapGetters } from 'vuex'

export default {
  name: "Product",
  components: {
    Button
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    item: {
      type: Object,
      required: false,
    }
  },
  computed: {
    ...mapGetters({
      locale: 'lang/locale',
    })
  }
}
</script>

<style lang="scss" scoped>
@import "resources/scss/user/variables";
.product-card {
  height: 100%;
  margin: 0;
  padding: 0;
  border: 1px solid #DEDEDE;
  border-radius: 12px;
  background: #ffffff;
  transition: .25s box-shadow, .3s border-color;
  position: relative;

  &:hover {
    box-shadow: -1px 12px 14px #D3D4DA;
    border-color: transparent;
  }

  .badge {
    position: absolute;
    background-color: $color-orange;
    color: $color-dark;
    font-weight: 400;

    border-radius: 4px;
    padding: 2px 4px;
    top: 8px;
    right: 8px;
    font-size: 10px;
    line-height: 12px;
  }

  .product-card-image {
    background: #ffffff;
    padding: 0;
    margin: 0;
    height: 114px;
    border-radius: 12px 12px 0 0;

    img {
      display: block;
      height: inherit;
      width: 100%;
      padding: 0;
      margin: 0;
      object-fit: cover;
      object-position: center;
      border-radius: 12px 12px 0 0;
    }
  }

  @include respond-to(md) {
    .badge {
      top: 15px;
      right: 17px;
      border-radius: 8px;
      font-size: 18px;
      line-height: 21px;
      padding: 4px 8px;
    }

    .product-card-image {
      height: 225px;
    }
  }

  .product-card-info {
    padding: 8px;
    height: 100%;

    .product-card-info-name {
      font-size: 12px;
      font-weight: 400;
      margin-bottom: 8px;

      @include respond-to(md) {
        font-size: 16px;
        margin-bottom: 24px;
      }
    }

    .product-card-info-cost {
      display: block;
      font-size: 12px;
      font-weight: 500;
      margin-bottom: 12px;

      @include respond-to(md) {
        font-size: 16px;
        margin-bottom: 0;
      }
    }

    @include respond-to(md) {
      padding: 16px;
    }
  }
}

</style>

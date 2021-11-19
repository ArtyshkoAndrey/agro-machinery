<template>
  <div class="card product-card">
    <div class="product-card-image">
      <img src="public/images/user/test_product.png" alt="product">
    </div>
    <div class="product-card-info">
      <div class="row">
        <div class="col-12">
          <p class="product-card-info-name">
            Техника для посева кукурузы для полей более 120 Га
          </p>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-12 col-md">
              <span class="product-card-info-cost">
                от 10 000 000 ₸
              </span>
            </div>
            <div class=" col-12 col-md-auto">
              <Button dark rounded small class="w-100">
                Подробнее
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

export default {
  name: "Product",
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>
@import "resources/scss/user/variables";
.product-card {
  margin: 0;
  padding: 0;
  border: 1px solid #DEDEDE;
  border-radius: 12px;
  background: #ffffff;

  .product-card-image {
    background: #ffffff;
    padding: 0;
    height: 114px;
    border-radius: 12px 12px 0 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: inherit;
    }
  }

  @include respond-to(md) {
    .product-card-image {
      height: 225px;
    }
  }

  .product-card-info {
    padding: 8px;

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
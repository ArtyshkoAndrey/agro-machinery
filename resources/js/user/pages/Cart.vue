<template>
  <div>
    <transition appear mode="out-in" name="fade">
      <Spinner v-if="loading" key="1" />
      <section v-else id="" key="2">
        <div class="row mb-5">
          <div class="col-lg-7 col-md-12">
            <div class="row">
              <div class="col-12">
                <h1>{{ $t('Cart.title') }}</h1>
              </div>
            </div>

            <div class="row products-list">
              <div v-for="product in products" :key="product.id" class="col-12 product">
                <div class="row">
                  <div class="col-3">
                    <img :src="product.image.uri" class="w-100" :alt="product.image.name">
                  </div>

                  <div class="col">
                    <div class="row h-100">
                      <div class="col-12 pe-0 d-flex">
                        <div class="row justify-content-between w-100">
                          <div class="col col-sm-7 col-md-8">
                            <span class="name">{{ product.translations.find(e => e.locale === locale).name }}</span>
                          </div>
                          <div class="col-auto pe-0">
                            <button class="remove-product" form @click="remove(product.id)">
                              <iconly name="delete" type="outline" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 d-flex">
                        <div class="row align-items-end">
                          <div class="col-auto">
                            <span class="cost">{{ $t('Product.prefix-cost') }} {{ $cost(product.cost) }} ₸</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row justify-content-end all-cost">
              <div class="col-auto">
                <span class="all">{{ $t('Cart.total') }}</span>
              </div>
            </div>
            <div class="row justify-content-end">
              <div class="col-auto">
                <span class="cost">~ 20 000 000 ₸ </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
import axios from 'axios';
import Spinner from "../components/Spinner";
import { mapGetters, mapActions } from "vuex";
import * as $ from 'jquery';

export default {
  name: "Cart",
  components: {
    Spinner
  },
  async beforeRouteLeave(to, from, next) {
    await this.setLoading(true)
    next()
  },
  data: () => ({
    loading: true
  }),
  computed: {
    ...mapGetters({
      products: 'cart/response_products',
      locale: 'lang/locale'
    })
  },
  async beforeMount() {
    await this.setLoading(true)
  },
  mounted() {
    this.$root.$loading.set(50)
    this.$root.$loading.finish();
    this.setLoading(false)

    this.$nextTick(function () {
      setTimeout(() => {
        let img = $('.product img')
        console.log($('.product img'))
        img.height(img.width())

        $(window).resize(() => {
          img.height(img.width())
        })
      }, 1000)
    })
  },
  methods: {
    ...mapActions({
      remove: 'cart/remove'
    }),
    async setLoading(status) {
      return new Promise((resolve) => {
        this.loading = status
        resolve()
      })
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../scss/user/variables";

  h1 {
    font-weight: 500;
    color: $color-dark;
    font-size: 22px;
    line-height: 26px;
    margin-bottom: 20px;

    @include respond-to(lg) {
      color: $color-dark;
      font-size: 32px;
      line-height: 38px;
      margin-bottom: 32px;
    }
  }
  .product {

    margin-top: 24px;
    margin-right: calc(var(--bs-gutter-x) * 0.5);
    margin-left: calc(var(--bs-gutter-x) * 0.5);
    padding: 0 0 24px;
    border-bottom: 1px solid #D3D3D3;

    img {
      border-radius: 12px;
      object-fit: cover;
      object-position: center;
    }

    button.remove-product {
      background: transparent;
      outline: 0;
      border: 0;
      color: #200E32;
      padding: 5px;

      svg {
        height: 24px;
        width: 24px;
      }
    }

    .name {
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;

      @include respond-to(md) {
        font-size: 18px;
        line-height: 21px;
      }

      @include respond-to(lg) {
        font-size: 18px;
        line-height: 21px;
      }
    }

    .cost {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;

      @include respond-to(lg) {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
      }
    }
  }

  .all-cost {
    margin-top: 24px;
    span.all {
      font-weight: normal;
      color: $color-gray;
      font-size: 14px;
      line-height: 17px;

      @include respond-to(md) {
        font-size: 18px;
        line-height: 21px;
      }

    }


  }
  span.cost {
    font-weight: 500;
    color: $color-dark;
    font-size: 18px;
    line-height: 21px;

    @include respond-to(md) {
      font-weight: 500;
      font-size: 32px;
      line-height: 38px;
    }
  }
</style>

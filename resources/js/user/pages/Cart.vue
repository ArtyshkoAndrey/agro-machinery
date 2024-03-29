<template>
  <div>
    <transition appear mode="out-in" name="fade">
      <Spinner v-if="loading" key="1"/>
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
                    <img :alt="product.image.name" :src="product.image.uri" class="w-100">
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
                              <iconly name="delete" type="outline"/>
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
                <hr>
              </div>
            </div>

            <div class="row justify-content-end all-cost">
              <div class="col-auto">
                <span class="all">{{ $t('Cart.total') }}</span>
              </div>
            </div>
            <div class="row justify-content-end">
              <div class="col-auto">
                <span class="cost">~ {{ $cost(cost) }} ₸</span>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-12">
            <div class="row">
              <div class="col-12">
                <h1>Ваши контакты</h1>
                <p>
                  Оставьте свои контакты и мы отправим коммерческое предложение по вашим товарам
                </p>
              </div>
            </div>

            <div class="row mt-3">
              <form>
                <div class="mb-3">
                  <input v-model="form.name"
                         :class="form.errors.has('name') ? 'is-invalid' : '' "
                         class="form-control "
                         placeholder="Как вас зовут?"
                         type="text"
                  >
                  <div v-if="form.errors.has('name')" id="validationCheckName" class="invalid-feedback">
                    {{ form.errors.get('name') }}
                  </div>
                </div>
                <div class="mb-3">
                  <input v-model="form.email"
                         :class="form.errors.has('email') ? 'is-invalid' : '' "
                         class="form-control "
                         placeholder="E-mail"
                         type="email"
                  >
                  <div v-if="form.errors.has('email')" id="validationCheckEmail" class="invalid-feedback">
                    {{ form.errors.get('email') }}
                  </div>
                </div>
                <div class="mb-3">
                  <input id="phone"
                         v-model="form.phone"
                         :class="form.errors.has('phone') ? 'is-invalid' : '' "
                         class="form-control "
                         placeholder="+7 (___) ___-__-__"
                         type="phone"
                  >
                  <div v-if="form.errors.has('phone')" id="validationCheckPhone" class="invalid-feedback">
                    {{ form.errors.get('phone') }}
                  </div>
                </div>
                <button :disabled="form.busy || (products_count < 1)" class="btn" form type="button"
                        @click="createOrder"
                >
                  <span v-show="form.busy" aria-hidden="true" class="spinner-border spinner-border-sm" role="status"/>
                  <span v-show="form.busy" class="visually-hidden">Loading...</span>
                  Получить коммерческое предложение
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer/>
      </section>
    </transition>
  </div>
</template>

<script>
import Spinner from "../components/Spinner";
import { mapActions, mapGetters } from "vuex";
import * as $ from 'jquery';
import Form from "vform";
import Footer from '~/user/components/Footer'

require('jquery-mask-plugin');

export default {
  name: "Cart",
  components: {
    Spinner,
    Footer
  },
  async beforeRouteLeave(to, from, next) {
    await this.setLoading(true)
    next()
  },
  data: () => ({
    loading: true,
    form: new Form({
      name: '',
      email: '',
      phone: '',
      products: [],
      cost: 0
    })
  }),
  metaInfo () {
    return {
      title: this.$t('Cart.title')
    }
  },
  computed: {
    ...mapGetters({
      products: 'cart/response_products',
      ids: 'cart/products',
      cost: 'cart/cost',
      products_count: 'cart/products_count',
      locale: 'lang/locale'
    })
  },
  beforeMount() {
    this.setLoading(true)
    this.form.products = this.ids
    this.form.cost = this.cost
  },
  mounted() {
    this.$root.$loading.set(50)
    this.$root.$loading.finish();
    this.setLoading(false)

    this.$nextTick(function () {
      setTimeout(() => {
        let img = $('.product img')
        img.height(img.width())

        $(window).resize(() => {
          img.height(img.width())
        })

        $('#phone').mask("+7 (999) 999 99-99");
      }, 1000)
    })
  },
  methods: {
    ...mapActions({
      remove: 'cart/remove',
      clear: 'cart/clear'
    }),
    async setLoading(status) {
      return new Promise((resolve) => {
        this.loading = status
        resolve()
      })
    },
    createOrder() {
      this.form.post('/api/users/order')
        .then(r => {
          console.warn(r.data)
          this.clear()
          this.$Swal.fire({
            icon: 'success',
            title: this.$t('create-order.title'),
            showConfirmButton: true,
            timer: 3000
          })
        })
        .catch(e => {
          console.warn(e.response.data)
        })
    }
  },
  // eslint-disable-next-line vue/order-in-components
  watch: {
    cost: function (newVal) {
      this.form.cost = newVal
    }
  }
}
</script>

<style lang="scss" scoped>
@import "resources/scss/user/variables";

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

p {
  color: $color-gray;

  font-size: 18px;
  line-height: 21px;

  width: 100%;

  @include respond-to(md) {
    width: 80%;
  }
}

.product {

  margin-top: 24px;


  hr {
    background: #D3D3D3;
    opacity: 1;
    margin-top: 24px;
    margin-bottom: 0;
  }

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

form {
  button {
    color: $color-dark;
    background: $color-orange;
    font-weight: normal;
    width: 100%;

    font-size: 14px;
    line-height: 17px;
    padding: 14px 13px;
    border-radius: 16px 0;
    transition: 0.3s;

    @include respond-to(md) {
      font-size: 18px;
      line-height: 21px;
      padding: 20px;
    }

    &:hover, &.loading, &:disabled {
      color: #FFFFFF;
      background: $color-dark;
    }


  }

  input {
    padding: 20px 16px;
    border: 1px solid #B3B3B3;
    border-radius: 8px;

    font-size: 16px;
    line-height: 19px;

    @include respond-to(md) {
      font-size: 18px;
      line-height: 21px;
    }
  }
}
</style>

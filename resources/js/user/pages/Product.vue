<template>
  <div>
    <transition appear mode="out-in" name="fade">
      <Spinner v-if="loading" key="1"/>
      <section v-else id="" key="2">
        <div class="row justify-content-center">
          <div class="col-lg-5 col-md-5 col-sm-10 col-12">
            <div v-if="images.length > 0" id="img-slider">
              <button class="next-slide btn-slider btn" @click="slide(1)">
                <iconly name="arrow-right2" type="outline"/>
              </button>
              <button class="prev-slide btn-slider btn" @click="slide(-1)">
                <iconly name="arrow-left2" type="outline"/>
              </button>
              <transition appear mode="out-in" name="fade">

                <img v-if="loaderImage === false"
                     :key="1"
                     :src="image"
                     class="w-100 h-100 img-zooming"
                     style="object-fit: cover"
                >
                <img v-else :key="2"
                     alt=""
                     class="w-100 h-100"
                     src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
                     style="object-fit: cover"
                >
              </transition>
            </div>
          </div>
          <div class="col-lg-7 col-md-7 col-sm-10 col-12">
            <div class="row">
              <div class="col-12">
                <nav aria-label="breadcrumb mt-3">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <router-link :to="{name: 'index'}" class="">
                        {{ $t('catalog.breadcrumb.index') }}
                      </router-link>
                    </li>
                    <li class="breadcrumb-item">
                      <router-link :to="{name: 'catalog'}" class="">
                        {{ $t('catalog.breadcrumb.catalog') }}
                      </router-link>
                    </li>

                    <li v-for="parent in product.category.parents" :key="parent.id" class="breadcrumb-item">
                      <router-link :to="{ name: 'catalog', query: { category: parent.id }}" class="">
                        {{
                          parent.translations ? parent.translations.find(e => e.locale === locale).name : parent.name
                        }}
                      </router-link>
                    </li>


                    <li aria-current="page" class="breadcrumb-item active">
                      <span>
                        {{ product.category ? product.category.translations.find(e => e.locale === locale).name : product.category.name }}
                      </span>
                    </li>
                  </ol>
                </nav>
              </div>
              <div class="col-12">
                <h1 class="name">{{ product.translations.find(e => e.locale === locale).name }}</h1>
              </div>
              <div class="col-12 col-md-12 col-lg-8 description" v-html="product.translations.find(e => e.locale === locale).description">

              </div>
              <div class="col-12 cost-wrapper">
                <div class="row align-items-center">
                  <div class="col-12 col-sm-auto cost">
                    <span>{{ $t('Product.prefix-cost') }} {{ $cost(product.cost) }} ₸</span>
                  </div>
                  <div class="col-12 col-sm">
                    <button class="btn btn-cart">
                      {{ $t('Product.buy') }}
                      <iconly name="buy" type="outline" />
                    </button>
                  </div>
                </div>
              </div>

              <div v-if="product.attributes.length > 0" class="col-12 d-none d-md-block">
                <div class="row attributes-row">
                  <div class="col-auto">
                    <h3>Характеристики</h3>
                  </div>

                  <div class="col-12">
                    <hr>
                  </div>

                  <div v-for="attr in product.attributes" :key="attr.id" class="col-12 attribute">
                    <div class="row">
                      <div class="col-lg-5 col-md-6 attribute-name">
                        {{ attr.translations.find(e => e.locale === locale).name }}
                      </div>
                      <div class="col attribute-value">
                        {{ attr.pivot.value }}
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="product.suitable.length > 0" class="row mt-5">
          <div class="col-12">
            <h2>Сопутствующие товары</h2>
          </div>
          <div class="col-12 mt-3">
            <div class="row catalog-list-products gx-1 gx-sm-2 gx-md-5 gx-lg-3 gy-2 gy-md-4">
              <div v-for="suitable in product.suitable" :key="suitable.id" class="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                <item :item="suitable" />
              </div>
            </div>
          </div>
        </div>

      </section>
    </transition>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import axios from 'axios';
import Spinner from "../components/Spinner";
import * as $ from 'jquery';
import Item from "~/user/components/Product";
import Zooming from 'zooming';

export default {
  name: "Product",
  components: {
    Spinner,
    Item
  },
  beforeRouteLeave(to, from, next) {
    this.loading = true
    setTimeout(() => {
      next()
    }, 500)
  },
  async beforeRouteUpdate(to, from, next) {
    await this.setLoading(true)
    next()
    await this.getProduct()
    await this.setLoading(false)
  },
  scrollToTop: false,
  data: () => ({
    loading: true,
    loaderImage: true,
    product: {},
    images: [],
    image: ''
  }),
  computed: {
    ...mapGetters({
      locale: 'lang/locale',
    }),
    id() {
      return this.$route.params.id
    },
    image1() {
      if (this.images)
        return this.images.find(e => e.show)

      return undefined
    }
  },
  async mounted() {
    await this.$root.$loading.set(30)
    await this.getProduct()
    await this.$root.$loading.set(50)
    await setTimeout(() => {
      this.loading = false
      setTimeout(() => {
        console.log($('#img-slider').width())
        $('#img-slider').height($('#img-slider').width())

        $(window).resize(function () {
          console.log($('#img-slider').width())
          $('#img-slider').height($('#img-slider').width())
        })

      }, 500)
    }, 1000)
    await this.$root.$loading.finish();
  },
  methods: {
    slide(who) {
      console.log(this.images)
      let index = this.images.findIndex(e => e.show)
      if (who > 0 && (index + 1) <= this.images.length - 1) {
        // Vue.set(this.images, index,false)
        // Vue.set(this.images, index + 1,true)
        this.images[index].show = false
        this.images[index + 1].show = true
        console.log(this.images[index + 1].id)

        this.images = [...this.images]
        index = this.images.findIndex(e => e.show)
        this.setImage(this.images[index].uri)

      }
      if (who < 0 && (index - 1) >= 0) {
        this.images[index].show = false
        this.images[index - 1].show = true
        // Vue.set(this.images, index,false)
        // Vue.set(this.images, index - 1,true)
        console.log(this.images[index - 1].id)

        this.images = [...this.images]
        index = this.images.findIndex(e => e.show)
        this.setImage(this.images[index].uri)
      }


    },
    async getProduct() {
      axios.get('/api/users/product/' + this.id)
        .then(response => {
          this.product = response.data.payload.product
          this.product.images.forEach((e, index) => index === 0 ? e.show = true : e.show = false)
          console.log(this.product.images)
          if (this.product.images.length > 0) {
            this.images = [...this.product.images]
          } else {
            this.product.image.show = true
            this.images.push(this.product.image)
          }


          this.setImage(this.images[0].uri)
        })
        .catch(e => {
          this.$router.push({name: "index"})
          this.$Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: e.response.data.message,
          })
        })
    },
    async setLoading(status) {
      return new Promise((resolve) => {
        this.loading = status
        resolve()
      })
    },
    setImage(uri) {
      this.loaderImage = true
      this.image = 'https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif'
      let myImage = new Image()
      myImage.src = uri;
      myImage.onload = () => {
        this.image = myImage.src
        this.loaderImage = false

        setTimeout(() => {
          new Zooming({
            onBeforeOpen: () => {
              $('body').css('overflow','hidden')
              $('hidden-overflow').css('overflow', 'auto')
            },
            onBeforeClose: () => {
              $('body').css('overflow','auto')
              $('hidden-overflow').css('overflow', 'hidden')
            },
            scaleBase: 1,
            scaleExtra: 1.5,
            scrollThreshold: 99999
          }).listen('.img-zooming')
        }, 1000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/user/variables';

#img-slider {
  position: relative;

  img {
    object-fit: cover;
    object-position: center;

    z-index: 9;
  }

  > div {
    height: 100%;
    width: 100%;
  }

  .btn-slider {
    color: #FFFFFF;
    background: $color-dark;
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 11px;
    position: absolute;
    transition: .3s;
    z-index: 10;
    height: 36px;

    svg {
      width: 16px;
      height: 16px;
      vertical-align: unset;
    }

    @include respond-to(md) {
      height: 44px;
      svg {
        width: 25px;
        height: 25px;

      }
    }

    &:hover {
      background: $color-dark;
      opacity: 0.8;

    }
  }

  .next-slide {
    bottom: 24px;
    left: 68px;

    @include respond-to(md) {
      left: 92px;
    }
  }

  .prev-slide {
    bottom: 24px;
    left: 24px;
  }
}

nav {
  margin-top: 24px;
  @include respond-to(md) {
    margin-top: 0;
  }

  .breadcrumb {
    font-size: 14px !important;
    line-height: 16px;
  }

  .breadcrumb-item {
    word-wrap: break-word !important;
    width: fit-content;

    > * {
      white-space: normal;
      width: fit-content;
    }
  }
}

.name {
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  color: $color-dark;

  @include respond-to(md) {
    font-size: 24px;
    line-height: 28px;
  }

  @include respond-to(lg) {
    font-size: 32px;
    line-height: 38px;
  }
}
.description {
  font-size: 18px !important;
  line-height: 21px !important;
  color: $color-gray !important;
  margin-top: 16px;
  * {
    font-size: 18px !important;
    line-height: 21px !important;
    color: $color-gray !important;
  }
}

.cost {
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: $color-dark;

  @include respond-to(md) {
    font-size: 20px;
    line-height: 28px;
  }

  @include respond-to(lg) {
    font-size: 32px;
    line-height: 38px;
  }
}

.cost-wrapper {
  margin-top: 24px;
  button {
    margin-top: 24px;

    svg {
     width: 14px;
      height: 14px;
      margin-left: 14px;
    }

    @include respond-to(sm) {
      margin-top: 0;
    }
  }
}

.btn-cart {
  background: $color-orange;
  color: $color-dark;

  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  padding: 13px;
  width: 100%;
  border-radius: 16px 0;
  transition: 0.3s;

  &:hover {
    background: $color-dark;
    color: #FFFFFF;
  }

  @include respond-to(sm) {
    width: auto;
    padding: 10px 20px;
  }
}

.attributes-row {
  margin-top: 40px;

  @include respond-to(lg) {
    margin-top: 80px;
  }

  .attribute {
    margin-top: 16px;
  }

  hr {
    margin: 0;
  }

  h3 {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: $color-dark;
  }

  .attribute-name {
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: $color-gray;
  }

  .attribute-value {
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: $color-dark;
  }


}
</style>
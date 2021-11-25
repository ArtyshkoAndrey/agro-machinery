<template>
  <div>
    <transition appear mode="out-in" name="fade">
      <Spinner v-if="loading" key="1"/>
      <section v-else id="catalog" key="2">
        <div class="row">
          <div class="col-12 col-sm-10 col-lg-6">
            <h1>Длинное название товара</h1>

            <nav aria-label="breadcrumb mt-3">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="index">
                    Главная
                  </router-link>
                </li>
                <li class="breadcrumb-item">
                  <router-link to="catalog">
                    Каталог
                  </router-link>
                </li>
                <li aria-current="page" class="breadcrumb-item active">
                  Категория длинная
                </li>
              </ol>
            </nav>
          </div>
          <div class="col-12 col-sm-10 col-lg-4">
            <p class="category-description">
              Плуги и другие виды сельскохозяйственной техники изготавливаются на современных заводах c преимущественным
              использованием роботизированной техники!
            </p>
          </div>
        </div>
        <div class="row category-list gx-2 gy-3">
          <div v-for="i in 5" :key="i" class="col-6 col-sm-4 col-lg-3">
            <router-link to="index" class="category-button w-100 d-flex justify-content-between align-items-center">
              <span>Стерневые культиваторы</span>
              <iconly name="arrow-right" type="light" />
            </router-link>
          </div>
        </div>
        <div class="row catalog-list-products gx-1 gx-sm-2 gx-md-5 gx-lg-3 gy-2 gy-md-4">
          <div v-for="product in popular_products" :key="product.id" class="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
            <product :item="product" />
          </div>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
import Spinner from '~/user/components/Spinner'
import Product from '~/user/components/Product'
import axios from 'axios'

export default {
  name: "Catalog",
  components: {
    Spinner,
    Product
  },
  beforeRouteLeave (to, from, next) {
    this.loading = true
    setTimeout(() => {
      next()
    }, 500)
  },
  data: () => ({
    loading: true,
    popular_products: [],
  }),
  async mounted() {
    this.$root.$loading.set(30)
    await this.getCategories()
    await this.getProducts()
    await this.$root.$loading.finish();

  },
  methods: {
    getCategories() {
      axios.get('/api/users/categories?child')
    },
    getProducts() {
      axios.get('/api/users/products', {
        params: {
          has_image: true,
          max_count: 7,
          has_category: true
        }
      })
        .then(response => {
          this.popular_products = response.data.payload.products
          this.loading = false
        })
    }
  }
}
</script>

<style scoped>

</style>

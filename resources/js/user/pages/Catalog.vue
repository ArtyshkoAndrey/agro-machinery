<template>
  <div>
    <transition appear mode="out-in" name="fade">
      <Spinner v-if="loading" key="1" />
      <section v-else id="catalog" key="2">
        <div class="row">
          <div class="col-12 col-sm-10 col-lg-6">
            <h1 v-if="category_id">
              {{ category.translations.find(e => e.locale === locale).name }}
            </h1>
            <h1 v-else>
              {{ $t('catalog.breadcrumb.catalog') }}
            </h1>

            <nav aria-label="breadcrumb mt-3">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="index">
                    {{ $t('catalog.breadcrumb.index') }}
                  </router-link>
                </li>
                <li v-if="category_id" class="breadcrumb-item">
                  <router-link to="catalog">
                    {{ $t('catalog.breadcrumb.catalog') }}
                  </router-link>
                </li>
                <li v-else aria-current="page" class="breadcrumb-item active">
                  {{ $t('catalog.breadcrumb.catalog') }}
                </li>

                <li v-for="parent in category_parents" :key="parent.id" class="breadcrumb-item">
                  <router-link :to="{ path: 'catalog', query: { category: parent.id }}">
                    {{ parent.translations.find(e => e.locale === locale).name }}
                  </router-link>
                </li>


                <li v-if="category_id" aria-current="page" class="breadcrumb-item active">
                  {{ category.translations.find(e => e.locale === locale).name }}
                </li>
              </ol>
            </nav>
          </div>
          <div class="col-12 col-sm-10 col-lg-4">
            <p v-if="category_id" class="category-description">
              {{ category.translations.find(e => e.locale === locale).description }}
            </p>
          </div>
        </div>
        <transition name="fade" appear mode="out-in">
          <div v-if="category_child.length > 0" class="row category-list gx-2 gy-3">
            <div v-for="cat in category_child" :key="cat.id" class="col-6 col-sm-4 col-lg-3">
              <router-link :to="{ path: 'catalog', query: { category: cat.id }}"
                           class="category-button w-100 d-flex justify-content-between align-items-center"
              >
                <span>{{ cat.translations.find(e => e.locale === locale).name }}</span>
                <iconly name="arrow-right" type="light" />
              </router-link>
            </div>
          </div>
        </transition>
        <div class="row catalog-list-products gx-1 gx-sm-2 gx-md-5 gx-lg-3 gy-2 gy-md-4">
          <div v-for="product in products" :key="product.id" class="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
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
import { mapGetters } from 'vuex'

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
  async beforeRouteUpdate(to, from, next) {
    await this.setLoading(true)
    next()
    await this.getCategories()
    await this.getProducts()
    await this.setLoading(false)
  },
  data: () => ({
    loading: true,
    category: null,
    category_child: [],
    products: [],
    category_parents: []
  }),
  computed: {
    ...mapGetters({
      locale: 'lang/locale',
    }),
    category_id () {
      return this.$route.query.category
    }
  },
  async mounted() {
    this.$root.$loading.set(30)
    await this.getCategories()
    await this.getProducts()
    await this.$root.$loading.finish();
    await this.setLoading(false)
  },
  methods: {
    getCategories() {
      axios.get('/api/users/categories', {
        params: {
          category: this.category_id,
          has_child: !!this.category_id,
          has_parent: !!this.category_id,
          only_owner: !this.category_id
        }
      })
        .then(response => {
          if (this.category_id) {
            this.category = response.data.payload.categories
            this.category_child = response.data.payload.categories.child
            this.category_parents = response.data.payload.categories.parent
          } else {
            this.category_child = response.data.payload.categories
          }

          console.warn(this.category)
        })
        .catch(e => {
          this.$router.push({ path: "catalog" })
          this.$Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: e.response.data.message,
          })
        })
    },
    getProducts() {
      axios.get('/api/users/catalog', {
        params: {
          has_image: true,
          where_category: this.category_id,
          has_category: true
        }
      })
        .then(response => {
          this.products = response.data.payload.products
        })
    },
    async setLoading (status) {
      return new Promise((resolve) => {
        this.loading = status
        resolve()
      })
    }
  }
}
</script>

<style scoped>

</style>

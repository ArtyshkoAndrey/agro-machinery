<template>
  <div>
    <transition appear mode="out-in" name="fade">
      <Spinner v-if="loading" key="1"/>
      <section v-else id="catalog" key="2">
        <div class="row">
          <div class="col-12 col-sm-10 col-lg-6">
            <h1 v-if="category !== null && category_id">
              {{ category ? category.translations.find(e => e.locale === locale).name : category.name }}
            </h1>
            <h1 v-else>
              {{ $t('catalog.breadcrumb.catalog') }}
            </h1>

            <nav aria-label="breadcrumb mt-3">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link class="" to="index">
                    {{ $t('catalog.breadcrumb.index') }}
                  </router-link>
                </li>
                <li v-if="category_id" class="breadcrumb-item">
                  <router-link class="" to="catalog">
                    {{ $t('catalog.breadcrumb.catalog') }}
                  </router-link>
                </li>
                <li v-else aria-current="page" class="breadcrumb-item active">
                  {{ $t('catalog.breadcrumb.catalog') }}
                </li>

                <li v-for="parent in category_parents" :key="parent.id" class="breadcrumb-item">
                  <router-link :to="{ path: 'catalog', query: { category: parent.id }}" class="">
                    {{ parent.translations ? parent.translations.find(e => e.locale === locale).name : parent.name }}
                  </router-link>
                </li>


                <li v-if="category_id" aria-current="page" class="breadcrumb-item active">
                  {{ category ? category.translations.find(e => e.locale === locale).name : category.name }}
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
        <transition appear mode="out-in" name="fade">
          <div v-if="category_child.length > 0" class="row category-list gx-2 gy-3">
            <div v-for="cat in category_child" :key="cat.id" class="col-6 col-sm-4 col-lg-3">
              <router-link :to="{ path: 'catalog', query: { category: cat.id }}"
                           class="category-button w-100 d-flex justify-content-between align-items-center"
              >
                <span>{{ cat.translations ? cat.translations.find(e => e.locale === locale).name : cat.name }}</span>
                <iconly name="arrow-right" type="light"/>
              </router-link>
            </div>
          </div>
        </transition>

        <div class="row">
          <div class="col-12 mt-3">
            <h5>Производители</h5>
          </div>
          <div class="col-12 mt-2">
            <div class="row">
              <div v-for="(manufacturer, index) in manufacturers" :key="index" class="col-auto mt-2">
                <button :class="manufacturer.active ? 'active' : ''"
                        class="btn btn-manufacturers"
                        @click="setActiveManufacturer(manufacturer)"
                >
                  {{ manufacturer.name }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="row catalog-list-products gx-1 gx-sm-2 gx-md-5 gx-lg-3 gy-2 gy-md-4">
          <div v-for="product in products" :key="product.id" class="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
            <product :item="product"/>
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
import {mapGetters} from 'vuex'

export default {
  name: "Catalog",
  components: {
    Spinner,
    Product
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
    await this.getCategories()
    await this.getProducts()
    await this.setLoading(false)
  },
  data: () => ({
    loading: true,
    category: null,
    category_child: [],
    products: [],
    category_parents: [],
    manufacturers: []
  }),
  computed: {
    ...mapGetters({
      locale: 'lang/locale',
    }),
    category_id() {
      return this.$route.query.category
    },
    manufacturers_id() {
      let ids = []

      this.manufacturers.forEach(e => {
        e.active ? ids.push(e.id) : null
      })
      if (ids.length > 0)
        return ids

      return undefined
    }
  },
  async mounted() {
    await this.$root.$loading.set(30)
    await this.getCategories()
    await this.$root.$loading.set(50)
    await this.getProducts()
    await this.$root.$loading.set(70)
    await this.getManufacturers()
    await this.$root.$loading.finish();
    await setTimeout(() => {
      this.loading = false
    }, 500)
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
          this.$router.push({path: "catalog"})
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
          has_category: true,
          where_manufacturers: this.manufacturers_id
        }
      })
        .then(response => {
          this.products = response.data.payload.products
        })
    },
    getManufacturers() {
      axios.get('/api/users/manufacturers/')
        .then(response => {
          let manufacturers = response.data.payload.manufacturers
          manufacturers.forEach(e => e.active = false)
          this.manufacturers = manufacturers
        })
        .catch(e => {
          this.$Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: e.response.data.message,
          })
        })
    },
    setActiveManufacturer(manufacturer) {
      // if(manufacturer.active !== undefined) {
      manufacturer.active = !manufacturer.active

      this.getProducts()
      // } else {
      //   manufacturer.active = true
      // }
    },
    async setLoading(status) {
      return new Promise((resolve) => {
        this.loading = status
        resolve()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-manufacturers {
  background: #F1F1F1;
  border-radius: 41px;
  border: none;
  font-size: 18px;
  line-height: 21px;
  color: #1A1819;
  padding: 8px 16px;

  &.active {
    background: #1A1819;
    color: #FFFFFF;
  }
}
</style>

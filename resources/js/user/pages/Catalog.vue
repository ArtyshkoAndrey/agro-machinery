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
                  <router-link :to="{name: 'index'}" class="">
                    {{ $t('catalog.breadcrumb.index') }}
                  </router-link>
                </li>
                <li v-if="category_id" class="breadcrumb-item">
                  <router-link :to="{name: 'catalog'}" class="">
                    {{ $t('catalog.breadcrumb.catalog') }}
                  </router-link>
                </li>
                <li v-else aria-current="page" class="breadcrumb-item active">
                  {{ $t('catalog.breadcrumb.catalog') }}
                </li>

                <li v-for="parent in category_parents" :key="parent.id" class="breadcrumb-item">
                  <router-link :to="{ name: 'catalog', query: paramsCategory(parent.id)}" class="">
                    {{ parent.translations ? parent.translations.find(e => e.locale === locale).name : parent.name }}
                  </router-link>
                </li>


                <li v-if="category_id" aria-current="page" class="breadcrumb-item active">
                  {{ category ? category.translations.find(e => e.locale === locale).name : category.name }}
                </li>
              </ol>
            </nav>

            <div v-if="category ? category.file !== null : false" class="row d-none d-lg-flex mt-5">
              <div class="col-12 col-sm-auto">
                <a :href="category.fileUrl" class="d-flex justify-content-between align-items-center btn-pdf" target="_blank" download>
                  <span>{{ $t('catalog.pdf') }}</span>
                  <iconly name="arrow-right" type="light" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-10 col-lg-4">
            <p v-if="category_id && category.video === null" class="category-description">
              {{ category.translations.find(e => e.locale === locale).description }}
            </p>

            <div v-if="category && category.video" class="row">
              <div class="col-12">
                <iframe id="player" type="text/html" width="100%" height="250"
                        :src="category.video + '?enablejsapi=1&origin=http://example.com'"
                        frameborder="0" />
              </div>
            </div>

            <div v-if="category ? category.file !== null : false" class="row d-flex d-lg-none mt-5">
              <div class="col-12 col-sm-auto">
                <a :href="category.fileUrl" class="d-flex justify-content-between align-items-center btn-pdf" target="_blank" download>
                  <span>{{ $t('catalog.pdf') }}</span>
                  <iconly name="arrow-right" type="light" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <transition appear mode="out-in" name="fade">
          <div v-if="category_child.length > 0" class="row category-list gx-2 gy-3">
            <div v-for="cat in category_child" :key="cat.id" class="col-6 col-sm-4 col-lg-3">
              <router-link :to="{ path: 'catalog', query: paramsCategory(cat.id)}"
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
            <h5>{{ $t('SecondMenu.manufacturers') }}</h5>
          </div>
          <div class="col-12 mt-2">
            <div class="row">
              <div v-for="(manufacturer, index) in manufacturers" :key="index" class="col-auto mt-2">
                <button :class="manufacturer.active ? 'active' : ''"
                        class="btn btn-manufacturers"
                        style="white-space: nowrap;"
                        @click="setActiveManufacturer(manufacturer)"
                >
                  {{ manufacturer.name }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="row catalog-list-products gx-1 gx-sm-2 gx-md-4 gx-lg-3 gy-2 gy-md-4">
          <div v-for="product in products" :key="product.id" class="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
            <product :item="product" />
          </div>
        </div>

        <infinite-loading
          :identifier="infiniteId"
          @infinite="infiniteHandler"
        />

        <Footer />
      </section>
    </transition>
  </div>
</template>

<script>
import Spinner from '~/user/components/Spinner'
import Product from '~/user/components/Product'
import axios from 'axios'
import {mapGetters} from 'vuex'
import InfiniteLoading from 'vue-infinite-loading';
import Footer from '~/user/components/Footer'

export default {
  name: "Catalog",
  components: {
    Spinner,
    Product,
    InfiniteLoading,
    Footer
  },
  metaInfo () {
    return {
      title: this.$t('catalog.title')
    }
  },
  beforeRouteLeave(to, from, next) {
    this.loading = true
    setTimeout(() => {
      next()
    }, 500)
  },
  async beforeRouteUpdate(to, from, next) {
    await this.setLoading(true)
    this.infiniteId += 1;
    next()
    await this.getNewManufacturers()
    await this.getCategories()
    await this.getProducts()
    await this.setLoading(false)
  },
  scrollToTop: false,
  data: () => ({
    loading: true,
    category: null,
    category_child: [],
    products: [],
    category_parents: [],
    manufacturers: [],
    currentPage: 1,
    lastPage: 0,
    infiniteId: +new Date(),
    max_products: 8
  }),
  computed: {
    ...mapGetters({
      locale: 'lang/locale',
    }),
    category_id() {
      return this.$route.query.category
    },
    manufacturer_id () {
      console.log(this.$route.query.manufacturer)
      return this.$route.query.manufacturer
    },
    manufacturers_id() {
      let ids = []

      this.manufacturers.forEach(e => {
        e.active ? ids.push(e.id) : null
      })
      if (ids.length > 0)
        return ids

      return undefined
    },
  },
  async mounted() {
    console.log(this.manufacturer_id)
    await this.$root.$loading.set(30)
    await this.getNewManufacturers()
    await this.getCategories()
    await this.$root.$loading.set(50)
    await this.getProducts()
    await this.$root.$loading.set(70)
    await this.$root.$loading.finish();
    await setTimeout(() => {
      this.loading = false
    }, 500)
  },
  methods: {
    async updateLocalManufacturers () {
      await this.getNewManufacturers()
    },
    getNewManufacturers () {
      axios.get('/api/users/manufacturers/')
        .then(response => {
          let manufacturers = response.data.payload.manufacturers
          manufacturers.forEach(e => e.active = false)
          this.manufacturers = manufacturers

          let ids = this.manufacturer_id
          if (Array.isArray(ids))  {
            ids.forEach(id => {
              this.manufacturers.find(e => e.id === Number(id)).active = true;
            })
          }
        })
        .catch(e => {
          console.warn(e, this.manufacturers)
          this.$Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: e.response.data.message,
          })
        })
    },
    paramsCategory(id) {
      return {
        category: id,
        manufacturer: this.manufacturers_id
      }
    },
    paramsManufacturers() {
      return {
        category: this.category_id,
        manufacturer: this.manufacturers_id
      }
    },
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
            this.category = null
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
      this.products = []
      this.currentPage = 1
      this.lastPage = 0
      axios.get('/api/users/catalog', {
        params: {
          has_image: true,
          max_products: this.max_products,
          page: this.currentPage,
          where_category: this.category_id,
          has_category: true,
          where_manufacturers: this.manufacturers_id
        }
      })
        .then(response => {
          response.data.payload.products.data.forEach(e => {
            this.products.push(e)
          })

          this.lastPage = response.data.payload.products.last_page
          this.currentPage = response.data.payload.products.current_page + 1
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
    async setActiveManufacturer(manufacturer) {
      manufacturer.active = !manufacturer.active

      // await this.setLoading(true)
      // this.infiniteId += 1;

      this.$router.push({name: 'catalog', query: this.paramsManufacturers()})

      // await this.getProducts()
      // await this.setLoading(false)

    },
    async setLoading(status) {
      return new Promise((resolve) => {
        this.loading = status
        resolve()
      })
    },
    infiniteHandler($state) {
      setTimeout(() => {
        axios.get('/api/users/catalog', {
          params: {
            has_image: true,
            max_products: this.max_products,
            where_category: this.category_id,
            has_category: true,
            where_manufacturers: this.manufacturers_id,
            page: this.currentPage
          }
        })
          .then(response => {
            response.data.payload.products.data.forEach(e => {
              this.products.push(e)
            })

            this.lastPage = response.data.payload.products.last_page
            this.currentPage = this.currentPage + 1;
            if (this.currentPage > this.lastPage) {
              $state.complete();
            } else {
              $state.loaded();
            }
          })
      }, 1500)

    }
  }
}
</script>

<style lang="scss" scoped>
@import "resources/scss/user/variables";
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

.btn-pdf {
  background: $color-orange;
  color: $color-dark;
  padding: 9px;
  font-size: 14px;
  line-height: 16px;
  text-decoration: none;
  width: 100%;
  border-radius: 16px 0;

  @include respond-to(md) {
    padding: 13px;
    font-size: 16px;
    line-height: 19px;
  }

  svg {
    margin-left: 20px;
  }
}
</style>

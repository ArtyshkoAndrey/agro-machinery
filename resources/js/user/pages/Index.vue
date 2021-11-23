<template>
  <div>
    <transition appear mode="out-in" name="fade">
      <Spinner v-if="loading" key="1" />
      <div v-else key="2">
        <HeaderSection />

        <section id="items-description">
          <div class="row">
            <div class="col-12">
              <h3>{{ $t('index.section_2.title') }}</h3>
            </div>
            <div class="col-11 col-sm-6 col-md-5 col-lg-5">
              <p class="fw-bold color-dark">
                {{ $t('index.section_2.content_1') }}
              </p>
            </div>
            <div class="col-11 col-sm-6 col-md-6 offset-md-1 col-lg-4 offset-lg-3">
              <p class="color-gray">
                {{ $t('index.section_2.content_2') }}
              </p>
            </div>
          </div>
        </section>

        <section class="mt-5">
          <category-info v-for="(category, i) in categories" :key="category.id" :category="category" :reverse="(i + 1) % 2 === 0" />
        </section>

        <section id="perfectly-list" class="mt-5">
          <div class="row">
            <div class="col-12 col-lg-4">
              <div class="row">
                <div class="col-12 col-md-6                                                                         col-lg-12">
                  <h3>{{ $t('index.perfectly-list.title') }}</h3>
                </div>
                <div class="col-12 col-md-6 col-lg-12 offset-lg-0">
                  <p>{{ $t('index.perfectly-list.description') }}</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <ul class="list-unstyled">
                <li>{{ $t('index.perfectly-list.list.0') }}</li>
                <li>{{ $t('index.perfectly-list.list.1') }}</li>
                <li>{{ $t('index.perfectly-list.list.2') }}</li>
              </ul>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <ul class="list-unstyled">
                <li>{{ $t('index.perfectly-list.list.3') }}</li>
                <li>{{ $t('index.perfectly-list.list.4') }}</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="new-products" class="mt-5 mb-3 list-products">
          <div class="row gx-1 gx-sm-2 gx-md-5 gx-lg-3 gy-2 gy-md-4">
            <div class="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
              <div class="card card-for-info-products">
                <h4>
                  <span>{{ $t('index.new-products.title') }}</span> <span class="badge text-uppercase">New</span>
                </h4>
                <p>
                  {{ $t('index.new-products.description') }}
                </p>

                <Button class="mt-auto" orange rounded_angle arrow big>
                  {{ $t('button.catalog') }}
                </Button>
              </div>
            </div>

            <div v-for="product in new_products" :key="product.id" class="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
              <product :item="product" />
            </div>
          </div>
        </section>

        <section>

        </section>


        <section id="popular-products" class="mt-5 mb-3 list-products">
          <div class="row gx-1 gx-sm-2 gx-md-5 gx-lg-3 gy-2 gy-md-4">
            <div class="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
              <div class="card card-for-info-products">
                <h4>
                  {{ $t('index.popular-products.title') }}
                </h4>
                <p>
                  {{ $t('index.popular-products.description') }}
                </p>

                <Button class="mt-auto" orange rounded_angle arrow big>
                  {{ $t('button.catalog') }}
                </Button>
              </div>
            </div>

            <div v-for="product in popular_products" :key="product.id" class="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3">
              <product :item="product" />
            </div>
          </div>
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
import HeaderSection from '~/user/components/HeaderSection';
import CategoryInfo from '~/user/components/CategoryInfo';
import Spinner from '~/user/components/Spinner';
import Product from '~/user/components/Product';
import Button from '~/user/components/Button';
import axios from "axios";
export default {
  name: "Index",
  components: {
    HeaderSection,
    CategoryInfo,
    Spinner,
    Product,
    Button
  },
  metaInfo() {
    return {
      title: 'Главная страница'
    }
  },
  data: () => ({
    loading: true,
    categories: [],
    popular_products: [],
    new_products: []
  }),
  async mounted () {
    await this.$root.$loading.set(30);
    await this.getCategories()
    await this.$root.$loading.set(50);
    await this.getProducts()
    await this.$root.$loading.finish();
  },
  methods: {
    async getCategories () {
      await axios.get('/api/users/categories', {
        params: {
          to_index: 1,
          max_count: 4
        }
      })
      .then(response => {
        this.categories = response.data.payload.categories
      })
    },
    async getProducts () {
      axios.get('/api/users/products', {
        params: {
          new: true,
          has_image: true,
          max_count: 7,
          has_category: true
        }
      })
        .then(response => {
          this.new_products = response.data.payload.products
        })

      axios.get('/api/users/products', {
        params: {
          popular: true,
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
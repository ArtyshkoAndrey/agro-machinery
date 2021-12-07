<template>
  <div>
    <transition appear name="fade">
      <Loader v-if="$root.$loading.show" :key="1"/>

      <div v-else :key="2">
        <div class="row align-items-center justify-content-between mx-0">
          <div class="col-md-6 col-sm-10 col-12">
            <h4>{{ $t('orders.show.title') }} {{ id }}</h4>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-md-10 col-lg-6 col-xl-4">
            <div class="row gy-4 p-0 m-0">
              <!-- Name user -->
              <div class="col-12 p-0">
                <div class="card">
                  <div class="card-title px-3 pt-3">
                    <h5 class="text-reset">
                      {{ $t('orders.show.info.title') }}
                    </h5>
                  </div>
                  <div class="card-body px-3 pt-0">
                    <div class="row">
                      <div class="col-6">
                        <p class="opacity-50 fs-6 mb-0">
                          {{ $t('orders.show.user.name') }}
                        </p>
                        <p class="fw-500">
                          {{ order.name }}
                        </p>
                      </div>
                      <div class="col-6">
                        <p class="opacity-50 fs-6 mb-0">
                          {{ $t('orders.show.user.email') }}
                        </p>
                        <p class="fw-500">
                          {{ order.email }}
                        </p>
                      </div>
                      <div class="col-6">
                        <p class="opacity-50 fs-6 mb-0">
                          {{ $t('orders.show.user.phone') }}
                        </p>
                        <p class="fw-500">
                          {{ order.phone }}
                        </p>
                      </div>
                      <div class="col-12">
                        <p class="opacity-50 fs-6 mb-0">
                          {{ $t('orders.show.user.date') }}
                        </p>
                        <p class="fw-500">
                          {{ $formatDate(order.created_at) }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Name user -->
            </div>
          </div>
          <div class="col-12 col-md-10 col-lg-12 col-xl-8">
            <div class="row gy-4 p-0 m-0">
              <!-- Name user -->
              <div class="col-12 p-0">
                <div class="card">
                  <div class="card-title px-3 pt-3">
                    <h5 class="text-reset">
                      {{ $t('orders.show.products.title') }}
                    </h5>
                  </div>
                  <div class="card-body px-3 pt-0">
                    <div class="row gy-3">

                      <div v-for="(product, index) in order.products" :key="product.id" class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-4 product">
                        <div class="row">
                          <div class="col-12">
                            <img :src="product.image.uri"
                                 :alt="product.name"
                                 class="w-100"
                            >
                          </div>
                          <div class="col-12">
                            <p class="name">{{ product.name }}</p>
                          </div>
                          <div class="col-12">
                            <p class="cost">{{ product.cost }} ₸</p>
                          </div>
                        </div>
                        <div class="row d-flex d-sm-none" v-if="index !== order.products.length">
                          <hr>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <!-- End Name user -->
            </div>
          </div>
        </div>

        <div class="row mt-2">
          <div class="col-12">
            <vs-button class="w-auto ms-auto" @click="$router.go(-1)">
              {{ $t('back') }}
            </vs-button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'
import Loader from '~/admin/components/Loader.vue'
export default {
  name: "Show",
  components: {
    Loader
  },
  data: () => ({
    order: {}
  }),
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  metaInfo () {
    return {
      title: this.$t('orders.show.title') + this.id
    }
  },
  mounted () {
    this.getOrder()
  },
  methods: {
    getOrder() {
      axios.get('/api/admin/orders/' + this.id)
      .then(r => {
        this.order = r.data.payload.order
        this.$root.$loading.finish()
      })
      .catch(e => {
        this.$vs.notification({
          duration: 4000,
          sticky: true,
          position: 'top-right',
          color: 'danger',
          title: this.$t('notification.get.danger.title'),
          text: e.response ? e.response.data.message : this.$t('notification.get.danger.text')
        })

        this.$router.push({name: 'dashboard.orders.index'})
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .product {
    .name {
      font-size: 16px;
      font-weight: bold;
      margin-top: 10px;
      margin-left: 5px;
    }

    .cost {
      font-size: 14px;
      font-weight: bolder;
      text-align: right;
    }
  }
</style>

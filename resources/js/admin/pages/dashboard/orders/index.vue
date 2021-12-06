<template>
  <Loader v-if="$root.$loading.show" />

  <div v-else>
    <HeaderFilterInfo ref="filter"
                      :values="orders"
                      :view-length="viewLength"
                      :title="$t('orders.index.filter_title')"
                      :filter="filter"
                      :hideCreate="true"
                      @create="redirectStore"
                      @get="get"
                      @setViewLength="setViewLength"
    />

    <div class="row gy-3 mt-3">
      <div v-for="item in orders.data" :key="item.id" class="col-12">
        <ItemCardOneField :item="item"
                          :fields="inputs"
                          :hideId="false"
                          :hideUpdate="true"
                          title-router
                          @title-route="redirectEdit(item.id)"
                          @destroy="deleteItem"
        />
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import Loader from '~/admin/components/Loader.vue'
import HeaderFilterInfo from '~/admin/components/HeaderFilterInfo.vue'
import ItemCardOneField from '~/admin/components/ItemCardOneField.vue'
import Vue from "vue";

export default {
  name: 'Index',
  components: {
    Loader,
    HeaderFilterInfo,
    ItemCardOneField
  },
  data: () => ({
    viewLength: 10,
    orders: {},
    filter: new Vue(),
    inputs: [
      'id', 'name', 'email', 'cost'
    ]
  }),
  computed: {

  },
  metaInfo () {
    return {
      title: this.$t('orders.index.title'),
    }
  },
  async mounted () {

    await this.$root.$loading.set(50)
    await axios.get('/api/admin/orders', {
      params: {
        per_page: this.viewLength,
      }
    })
    .then(r => {
      console.log(r.data)
      this.orders = r.data.payload.orders
      this.$root.$loading.finish()
    })
    .catch(e => {
      console.log(e)
      this.$root.$loading.fail()
    })
  },
  methods: {
    /**
     * update new Date
     *
     * @param {object} settings
     * @param {number} settings.page
     * @param {string} settings.search
     */
    get (settings) {
      axios.get('/api/admin/orders', {
        params: {
          per_page: this.viewLength,
          page: settings.page,
          search: settings.search
        }
      })
        /**
         * @var {object} r
         * @var {object} r.data
         * @var {object} r.data.payload
         * @var {array} r.data.payload.orders
         */
      .then(r => {
        this.orders = r.data.payload.orders
        this.filter.$emit('updateData', r.data.payload.orders)
      })

    },

    /**
     * new view items count
     *
     * @param {number} newLength
     */
    setViewLength (newLength) {
      this.viewLength = newLength
    },

    /**
     * Delete select resort
     *
     * @param {number} id
     */
    deleteItem (id) {
      axios.delete('/api/admin/orders/' + id)
        /**
         * @var {object} r
         * @var {object} r.data
         * @var {object} r.data.payload
         * @var {object} r.data.payload.products
         */
      .then(r => {
        this.$vs.notification({
          duration: 2000,
          sticky: true,
          position: 'top-right',
          color: 'success',
          title: this.$t('notification.delete.success.title', {name: r.data.payload.order.id}),
          text: this.$t('notification.delete.success.text', {name: r.data.payload.order.id})
        })
        this.get({
          page: this.$refs.filter.page,
          search: this.$refs.filter.value
        })
      })
      .catch(e => {
        this.$vs.notification({
          duration: 2000,
          sticky: true,
          position: 'top-right',
          color: 'danger',
          title: this.$t('notification.delete.danger.title'),
          text: e.response.data.message
        })
        this.get({
          page: this.$refs.filter.page,
          search: this.$refs.filter.value
        })
      })

    },

    redirectEdit (id) {
      this.$router.push({name: 'dashboard.orders.show', params: { id: id } })
    },

    redirectStore () {

      // this.$router.push({name: 'dashboard.products.store'})
    }
  }
}
</script>

<style scoped>

</style>

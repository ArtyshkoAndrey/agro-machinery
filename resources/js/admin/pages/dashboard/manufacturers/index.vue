<template>
  <Loader v-if="$root.$loading.show" />

  <div v-else>
    <HeaderFilterInfo ref="filter"
                      :values="manufacturers"
                      :view-length="viewLength"
                      :title="$t('manufacturers.index.filter_title')"
                      :filter="filter"
                      @create="busCreateManufacturer.$emit('openModal')"
                      @get="get"
                      @setViewLength="setViewLength"
    />

    <div class="row gy-3 mt-3">
      <div v-for="item in manufacturers.data" :key="item.id" class="col-12">
        <ItemCardOneField :item="item"
                          :fields="inputs"
                          :update-modal-title="'manufacturers.edit-modal.title'"
                          @update="update"
                          @destroy="deleteItem"
        />
      </div>
    </div>

    <EditItemsModal :bus="busCreateManufacturer"
                    :title="'manufacturers.create-modal.title'"
                    :fields="inputs"
                    :inputs="{}"
    />
  </div>
</template>

<script>

import axios from 'axios'
import Loader from '~/admin/components/Loader.vue'
import HeaderFilterInfo from '~/admin/components/HeaderFilterInfo.vue'
import ItemCardOneField from '~/admin/components/ItemCardOneField.vue'
import EditItemsModal from "~/admin/components/EditItemsModal";
import Vue from "vue";
import i18n from "~/admin/plugins/i18n";
import {mapGetters} from "vuex";

export default {
  name: 'Index',
  components: {
    Loader,
    HeaderFilterInfo,
    ItemCardOneField,
    EditItemsModal
  },
  data: () => ({
    viewLength: 10,
    manufacturers: {},
    filter: new Vue(),
    busCreateManufacturer: new Vue(),
    inputs: [
      'id', 'name'
    ]
  }),
  computed: {
    ...mapGetters({
      user: 'auth/user'
    }),
  },
  async mounted () {
    await this.busCreateManufacturer.$on('save', this.store)

    await this.$root.$loading.set(50)
    await axios.get('/api/admin/manufacturers', {
      params: {
        per_page: this.viewLength,
      }
    })
    .then(r => {
      console.log(r.data)
      this.manufacturers = r.data.payload.manufacturers
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
      axios.get('/api/admin/manufacturers', {
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
         * @var {array} r.data.payload.manufacturers
         */
      .then(r => {
        this.manufacturers = r.data.payload.manufacturers
        this.filter.$emit('updateData', r.data.payload.manufacturers)
        console.log('new data', r.data)
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

      axios.delete('/api/admin/manufacturers/' + id)
        /**
         * @var {object} r
         * @var {object} r.data
         * @var {object} r.data.payload
         * @var {object} r.data.payload.manufacturer
         */
      .then(r => {
        this.$vs.notification({
          duration: 2000,
          sticky: true,
          position: 'top-right',
          color: 'success',
          title: this.$t('notification.delete.success.title', {name: r.data.payload.manufacturer.name}),
          text: this.$t('notification.delete.success.text', {name: r.data.payload.manufacturer.name})
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

    /**
     *
     * @param {object} params
     * @var {function} params.callbackSuccess
     * @var {function} params.callbackError
     * @var {number} params.id
     * @var {string} params.name
     */
    update (params) {

      axios.put('/api/admin/manufacturers/' + params.id, {
        name: params.name,
      })
      .then(r => {
        if(r.data.success) {
          params.callbackSuccess()
          this.get({
            page: this.$refs.filter.page,
            search: this.$refs.filter.value
          })
        } else {
          params.callbackError('Не предвиденная ошибка')
        }
      })
      .catch(e => {
        if (e.response.data.errors) {
          params.callbackError(e.response.data.errors)
        } else {
          params.callbackError({
            message: e.response.data.message
          })
        }
      })
    },

    /**
     *
     * @param {object} params
     * @var {function} params.callbackSuccess
     * @var {function} params.callbackError
     * @var {null} params.id
     * @var {string} params.name
     */
    store (params) {
      axios.post('/api/admin/manufacturers/', {
        name: params.name
      })
      .then(r => {
        if (r.data.success) {
          params.callbackSuccess()

          this.get({
            page: this.$refs.filter.page,
            search: this.$refs.filter.value
          })
        } else {
          params.callbackError('Server return Error')
        }
      })
      .catch(e => {
        if (e.response.data.errors) {
          params.callbackError(e.response.data.errors)
        } else {
          params.callbackError({
            message: e.response.data.message
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>

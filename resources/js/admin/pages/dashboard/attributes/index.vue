<template>
  <Loader v-if="$root.$loading.show" />

  <div v-else>
    <HeaderFilterInfo ref="filter"
                      :values="attributes"
                      :view-length="viewLength"
                      :title="$t('attributes.index.filter_title')"
                      :filter="filter"
                      @create="store"
                      @get="get"
                      @setViewLength="setViewLength"
    />
    <div class="row gy-3 mt-3">
      <div v-for="item in attributes.data" :key="item.id" class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row align-items-center mx-0">
              <div class="col-auto">
                <h6 class="mb-0">
                  {{ item.translations.find(e => e.locale === locale).name }}
                </h6>
              </div>

              <div class="col-auto ms-auto">
                <div class="row gx-0">
                  <div class="col">
                    <vs-button
                      icon
                      circle
                      success
                      flat
                      @click="update(item.id)"
                    >
                      <em class="bx bx-pencil" />
                    </vs-button>
                  </div>
                  <div class="col">
                    <vs-button
                      icon
                      circle
                      danger
                      flat
                      @click="deleteItem(item.id)"
                    >
                      <em class="bx bx-trash-alt" />
                    </vs-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import axios from 'axios'
import Loader from '~/admin/components/Loader.vue'
import HeaderFilterInfo from '~/admin/components/HeaderFilterInfo.vue'
import Vue from "vue";
import { mapGetters } from "vuex";

export default {
  name: 'Index',
  components: {
    Loader,
    HeaderFilterInfo,
  },
  metaInfo() {
    return {
      title: this.$t('attributes.index.title')
    }
  },
  data: () => ({
    viewLength: 10,
    attributes: {},
    filter: new Vue(),
    busCreateAttribute: new Vue(),
  }),
  computed: {
    ...mapGetters({
      locale: 'lang/locale'
    })
  },
  async mounted () {
    await this.busCreateAttribute.$on('save', this.store)

    await this.$root.$loading.set(50)
    await axios.get('/api/admin/attributes', {
      params: {
        per_page: this.viewLength,
      }
    })
    .then(r => {
      console.log(r.data)
      this.attributes = r.data.payload.attributes
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
      axios.get('/api/admin/attributes', {
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
         * @var {array} r.data.payload.attributes
         */
      .then(r => {
        this.attributes = r.data.payload.attributes
        this.filter.$emit('updateData', r.data.payload.attributes)
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
      axios.delete('/api/admin/attributes/' + id)
        /**
         * @var {object} r
         * @var {object} r.data
         * @var {object} r.data.payload
         * @var {object} r.data.payload.attributes
         */
      .then(r => {
        this.$vs.notification({
          duration: 2000,
          sticky: true,
          position: 'top-right',
          color: 'success',
          title: this.$t('notification.delete.success.title', {name: r.data.payload.attribute.name}),
          text: this.$t('notification.delete.success.text', {name: r.data.payload.attribute.name})
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

    update (id) {
      this.$router.push({
        name: 'dashboard.attributes.edit',
        params: {id: id}
      })
    },

    store () {
      this.$router.push({
        name: 'dashboard.attributes.store'
      })
    }
  }
}
</script>

<style scoped>

</style>

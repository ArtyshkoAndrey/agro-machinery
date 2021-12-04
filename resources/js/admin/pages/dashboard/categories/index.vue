<template>
  <div>
    <transition appear mode="out-in" name="fade">
      <Loader v-if="$root.$loading.show" key="1"/>

      <div v-else key="2">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8">
            <h2 v-if="category !== null">
              {{ $t('categories.index.title_category') }}
              {{ category.translations.find(e => e.locale === locale).name }}
            </h2>
            <h2 v-else>
              {{ $t('categories.index.title') }}
            </h2>
          </div>
          <div class="col-12 col-md-4 mt-2 mt-md-0">
            <vs-button
              class="d-flex ms-auto"
              size="large"
              success
              flat
              block
              @click="openedCreateModal"
            >
              Создать
            </vs-button>

          </div>
        </div>
        <div class="row gy-3 mt-3">
          <div v-for="item in categories" :key="item.id" class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="row align-items-center mx-0">
                  <div class="col-auto">
                    <h6 class="mb-0">
                      <router-link :to="{
                        name: 'dashboard.categories.index',
                        query: {
                          category_id: item.id
                        }
                      }"
                      >
                        {{ item.translations.find(e => e.locale === locale).name }}
                      </router-link>
                    </h6>
                  </div>

                  <div class="col-auto ms-auto">
                    <div class="row gx-0">
                      <div class="col">
                        <vs-button
                          circle
                          flat
                          icon
                          success
                          @click="update(item.id)"
                        >
                          <em class="bx bx-pencil"/>
                        </vs-button>
                      </div>
                      <div class="col">
                        <vs-button
                          circle
                          danger
                          flat
                          icon
                          @click="deleteItem(item.id)"
                        >
                          <em class="bx bx-trash-alt"/>
                        </vs-button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="categories.length === 0"
               class="col-12"
          >
            <div class="card">
              <div class="card-body text-center">
                <h5>{{ $t('no_items') }}</h5>
              </div>
            </div>
          </div>
        </div>

        <div v-if="category_id" class="row justify-content-end mt-2 mt-md-5">
          <div class="col-auto">
            <vs-button
              @click="$router.go(-1)"
            >
              {{ $t('back') }}
            </vs-button>
          </div>
        </div>


        <create-modal :id="category_id"
                      :bus="busOpenedModal"
                      @create="store"
        />

      </div>
    </transition>
  </div>
</template>

<script>

import axios from 'axios'
import Loader from '~/admin/components/Loader.vue'
import CreateModal from "./parts/createModal";
import {mapGetters} from "vuex";
import Vue from "vue";

export default {
  name: 'Index',
  components: {
    Loader,
    CreateModal
  },
  metaInfo() {
    return {
      title: this.$t('attributes.index.title')
    }
  },
  data: () => ({
    categories: [],
    category: null,
    busOpenedModal: new Vue()
  }),
  computed: {
    ...mapGetters({
      locale: 'lang/locale'
    }),
    category_id() {
      if (this.$route.query.category_id) {
        return Number(this.$route.query.category_id)
      }
      return undefined
    }
  },
  // eslint-disable-next-line vue/order-in-components
  async beforeRouteUpdate(to, from, next) {
    await next()
    await this.get()
  },
  async mounted() {
    await this.get()
  },
  methods: {
    async get() {
      await this.$root.$loading.set(50)
      this.category = null
      let url = ''
      if (this.category_id) {
        url = '/api/admin/categories/' + this.category_id
      } else {
        url = '/api/admin/categories'
      }
      axios.get(url, {
        params: {
          no_parents: true
        }
      })
        .then(r => {
          console.log(r.data)
          if (this.category_id) {
            this.category = r.data.payload.category
            this.categories = r.data.payload.category.child
          } else {
            this.categories = r.data.payload.categories
          }
          this.$root.$loading.finish()
        })
        .catch(e => {
          console.log(e)
          this.$root.$loading.fail()
        })

    },

    openedCreateModal() {
      this.busOpenedModal.$emit('open')
    },

    store() {

    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <transition appear name="fade">
      <Loader v-if="$root.$loading.show" />

      <div v-else>
        <div class="row align-items-center justify-content-between mx-0">
          <div class="col-md-6 col-sm-10 col-12">
            <h4>{{ $t('attributes.store.title') }}</h4>
          </div>
        </div>

        <div class="card p-4 mt-3">
          <div class="card-body px-0">

            <div class="row">

              <div class="col-12 mb-4">
                <h6>Russian</h6>
              </div>

              <div class="col-12 col-lg-4">
                <vs-input
                  v-model="form.ru.name"
                  :label-placeholder="$t('attributes.inputs.name')"
                >
                  <template v-if="form.errors.has('ru.name')" #message-danger>
                    {{ form.errors.get('ru.name') }}
                  </template>
                </vs-input>
              </div>
            </div>

            <div class="row">

              <div class="col-12 mb-4 mt-4">
                <h6>English</h6>
              </div>

              <div class="col-12 col-lg-4">
                <vs-input
                  v-model="form.en.name"
                  :label-placeholder="$t('attributes.inputs.name')"
                >
                  <template v-if="form.errors.has('en.name')" #message-danger>
                    {{ form.errors.get('en.name') }}
                  </template>
                </vs-input>
              </div>
            </div>

            <div class="row mt-4 justify-content-end">
              <div class="col-auto">
                <vs-button
                  success
                  :loading="form.busy"
                  @click="update"
                >
                  {{ $t('form.save') }}
                </vs-button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { getAttribute } from "~/admin/api/attributes"
import Loader from '~/admin/components/Loader'
import Form from 'vform'
import { mapGetters } from 'vuex'

export default {
  name: 'Store',
  components: {
    Loader
  },
  metaInfo() {
    return {
      title: this.$t('attributes.store.title')
    }
  },
  data: () => ({
    form: new Form({
      ru: {
        name: '',
      },
      en: {
        name: '',
      }
    }),
  }),
  computed: {
    ...mapGetters({
      locale: 'lang/locale',
    }),
  },
  async mounted () {
    await this.$root.$loading.finish()
  },
  methods: {
    update () {
      this.form.post('/api/admin/attributes/')
      .then(r => {
        console.log(r.data)
        this.$vs.notification({
          duration: 2000,
          sticky: true,
          position: 'top-right',
          color: 'success',
          title: this.$t('notification.store.success.title'),
          text: this.$t('notification.store.success.text'),
        })

        this.$router.push({
          name: 'dashboard.attributes.index'
        })
      })
        .catch(e => {
          console.log(e.response.data)
          this.$vs.notification({
            duration: 2000,
            sticky: true,
            position: 'top-right',
            color: 'danger',
            title: this.$t('notification.store.danger.title'),
            text: e.response.data.message,
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

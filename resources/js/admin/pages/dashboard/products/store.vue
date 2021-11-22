<template>
  <div>
    <transition appear name="fade">
      <Loader v-if="$root.$loading.show" />

      <div v-else>
        <div class="row align-items-center justify-content-between mx-0">
          <div class="col-md-6 col-sm-10 col-12">
            <h4>{{ $t('products.store.title') }}</h4>
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
                  :label-placeholder="$t('products.inputs.name')"
                >
                  <template v-if="form.errors.has('ru.name')" #message-danger>
                    {{ form.errors.get('ru.name') }}
                  </template>
                </vs-input>
              </div>
              <div class="col-12 col-lg mt-5 mt-lg-0 position-relative">
                <span style="font-size: 0.8rem; padding: 5px 10px; top: -35px"
                      class="position-absolute"
                >
                  {{ $t('products.inputs.description') }}
                </span>
                <editor
                  id="uuid"
                  v-model="form.ru.description"
                  style="background-color: rgba(var(--vs-gray-2), 1); border-radius: 5px; padding: 5px 15px"
                  api-key="z826n1n5ayf774zeqdphsta5v2rflavdm2kvy7xtmczyokv3"
                  cloud-channel="5"
                  :init="{
                    plugins: [
                      'autolink',
                      'codesample',
                      'link',
                      'lists',
                      'media',
                      'powerpaste',
                      'table',
                      'image',
                      'quickbars',
                      'codesample',
                      'help'
                    ],
                    content_css: 'dark',
                    skin: 'oxide-dark',
                    quickbars_insert_toolbar: 'quicktable image media codesample',
                    quickbars_selection_toolbar: 'bold italic underline | formatselect | blockquote quicklink',
                    contextmenu: 'undo redo | inserttable | cell row column deletetable | help',
                    powerpaste_word_import: 'clean',
                    powerpaste_html_import: 'clean',
                  }"
                  :inline="true"
                  tag-name="div"
                  :menubar:="false"
                  value="Начни писать тут..."
                />
                <span v-if="form.errors.has('ru.description')" class="text-danger"  style="font-size: 0.7rem">
                  {{ form.errors.get('ru.description') }}
                </span>
              </div>
            </div>

            <div class="row">

              <div class="col-12 mb-4 mt-4">
                <h6>English</h6>
              </div>

              <div class="col-12 col-lg-4">
                <vs-input
                  v-model="form.en.name"
                  :label-placeholder="$t('products.inputs.name')"
                >
                  <template v-if="form.errors.has('en.name')" #message-danger>
                    {{ form.errors.get('en.name') }}
                  </template>
                </vs-input>
              </div>

              <div class="col-12 col-lg mt-5 mt-lg-0 position-relative">
                <span style="font-size: 0.8rem; padding: 5px 10px; top: -35px"
                      class="position-absolute">
                  {{ $t('products.inputs.description') }}
                </span>
                <editor
                  id="uuid2"
                  v-model="form.en.description"
                  style="background-color: rgba(var(--vs-gray-2), 1); border-radius: 5px; padding: 5px 15px"
                  api-key="z826n1n5ayf774zeqdphsta5v2rflavdm2kvy7xtmczyokv3"
                  cloud-channel="5"
                  :init="{
                    plugins: [
                      'autolink',
                      'codesample',
                      'link',
                      'lists',
                      'media',
                      'powerpaste',
                      'table',
                      'image',
                      'quickbars',
                      'codesample',
                      'help'
                    ],
                    content_css: 'dark',
                    skin: 'oxide-dark',
                    quickbars_insert_toolbar: 'quicktable image media codesample',
                    quickbars_selection_toolbar: 'bold italic underline | formatselect | blockquote quicklink',
                    contextmenu: 'undo redo | inserttable | cell row column deletetable | help',
                    powerpaste_word_import: 'clean',
                    powerpaste_html_import: 'clean',
                  }"
                  :inline="true"
                  tag-name="div"
                  :menubar:="false"
                  value="Right now..."
                />
                <span v-if="form.errors.has('en.description')" class="text-danger" style="font-size: 0.7rem">
                  {{ form.errors.get('en.description') }}
                </span>
              </div>
            </div>

            <div class="row mb-4">
              <div class="col-12">
                <hr>
              </div>
            </div>

            <div class="row mb-4">
              <div class="col-md-6 col-lg-3">
                <vs-input
                  v-model="form.cost"
                  icon-after
                  type="number"
                  min="0"
                  step="1"
                  :label-placeholder="$t('products.inputs.cost')"
                >
                  <template #icon>
                    T
                  </template>
                  <template v-if="form.errors.has('cost')" #message-danger>
                    {{ form.errors.get('cost') }}
                  </template>
                </vs-input>
              </div>

              <div class="col-md-6 col-lg-3 mt-3 mt-md-0">
                <vs-select
                  v-model="form.category_id"
                  filter
                  :placeholder="$t('products.inputs.category')"
                >
                  <template v-if="form.errors.has('category_id')" #message-danger>
                    {{ form.errors.get('category_id') }}
                  </template>

                  <vs-option v-for="category in categories"
                             :label="category.translations.find(e => e.locale === locale).name"
                             :key="category.id"
                             :value="category.id"
                  >
                    {{ category.translations.find(e => e.locale === locale).name }}
                  </vs-option>
                </vs-select>
              </div>

              <div class="col-md-6 col-lg-3 mt-3 mt-lg-0">
                <vs-select
                  v-model="form.suitable"
                  filter
                  multiple
                  :placeholder="$t('products.inputs.suitable')"
                >
                  <template v-if="form.errors.has('suitable')" #message-danger>
                    {{ form.errors.get('suitable') }}
                  </template>

                  <vs-option v-for="product in products"
                             :key="product.id"
                             :label="product.translations.find(e => e.locale === locale).name"
                             :value="product.id"
                  >
                    {{ product.translations.find(e => e.locale === locale).name }}
                  </vs-option>
                </vs-select>
              </div>

              <div class="col-md-6 col-lg-3 mt-3 mt-lg-0 d-flex align-items-center">
                <vs-checkbox v-model="form.new">
                  {{ $t('products.inputs.new') }}
                </vs-checkbox>

                <vs-checkbox v-model="form.popular" class="ms-3">
                  {{ $t('products.inputs.popular') }}
                </vs-checkbox>
              </div>
            </div>

            <div class="row mb-4">
              <div class="col-12">
                <hr>
              </div>
            </div>

            <div class="row">
              <div class="col-12">
                <vue-dropzone id="dropzone" :options="dropzoneOptions" :use-custom-slot="true">
                  <div class="dropzone-custom-content">
                    <h3 class="dropzone-custom-title">Drag and drop to upload content!</h3>
                    <div class="subtitle">...or click to select a file from your computer</div>
                  </div>
                </vue-dropzone>
                <span v-if="form.errors.has('images')" class="text-danger" style="font-size: 0.7rem">
                  {{ form.errors.get('images') }}
                </span>
              </div>
            </div>

            <div class="row mt-4 justify-content-end">
              <div class="col-auto">
                <vs-button
                  success
                  @click="store"
                  :loading="form.busy"
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
import { getCategories } from "~/admin/api/categories"
import { getProducts } from "~/admin/api/products"
import { removeImage } from "~/admin/api/images"
import Loader from '~/admin/components/Loader'
import i18n from "~/admin/plugins/i18n"
import Form from 'vform'
import Editor from '@tinymce/tinymce-vue'
import { mapGetters } from 'vuex'
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  name: 'Store',
  components: {
    Loader,
    // eslint-disable-next-line vue/no-unused-components
    'editor': Editor,
    vueDropzone: vue2Dropzone
  },
  data: () => ({
    title: i18n.t('products.index.title'),
    form: new Form({
      ru: {
        name: '',
        description: ''
      },
      en: {
        name: '',
        description: ''
      },
      category_id: '',
      cost: '',
      suitable: [],
      new: false,
      popular: false,
      images: []
    }),
    categories: [],
    products: [],
  }),
  computed: {
    ...mapGetters({
      locale: 'lang/locale',
      token: 'auth/token'
    }),
    dropzoneOptions () {
      let self = this
      return {
        paramName: "image",
        url: '/api/admin/products/image/upload',
        thumbnailWidth: 150,
        maxFilesize: 2,
        dictRemoveFile: this.locale === 'ru' ? 'Удалить' : 'Remove',
        addRemoveLinks: true,
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Accept-Language': this.locale,
        },
        init: function () {
          this.on("error", function (file, message) {
            alert(message);
            this.removeFile(file);
            return 0;
          });
          this.on('success', function (file, response) {
            console.warn(response)
            response.payload.images.forEach(image => {
              self.form.images.push(image)
              file.previewElement.dataset.id = image.id
            })
            console.log(self.form.images)
          })
          this.on("removedfile", function (file) {
            let id = file.previewElement.dataset.id

            self.form.images = self.form.images.filter(e => {
              return Number(e.id) !== Number(id)
            })
            console.log(self.form.images)
            if (id) {
              removeImage(id)
                .then(r => {
                  console.log(r)
                })
            }
          })
        }
      }
    }
  },
  metaInfo: {
    title: i18n.t('products.index.title'),
  },
  watch: {
    locale: function (newVal) {
      document.querySelectorAll('.dz-remove').forEach(e => {
        e.innerHTML = newVal === 'ru' ? 'Удалить' : 'Remove'
      })
    }
  },
  async mounted () {

    await this.$root.$loading.set(50)

    await getCategories()
      .then(r => {
        this.categories = r
      })

    await getProducts()
      .then(r => {
        this.products = r
      })

    await console.log(this.products)

    await this.$root.$loading.finish()
  },
  methods: {
    store () {
      this.form.post('/api/admin/products')
      .then(r => {
        console.warn(r)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <vs-dialog v-model="active" :loading="loading" full-screen overflow-hidden>
    <template #header>
      <h4 class="not-margin">
        {{ $t('categories.create-modal.title') }}
      </h4>
    </template>


    <div class="row">
      <div class="col-12 col-md-6 col-lg-4">
        <vs-input v-model="form.ru.name" :placeholder="$t('categories.inputs.name')">
          <template #icon>
            ru
          </template>
        </vs-input>

        <vs-input v-model="form.en.name" :placeholder="$t('categories.inputs.name')" class="mt-2">
          <template #icon>
            en
          </template>
        </vs-input>

        <vs-select
          v-model="form.category_id"
          :placeholder="$t('categories.inputs.parent')"
          class="mt-2"
          filter
        >
          <template v-if="form.errors.has('category_id')" #message-danger>
            {{ form.errors.get('category_id') }}
          </template>

          <vs-option :label="''"
                     :value="''"
                     key="nullable"
          >
            {{ $t('categories.inputs.withoutParent') }}
          </vs-option>
          <vs-option v-for="category in categories"
                     :key="category.id"
                     :label="category.translations.find(e => e.locale === locale).name"
                     :value="category.id"
          >
            {{ category.translations.find(e => e.locale === locale).name }}
          </vs-option>
        </vs-select>
      </div>

      <div class="col-lg-8 col-md-6 mt-2 mt-md-0">
        <div class="vs-input-parent vs-input-parent--state-null vs-input-content vs-component--primary">
          <textarea v-model="form.ru.description" :placeholder="$t('categories.inputs.description')"
                    class="vs-input vs-input--has-icon"
          />
          <span class="vs-input__icon">
            ru
          </span>
        </div>

        <div class="vs-input-parent vs-input-parent--state-null vs-input-content mt-2 vs-component--primary">
          <textarea v-model="form.en.description" :placeholder="$t('categories.inputs.description')"
                    class="vs-input vs-input--has-icon"
          />
          <span class="vs-input__icon">
            en
          </span>
        </div>
      </div>
      <div class="col-12 col-md-6 mt-3">
        <h4 class="ps-2">PDF</h4>
        <vue-dropzone id="dropzonePDF" ref="pdfDropZone" :options="dropzoneOptionsPDF" :use-custom-slot="true">
          <div class="dropzone-custom-content">
            <h3 class="dropzone-custom-title">Drag and drop to upload content!</h3>
            <div class="subtitle">...or click to select a file from your computer</div>
          </div>
        </vue-dropzone>
      </div>
      <div class="col-12 col-md-6 mt-3">
        <h4 class="ps-2">Photo</h4>
        <vue-dropzone id="dropzonePhoto" ref="photoDropZone" :options="dropzoneOptionsPhoto" :use-custom-slot="true">
          <div class="dropzone-custom-content">
            <h3 class="dropzone-custom-title">Drag and drop to upload content!</h3>
            <div class="subtitle">...or click to select a file from your computer</div>
          </div>
        </vue-dropzone>
      </div>
    </div>

    <template #footer>
      <div class="row justify-content-center">
        <div class="col-12 col-md-auto">
          <vs-button block size="large" @click="update">
            {{ $t('form.save') }}
          </vs-button>
        </div>
      </div>
    </template>
  </vs-dialog>
</template>

<script>
import {getCategories} from "~/admin/api/categories";
import Vue from "vue";
import Form from "vform";
import {mapGetters} from "vuex";


import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import axios from "axios";
import { removeImage } from "~/admin/api/images"
import { getCategory } from "~/admin/api/categories"

export default {
  name: "UpdateModal",
  components: {
    vueDropzone: vue2Dropzone
  },
  props: {
    bus: {
      type: Vue,
      required: false,
      default: () => {
        return new Vue()
      }
    },
    id: {
      type: Number,
      required: false,
      default: undefined
    }
  },
  data: () => ({
    active: false,
    loading: false,
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
      file: null,
      image: null,
      id: null
    }),
    categories: [],
    responseCategories: []
  }),
  computed: {
    ...mapGetters({
      locale: 'lang/locale',
      token: 'auth/token'
    }),

    dropzoneOptionsPDF() {
      let self = this
      return {
        paramName: "pdf",
        acceptedFiles: ".pdf",
        url: '/api/admin/categories/pdf/upload',
        thumbnailWidth: 150,
        maxFilesize: 5,
        maxFiles: 1,
        dictRemoveFile: self.locale === 'ru' ? 'Удалить' : 'Remove',
        addRemoveLinks: true,
        headers: {
          'Authorization': `Bearer ${self.token}`,
          'Accept-Language': self.locale,
        },
        init: function () {
          this.on("error", function (file, message) {
            alert(message);
            return 0;
          });
          this.on('addedfile', function (file) {
            if (file.serverName) {
              file.previewElement.dataset.name = file.serverName
            }
          })
          this.on('success', function (file, response) {
            console.log(response)
            self.form.file = response.payload.name
            file.previewElement.dataset.name = self.form.file
          })
          this.on("removedfile", function (file) {
            if (self.$refs.pdfDropZone.dropzone.disabled !== true) {
              if (file.previewElement.dataset.name === self.form.file) {
                self.removePDF(self.form.file)
                self.form.file = null
              } else {
                alert(Error)
                return 0;
              }
            }
          })
        }
      }
    },
    dropzoneOptionsPhoto() {
      let self = this
      return {
        paramName: "image",
        acceptedFiles: "image/jpg, image/png, image/jpeg",
        url: '/api/admin/image/upload',
        thumbnailWidth: 150,
        maxFilesize: 5,
        maxFiles: 1,
        dictRemoveFile: self.locale === 'ru' ? 'Удалить' : 'Remove',
        addRemoveLinks: true,
        headers: {
          'Authorization': `Bearer ${self.token}`,
          'Accept-Language': self.locale,
        },
        init: function () {
          this.on("error", function (file, message) {
            alert(message);
            return 0;
          });
          this.on('addedfile', function (file) {
            if (file.serverID) {
              file.previewElement.dataset.id = file.serverID
            }
          })
          this.on('success', function (file, response) {
            if (response.payload.images) {
              let image = response.payload.images.pop();
              console.log(image)
              self.form.image = image.id
              file.previewElement.dataset.id = image.id
            }
          })
          this.on("removedfile", function (file) {
            if (self.$refs.photoDropZone.dropzone.disabled !== true) {
              console.log(file.previewElement.dataset.id, self.form.image)
              if (Number(file.previewElement.dataset.id) === self.form.image) {
                removeImage(self.form.image)
                  .then(r => {
                    console.log(r)
                    this.form.image = null
                  })
                  .catch(e => {
                    console.log(e)
                  })
              }
            }
          })
        }
      }
    },
  },
  watch: {
    locale: function (newVal) {
      document.querySelectorAll('.dz-remove').forEach(e => {
        e.innerHTML = newVal === 'ru' ? 'Удалить' : 'Remove'
      })
    }
  },
  destroyed() {
    this.bus.$off('open')
  },
  mounted() {
    this.bus.$on('open', (id) => {
      this.categories = this.responseCategories.filter(e => e.id !== id)
      this.active = true
      this.loading = true

      getCategory(id)
        .then(category => {
          this.form = new Form({
            ru: {
              name: category.translations.find(el => el.locale === 'ru').name,
              description: category.translations.find(el => el.locale === 'ru').description
            },
            en: {
              name: category.translations.find(el => el.locale === 'en').name,
              description: category.translations.find(el => el.locale === 'en').description
            },
            image: category.image ? category.image.id : null,
            category_id: category.parents ? category.parents[0] ? category.parents[0].id : '' : '',
            id: id
          })


          setTimeout(() => {
            console.log(this.$refs)
            if (category.image) {
              let file = {
                size: category.image.size,
                name: category.image.name,
                serverID: category.image.id,
              };

              let url = category.image.uri;
              this.$refs.photoDropZone.manuallyAddFile(file, url);
            }

            if (category.file !== null && category.file !== '') {
              let file = {
                size: 0,
                name: category.file,
                serverName: category.file
              };

              let url = category.fileUrl;
              this.$refs.pdfDropZone.manuallyAddFile(file, url);
            }

            this.loading = false
          }, 500)

        })
        .catch((e) => {
          this.$vs.notification({
            duration: 4000,
            sticky: true,
            position: 'top-right',
            color: 'danger',
            title: this.$t('notification.get.danger.title'),
            text: this.$t('notification.get.danger.text'),
          })

          console.log(e)

          this.active = false

        })


    })


    getCategories()
      .then(r => {
        this.responseCategories = r
      })
  },
  methods: {
    removePDF(name) {
      axios.delete('/api/admin/categories/pdf/' + name)
    },
    update() {
      this.loading = true
      this.form.put('/api/admin/categories/' + this.form.id)
        .then(r => {
          this.$vs.notification({
            duration: 2000,
            sticky: true,
            position: 'top-right',
            color: 'success',
            title: this.$t('notification.update.success.title'),
            text: this.$t('notification.update.success.text'),
          })

          this.form = new Form({
            ru: {
              name: '',
              description: ''
            },
            en: {
              name: '',
              description: ''
            },
            category_id: '',
            file: null,
            image: null,
            id: null
          })
          this.active = false
          this.loading = false
          this.$parent.get()
        })
    }
  }

}
</script>

<style lang="scss">
  .vs-dialog {
    overflow-x: hidden;
    overflow-y: auto;
  }

  .dz-image {
    > img  {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
    }
  }
</style>
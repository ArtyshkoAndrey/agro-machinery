<template>
  <vs-dialog v-model="active" full-screen overflow-hidden>
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

          <template v-if="form.errors.has('ru.name')" #message-danger>
            {{ form.errors.get('ru.name') }}
          </template>
        </vs-input>

        <vs-input v-model="form.en.name" :placeholder="$t('categories.inputs.name')" class="mt-2">
          <template #icon>
            en
          </template>

          <template v-if="form.errors.has('en.name')" #message-danger>
            {{ form.errors.get('en.name') }}
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

          <vs-option key="nullable"
                     :label="''"
                     :value="''"
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
        <div
          class="vs-input-parent vs-input-parent--state-null vs-input-content vs-component--primary align-items-baseline"
        >
          <textarea v-model="form.ru.description" :placeholder="$t('categories.inputs.description')"
                    class="vs-input vs-input--has-icon"
          />
          <span class="vs-input__icon">
            ru
          </span>
          <span v-if="form.errors.has('ru.description')" class="text-danger ps-3">
            {{ form.errors.get('ru.description') }}
          </span>
        </div>

        <div
          class="vs-input-parent vs-input-parent--state-null vs-input-content mt-2 vs-component--primary align-items-baseline"
        >
          <textarea v-model="form.en.description" :placeholder="$t('categories.inputs.description')"
                    class="vs-input vs-input--has-icon"
          />
          <span class="vs-input__icon">
            en
          </span>
          <span v-if="form.errors.has('en.description')" class="text-danger ps-3">
            {{ form.errors.get('en.description') }}
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

        <span v-if="form.errors.has('file')" class="text-danger ps-3">
          {{ form.errors.get('file') }}
        </span>
      </div>
      <div class="col-12 col-md-6 mt-3">
        <h4 class="ps-2">Photo</h4>
        <vue-dropzone id="dropzonePhoto" ref="photoDropZone" :options="dropzoneOptionsPhoto" :use-custom-slot="true">
          <div class="dropzone-custom-content">
            <h3 class="dropzone-custom-title">Drag and drop to upload content!</h3>
            <div class="subtitle">...or click to select a file from your computer</div>
          </div>
        </vue-dropzone>
        <span v-if="form.errors.has('image')" class="text-danger ps-3">
          {{ form.errors.get('image') }}
        </span>
      </div>
    </div>

    <template #footer>
      <div class="row justify-content-center">
        <div class="col-12 col-md-auto">
          <vs-button block size="large" @click="store">
            {{ $t('form.save') }}
          </vs-button>
        </div>
      </div>
    </template>
  </vs-dialog>
</template>

<script>
import { getCategories } from "~/admin/api/categories";
import Vue from "vue";
import Form from "vform";
import { mapGetters } from "vuex";


import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import axios from "axios";
import { removeImage } from "~/admin/api/images"

export default {
  name: "CreateModal",
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
      image: null
    }),
    categories: []
  }),
  computed: {
    ...mapGetters({
      locale: 'lang/locale',
      token: 'auth/token'
    }),

    dropzoneOptionsPDF () {
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
    dropzoneOptionsPhoto () {
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
          this.on('success', function (file, response) {
            console.log(response)
            let image = response.payload.images.pop();
            console.log(image)
            self.form.image = image.id
            file.previewElement.dataset.id = image.id
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
    }
  },
  watch: {
    locale: function (newVal) {
      document.querySelectorAll('.dz-remove').forEach(e => {
        e.innerHTML = newVal === 'ru' ? 'Удалить' : 'Remove'
      })
    }
  },
  mounted() {
    this.bus.$on('open', () => {
      this.active = true
    })

    getCategories()
      .then(r => {
        this.categories = r
      })

    if (this.id) {
      console.log(this.id)
      this.form.category_id = this.id
    }
  },
  destroyed() {
    this.bus.$off('open')
  },
  methods: {
    removePDF (name) {
      axios.delete('/api/admin/categories/pdf/' + name)
    },
    store () {
      this.form.post('/api/admin/categories/')
      .then(r => {
        console.log(r)
        this.$vs.notification({
          duration: 2000,
          sticky: true,
          position: 'top-right',
          color: 'success',
          title: this.$t('notification.store.success.title'),
          text: this.$t('notification.store.success.text'),
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
          image: null
        })

        this.$parent.get()
        this.active = false

      })
    }
  }

}
</script>

<style>
  .vs-dialog {
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
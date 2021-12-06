<template>
  <vs-dialog v-model="active">
    <template #header>
      <h4 class="not-margin">
        {{ $t('products.parts.attributesDialog.title') }}
      </h4>
    </template>

    <div v-if="attributesList.length > 0" class="row gy-2">
      <div v-for="attr in attributesList" :key="attr.id" class="col-12">

        <div class="card">
          <div class="card-body">
            <h6 class="mb-0"
                style="cursor: pointer"
                @click="add(attr)"
            >
              {{ attr.name }}
            </h6>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h6>
              {{ $t('no_items') }}
            </h6>
          </div>
        </div>
      </div>
    </div>
  </vs-dialog>
</template>

<script>
import Vue from 'vue'
import { getAttributes } from "~/admin/api/attributes";

export default {
  name: "AttributesDialog",
  props: {
    bus: {
      type: Vue,
      default: () =>{
        return new Vue()
      },
      required: false
    }
  },
  data: () => ({
    active: false,
    attributesList: [],
    attributes: []
  }),
  destroyed() {
    this.bus.$off('open')
  },
  mounted( ) {
    this.bus.$on('open', (ids = []) => {
      if (ids.length > 0) {
        this.attributesList = this.attributes.filter(i => !ids.includes(i.id))
      } else {
        this.attributesList = this.attributes
      }
      this.active = true
    })

    getAttributes()
    .then(attrs => {
      this.attributes = attrs
    })
  },
  methods: {
    add (attr) {
      this.bus.$emit('addAttribute', attr)
      this.active = false
    }
  }
}
</script>

<style scoped>

</style>
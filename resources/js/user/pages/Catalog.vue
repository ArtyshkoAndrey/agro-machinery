<template>
  <div>
    <transition appear mode="out-in" name="fade">
      <Spinner v-if="loading" key="1" />
      <section v-else id="catalog" key="2">
    <div class="row">
      <div class="col-12 col-sm-10 col-lg-6">
        <h1>Длинное название товара</h1>

        <nav aria-label="breadcrumb mt-3">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="index">Главная</router-link></li>
            <li class="breadcrumb-item"><router-link to="catalog">Каталог</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Категория длинная</li>
          </ol>
        </nav>
      </div>
    </div>
  </section>
    </transition>
  </div>
</template>

<script>
import Spinner from '~/user/components/Spinner'
import axios from 'axios'

export default {
  name: "Catalog",
  components: {
    Spinner
  },
  data: () => ({
    loading: true
  }),
  async mounted () {
    this.$root.$loading.set(30)
    await this.getCategories()
    this.loading = false
  },
  methods: {
    getCategories () {
      axios.get('/api/users/categories?child')
    }
  }
}
</script>

<style scoped>

</style>
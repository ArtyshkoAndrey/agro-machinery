<template>
  <div>
    <transition appear mode="out-in" name="fade">
      <Spinner v-if="loading" key="1" />
      <div v-else key="2">
        <HeaderSection />

        <section id="items-description">
          <div class="row">
            <div class="col-12">
              <h3>{{ $t('index.section_2.title') }}</h3>
            </div>
            <div class="col-11 col-sm-6 col-md-5 col-lg-5">
              <p class="fw-bold color-dark">
                {{ $t('index.section_2.content_1') }}
              </p>
            </div>
            <div class="col-11 col-sm-6 col-md-6 offset-md-1 col-lg-4 offset-lg-3">
              <p class="color-gray">
                {{ $t('index.section_2.content_2') }}
              </p>
            </div>
          </div>
        </section>

        <section class="mt-5">
          <category-info v-for="(category, i) in categories" :key="category.id" :category="category" :reverse="(i + 1) % 2 === 0" />

<!--          <category-info reverse />-->
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
import HeaderSection from "~/user/components/HeaderSection";
import CategoryInfo from "~/user/components/CategoryInfo";
import Spinner from '~/user/components/Spinner';
import axios from "axios";
export default {
  name: "Index",
  components: {
    HeaderSection,
    CategoryInfo,
    Spinner
  },
  metaInfo() {
    return {
      title: 'Главная страница'
    }
  },
  data: () => ({
    loading: true,
    categories: []
  }),
  async mounted () {
    this.$root.$loading.set(30);
    await this.getCategories()
  },
  methods: {
    async getCategories () {
      await axios.get('/api/users/categories', {
        params: {
          to_index: 1,
          max_count: 4
        }
      })
      .then(response => {
        this.categories = response.data.payload.categories
        this.$root.$loading.finish()
        this.loading = false
      })
    }
  }
}
</script>

<style scoped>

</style>
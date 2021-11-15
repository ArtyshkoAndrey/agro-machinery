<template>
  <div>
    <HeaderSection/>

    <section id="items-description">
      <div class="row">
        <div class="col-12">
          <h3>Продукция</h3>
        </div>
        <div class="col-11 col-sm-6 col-md-5 col-lg-4">
          <p class="fw-bold color-dark">
            Лучшие компании Турции по производству сельскохозяйственного оборудования с гарантией
          </p>
        </div>
        <div class="col-11 col-sm-6 col-md-6 offset-md-1 col-lg-4 offset-lg-4">
          <p class="color-gray">
            Плуги и другие виды сельскохозяйственной техники изготавливаются на современных заводах
            с преимущественным использованием роботизированной техники!
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderSection from "~/user/components/HeaderSection";

export default {
  name: "Index",
  components: {
    HeaderSection
  },
  metaInfo() {
    return {
      title: 'Главная страница'
    }
  },
}
</script>

<style scoped>

</style>
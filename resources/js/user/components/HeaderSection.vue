<template>
  <div class="row mx-0">
    <div class="bg-images ">
      <div class="col-12">
        <h2>Добро пожаловать в</h2>
        <h1>AGRO  MACHINERY</h1>
      </div>
      <div class="col-12">
        <p>
          Наша компания, занимающаяся продажей сельхозтехники в городе Алматы, Казахстан, существует для того, чтобы познакомить вас с лучшими брендами сельхозтехники, которые регулярно поступают к нам из Турции.
        </p>
      </div>

      <img class="tractor" src="/images/user/traktor-mobile.svg" alt="traktor">
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderSection"
}
</script>

<style lang="scss" scoped>
  .bg-images {
    width: 100%;
    background-image: url("/images/user/header-section-mobile.jpg");
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    padding: 24px 24px 200px;
    position: relative;

    color: white;

    p {
      color: rgba(255, 255, 255, .6);
      font-size: 12px;
      margin-top: 6px;
      margin-bottom: 0;
    }
    h2 {
      color: #F4B12F;
      font-size: 12px;
      font-weight: normal;
      margin-bottom: 0px;
    }
    h1 {
      font-size: 18px;
      margin-top: 4px;
      margin-bottom: 0;
    }

    img.tractor {
      position: absolute;
      bottom: -50px;
      width: 86%;
      left: 7%;
    }
  }
</style>
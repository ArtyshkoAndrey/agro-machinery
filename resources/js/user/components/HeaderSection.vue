<template>
  <div class="row mx-0">
    <div class="bg-images ">
      <div class="col-12">
        <h2>{{ $t('HeaderSection.great') }}</h2>
        <h1>{{ $t('HeaderSection.title') }}</h1>
      </div>
      <div class="col-12 col-sm-10 col-md-9 col-lg-5">
        <p>
          {{ $t('HeaderSection.content') }} 
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
@import "resources/scss/user/variables";
  .bg-images {
    width: 100%;
    background-color: #1A1819;
    background-image: url("/images/user/vector-header.svg");

    background-size: contain;
    background-position: 11px 80%;
    background-repeat: no-repeat;
    padding: 24px 24px 200px;

    position: relative;
    border-radius: 16px 0;
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

    @media screen and (min-width: 414px) {
      img.tractor {
        bottom: -75px;
        width: 78%;
        left: 19%;
      }
    }

    @media screen and (min-width:   510px) {
      background-position: 63px 105%;

      img.tractor {
        bottom: -110px;
        width: 69%;
        left: 20%;
      }
    }

    @include respond-to (sm) {
      background-size: 91%;
      background-position: 600%;
      padding: 35px 35px 200px;
      p {
        font-size: 16px;
      }
      h1 {
        font-size: 24px;
      }
      h2 {
        font-size: 21px;
      }


      img.tractor {
        bottom: -115px;
        width: 66%;
        left: 33%;
      }
    }

    @include respond-to(md) {
      padding: 77px 41px 200px;
      border-radius: 48px 0;

      p {
        font-size: 18px;
      }
      h1 {
        font-size: 52px;
      }
      h2 {
        font-size: 24px;
      }
      img.tractor {
        bottom: -115px;
        width: 66%;
        left: 35%;
      }
    }

    @include respond-to(lg) {
      padding: 99px 77px 130px;
      border-radius: 70px 0;

      background-size: 93%;
      background-position: 300% 0;

      p {
        margin-top: 15px;
        font-size: 18px;
      }
      h1 {
        margin-top: 0px;
        font-size: 52px;
      }
      h2 {
        font-size: 24px;
      }
      img.tractor {
        bottom: -30px;
        width: 64%;
        left: 35%;
      }
    }

    @include respond-to(xl) {
      background-size: 74%;
      background-position: 103%;

      img.tractor {
        bottom: -51px;
        width: 53%;
        left: 44%;
      }
    }
  }
</style>
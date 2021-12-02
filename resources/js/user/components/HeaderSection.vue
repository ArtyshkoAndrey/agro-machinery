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

      <div class="catalog-link d-flex flex-row flex-nowrap mx-0 p-0 align-items-center">
        <hr>
        <router-link :to="{name: 'catalog'}" class="d-flex align-self-end">
          <span>{{ $t('HeaderSection.catalog') }}</span>

          <iconly name="arrow-right2" type="outline" />
        </router-link>
      </div>

      <img class="tractor" src="public/images/user/traktor-mobile.png" alt="traktor">
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
    background-image: url("/public/images/user/vector-header.svg");

    background-size: contain;
    background-position: 11px 80%;
    background-repeat: no-repeat;
    padding: 24px 24px 180px;

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
      margin-bottom: 0;
    }
    h1 {
      font-size: 18px;
      margin-top: 4px;
      margin-bottom: 0;
    }

    img.tractor {
      position: absolute;
      bottom: -52px;
      width: 92%;
      left: 5%;
    }

    @media screen and (min-width: 360px) {
      img.tractor {
        bottom: -84px;
        width: 92%;
        left: 9%;
      }
    }

    @media screen and (min-width: 400px) {
      img.tractor {
        bottom: -69px;
        width: 80%;
        left: 17%;
      }
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
        bottom: -71px;
        width: 69%;
        left: 26%;
      }
    }

    @media screen and (min-width:   540px) {
      img.tractor {
        bottom: -86px;
        width: 69%;
        left: 29%;
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
      padding: 77px 41px 184px;
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
        bottom: -108px;
        width: 69%;
        left: 33%;
      }
    }

    @include respond-to(lg) {
      padding: 71px 77px 190px;
      border-radius: 70px 0;

      background-size: 93%;
      background-position: 300% 100%;

      p {
        margin-top: 15px;
        font-size: 18px;
      }
      h1 {
        margin-top: 0;
        font-size: 52px;
      }
      h2 {
        font-size: 24px;
      }
      img.tractor {
        bottom: -38px;
        width: 64%;
        left: 41%;
      }
    }

    @include respond-to(xl) {
      background-size: 76%;
      background-position: 108% 152%;

      img.tractor {
        bottom: -51px;
        width: 53%;
        left: 44%;
      }
    }
  }

  .catalog-link {
    position: absolute;
    top: unset;
    margin-top: 15px;

    left: 0;

    > * {
      padding-left: 0;
      padding-right: 0;
    }
    a {
      display: flex;
      margin-left: 7px;
    }
    a, a > svg {
      text-decoration: none;
      color: $color-orange;
      font-weight: 500;

      font-size: 14px;
      line-height: 17px;
    }
    a > svg {
      margin-left: 4px;
    }

    hr {
      margin: 0;
      padding: 0;
      background: $color-orange;
      width: 48px;
      height: 1px;
      opacity: 1;
      display: flex;
    }

    @include respond-to(md) {
      margin-top: 32px;
      a {
        margin-left: 13px;
      }
      a, a > svg {
        font-size: 18px;
        line-height: 21px;
      }
      a > svg {
        margin-left: 11px;
      }
      hr {
        width: 56px;
      }

    }

    @include respond-to(lg) {
      margin-top: 104px;
      a, a > svg {
        font-size: 18px;
        line-height: 21px;
      }

      hr {
        width: 200px;
      }
    }

    @include respond-to(xl) {

      hr {
        width: 246px;
      }
    }
  }

</style>

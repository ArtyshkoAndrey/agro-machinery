<template>
  <div id="menu">
    <nav id="top-menu" class="navbar navbar-expand-lg navbar-light bg-light w-100">
      <div class="container">
        <div class="row justify-content-between w-100">
          <div class="col-auto">
            <router-link class="navbar-brand" to="index">
              <img src="public/images/user/logo.png" alt="logo">
            </router-link>
          </div>
          <div class="col-auto brand-info">
            <div class="row">
              <div class="col-auto">
                <span class="brand-info-title">Пн - Сб  9:00 - 18:00</span>

                <span class="brand-info-description">Воскрессенье - выходной</span>
              </div>
              <div class="col-auto">
                <a class="brand-info-title" href="tel:+7 (705) 764-44-44">+7 (705) 764-44-44</a>
                <span class="brand-info-description">г. Алматы, Кульжинский тракт, 9к</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div id="hr-section-menu" class="container bg-white">
      <div class="row">
        <div class="col-12">
          <hr class="m-0 p-0">
        </div>
      </div>
    </div>
    <SecondMenu />
  </div>
</template>

<script>
import SecondMenu from '~/user/components/SecondMenu'
export default {
  name: "Menu",
  components: {
    SecondMenu
  }
}
</script>

<style lang="scss" scoped>
  @import 'resources/scss/user/variables';
  @import 'resources/scss/user/colors';
  
  hr {
    background: #D3D3D3;
    opacity: 1;
  }

  #hr-section-menu {
    display: none;

    @include respond-to(md) {
      display: block;
    }
  }

  #menu {
    min-width: 100%;
    z-index: 999;
    top: 0;
    left: 0;
    position: fixed;

    nav#top-menu {
      display: none;
      background-color: #ffffff!important;
      .brand-info {
        span, a {
          text-align: right;
          display: block;
          text-decoration: none;
        }

        .brand-info-title {
          font-size: 18px;
          color: $color-dark;
        }
        .brand-info-description {
          font-size: 12px;
          color: $color-gray;
        }
      }
    }


    @include respond-to(md) {
      nav#top-menu {
        display: block;
        padding-top: 54px;
        padding-bottom: 24px;

        .navbar-brand img {
          height: 38px;
          width: auto;
        }
      }
    }

    @include respond-to(xl) {
      nav#top-menu {
        padding-top: 62px;
        padding-bottom: 27px;
        .navbar-brand img {
          height: 56px;
          width: auto;
        }

        .brand-info {
          .brand-info-title {
            font-size: 24px;
            color: $color-dark;
          }
          .brand-info-description {
            font-size: 16px;
            color: $color-gray;
          }
        }
      }


    }
  }

</style>
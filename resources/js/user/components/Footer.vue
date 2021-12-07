<template>
  <footer>
    <div class="container d-none d-md-block">
      <div class="row ">
        <div class="col-lg-3 d-none d-lg-block">
          <img alt="logo" src="/public/images/user/logo.png">
        </div>

        <div class="col-lg-7 offset-lg-2 offset-md-0 align-self-center">
          <ul class="nav">
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'index'}">
                {{ $t('SecondMenu.index') }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'catalog'}">
                {{ $t('SecondMenu.catalog') }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'catalog'}">
                {{ $t('SecondMenu.manufacturers') }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <hr class="d-none d-md-block">

    <div class="container">
      <div class="row d-block d-md-none mb-4">
        <div class="col-8 col-sm-5">
          <img alt="logo" src="/public/images/user/logo.png">
        </div>
      </div>
      <div class="row gy-4">
        <div class="d-none d-md-block d-lg-none col-12 col-md-4 col-lg-3">
          <img alt="logo" src="/public/images/user/logo.png">
        </div>

        <div class="col-12 col-md-4 col-lg-3 offset-md-1 offset-lg-0 weekend">
          <p class="time">
            {{ $t('Menu.date') }}
          </p>
          <p class="day d-none d-md-block">
            {{ $t('Menu.weekend') }}
          </p>
          <p class="day d-block d-md-none">
            {{ $t('Menu.slang') }}
          </p>
        </div>

        <div class="col-12 col-md-4 col-lg-3 offset-lg-1 weekend">
          <a class="time" href="tel:+7 (705) 764-44-44">+7 (705) 764-44-44</a>
          <p class="day">
            {{ $t('Menu.place') }}
          </p>
        </div>

        <div class="col-12 col-md-4 offset-md-4 col-lg-3 offset-lg-1 weekend">
          <a href="mailto:info@agromachinery.kz" class="time">info@agromachinery.kz</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
}
</script>

<style lang="scss" scoped>
@import 'resources/scss/user/_variables.scss';

footer {
  margin-top: 100px;
  padding-top: 24px;
  padding-bottom: 24px;

  position: absolute;
  width: 100%;
  left: 0;


  background: $color-light-gray;
  color: $color-dark;

  hr {
    margin-top: 24px;
    margin-bottom: 24px;

    border: 1px solid #D3D3D3;
  }

  .weekend {
    .time {
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 4px;
      text-decoration: none;
      color: $color-dark;
      display: block;

      @include respond-to(md) {
        margin-bottom: 11px;
        font-size: 18px;
        line-height: 21px;
      }
      @include respond-to(lg) {
        font-size: 24px;
        line-height: 28px;
        margin-bottom: 4px;
      }
    }

    .day {
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 0;
      text-decoration: none;
      color: $color-gray;

      @include respond-to(md) {
        font-size: 12px;
        line-height: 14px;
      }

      @include respond-to(lg) {
        font-size: 16px;
        line-height: 18px;
      }
    }
  }


  img {
    width: 100%;
    height: auto;
  }

  .nav-item {
    a {
      color: $color-dark !important;
      font-size: 18px !important;
      line-height: 21px !important;
    }
  }

  @include respond-to(md) {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  @include respond-to(lg) {
    margin-top: 150px;
  }

}
</style>

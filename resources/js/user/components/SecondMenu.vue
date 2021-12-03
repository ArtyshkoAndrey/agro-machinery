<template>
  <nav id="second-menu" class="navbar navbar-expand-md bg-white navbar-light w-100">
    <div class="container">
      <button class="navbar-toggler"
              type="button"
              id="toggles-menu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link class="navbar-brand d-block d-md-none me-auto ms-2" :to="{name: 'index'}">
        <img src="/public/images/user/Vector.svg" alt="logo">
      </router-link>
      <div class="d-flex time-mobile">
        <p class="mb-0 d-block d-md-none">
          +7 (705) 764-44-44
          <br>
          {{ $t('Menu.date') }}
        </p>
      </div>
      <div id="navbarTogglerDemo02" class="collapse navbar-collapse">
        <ul class="navbar-nav w-100">

          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'index'}">
              {{ $t('SecondMenu.index') }}
            </router-link>
          </li>

<!--          <li class="nav-item">-->
<!--            <router-link class="nav-link" to="#">-->
<!--              {{ $t('SecondMenu.about') }}-->
<!--            </router-link>-->
<!--          </li>-->

          <li class="nav-item dropdown">
            <a id="dropdownMenuButton1" href="#" type="" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              {{ $t('SecondMenu.catalog') }}
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <div class="container">
                <div class="row gy-2 gy-md-4">
                  <div v-for="category in categories" :key="category.id" class="col-md-6 category-item-menu">
                    <router-link :to="{name: 'catalog', query: { category: category.id }}">
                      {{ category.translations.find(e => e.locale === locale).name }}
                      <span class="badge bg-secondary">{{ category.countProducts }}</span>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a id="dropdownMenuButton2" href="#" type="" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              {{ $t('SecondMenu.manufacturers') }}
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
              <div class="container">
                <div class="row gy-2 gy-md-4">
                  <div v-for="manufacturer in manufacturers" :key="manufacturer.id" class="col-md-6 category-item-menu">
                    <router-link :to="{name: 'catalog', query: { category: manufacturer.id }}">
                      {{ manufacturer.name }}
                      <span class="badge bg-secondary">{{ manufacturer.products_count }}</span>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </li>

<!--          <li class="nav-item">-->
<!--            <router-link class="nav-link" to="#">-->
<!--              {{ $t('SecondMenu.news') }}-->
<!--            </router-link>-->
<!--          </li>-->

<!--          <li class="nav-item me-lg-auto">-->
<!--            <router-link class="nav-link" to="#">-->
<!--              {{ $t('SecondMenu.contacts') }}-->
<!--            </router-link>-->
<!--          </li>-->

          <li class="nav-item ms-lg-auto mt-5 mt-md-0">
            <button class="nav-link bg-transparent border-0" form @click="setLocale(tempLocale)">
              {{ locales[$i18n.locale] }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap'
import { mapGetters } from 'vuex'
import { loadMessages } from '~/user/plugins/i18n'
import axios from 'axios'

export default {
  name: "SecondMenu",
  data: () => ({
    nav: true,
    myCollapse: null,
    bsCollapse: null,
    collapse: null,
    flagWidth: false,
    col: null,
    categories: [],
    manufacturers: []
  }),
  computed: {
    ...mapGetters({
      locale: 'lang/locale',
      locales: 'lang/locales'
    }),
    tempLocale () {
      return this.locale === 'ru' ? 'en' : 'ru'
    }
  },
  mounted() {
    this.setInitialListeners()
    this.setInitialToggler()

    window.addEventListener('resize', () => {
      this.getUpdateWidth()

      if (this.flagWidth === false) {
        this.getDesktopMenu()

        this.getScroll()
      }
    });

    this.getUpdateWidth()

    let dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
    let dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
      return new bootstrap.Dropdown(dropdownToggleEl, {
        autoClose: true
      })
    })

    let myDropdown = document.getElementById('dropdownMenuButton1')
    myDropdown.addEventListener('show.bs.dropdown', function () {
      console.log('show')
    })
    myDropdown.addEventListener('hidden.bs.dropdown', function () {
      console.log('hide')
    })

    this.getCategories()
    this.getManufacturers()
  },
  methods:{
    getScroll () {
      $('body').css('overflow', 'auto')
    },
    hideScroll () {
      $('body').css('overflow', 'hidden')
    },
    setInitialListeners () {
      this.myCollapse = $('#navbarTogglerDemo02')
      this.bsCollapse = new bootstrap.Collapse(this.myCollapse, {
        toggle: false
      })

      this.col = document.getElementById('navbarTogglerDemo02')
    },
    setInitialToggler () {
      this.myCollapse.on("click", "a:not([data-bs-toggle])", null, () => {
        if (this.flagWidth) {
          this.bsCollapse.hide();
          this.nav = true
        }
      });

      this.col.addEventListener('hide.bs.collapse', () => {
        if (this.flagWidth) {
          this.nav = true
          this.getScroll()
        }
      })
      this.col.addEventListener('show.bs.collapse', () => {
        if (this.flagWidth) {
          this.nav = false
          this.hideScroll()
        }
      })

      $('#toggles-menu').on('click',  () => {
        if (this.flagWidth) {
          if (this.nav) {
            this.bsCollapse.show()
          } else {
            this.bsCollapse.hide()
          }
        }
      })
    },
    getDesktopMenu () {
     this.nav = true
     this.bsCollapse.hide()
    },
    getUpdateWidth () {
      this.flagWidth = window.innerWidth < 768;
    },
    setLocale (locale) {
      if (this.$i18n.locale !== locale) {
        loadMessages(locale)
        this.$store.dispatch('lang/setLocale', { locale })
      }
    },
    getCategories () {
      axios.get('/api/users/categories/menu')
      .then(r => {
        this.categories = r.data.payload.categories
        console.log('categories in menu', r.data.payload.categories)
      })
    },
    getManufacturers () {
      axios.get('/api/users/manufacturers', {
        params: {
          has_products_count: true
        }
      })
        .then(r => {
          this.manufacturers = r.data.payload.manufacturers
          console.log('manufacturers in menu', r.data.payload.manufacturers)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'resources/scss/user/colors';
  @import 'resources/scss/user/variables';


  #second-menu {

    @include respond-up(md) {
      #navbarTogglerDemo02 {
        > .navbar-nav {
          height: calc(100vh - 58px);
          overflow: auto;
        }
      }
    }
    .time-mobile {
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: $color-dark;
    }
    .container {
      //border-bottom: 1px solid #D3D3D3;
      //border-width: medium;
    }

    .dropdown {
      a.dropdown-toggle {
        outline: none !important;

        &:after {
          border: solid black !important;
          border-width: 0 2px 2px 0 !important;
          display: inline-block !important;
          padding: 4px !important;
          transform: rotate(45deg);
          transition: 0.3s transform, 0.2s border;
        }

        &.show {
          &:after {
            transform: rotate(225deg);
            vertical-align: 0;
            border: solid $color-orange !important;
            border-width: 0 2px 2px 0 !important;
          }
        }
      }
      .dropdown-menu {
        border-radius: 0;

        padding: 0;
        background: $color-light-gray;
        border: none;
        .container {
          padding: 0;
          background: $color-light-gray;
          > .row {
            padding-bottom: 12px;
            background: $color-light-gray;

            margin: 0;
        }
      }
      .category-item-menu {
        a {
          text-decoration: none;
          color: $color-dark;
          font-weight: normal;
          font-size: 16px;
          line-height: 19px;
          transition: .3s color;
          .badge {
            background: #F1F1F1 !important;
            border-radius: 6px !important;
            color: $color-dark !important;
            transition: 0.3s;
            font-weight: normal;
            padding: 6px;
            margin-left: 12px;
            font-size: 18px;
            line-height: 18px;
          }
          &:hover {
            color: $color-orange;
            .badge {
              background: #1A1819 !important;
              color: $color-orange !important;
            }
          }
        }
      }
    }
  }

    @include respond-to(md) {
    border-bottom: none;

    .dropdown {
      position: unset !important;

      .dropdown-menu {
        background: #FFFFFF;
        .container {
          background: #FFFFFF;
          padding-right: var(--bs-gutter-x, 0.75rem);
          padding-left: var(--bs-gutter-x, 0.75rem);

          > .row {
            background: #FFFFFF;
            margin-right: calc(-0.5 * var(--bs-gutter-x));
            margin-left: calc(-0.5 * var(--bs-gutter-x));
        }
      }

      left: 0 !important;
      right: 0 !important;
      margin-top: 0;

      border: none;
      padding: 24px;

      .category-item-menu {
        a {
          text-decoration: none;
          color: $color-dark;
          font-size: 18px;
          line-height: 21px;
          transition: .3s color;
          &:hover {
            color: $color-orange
          }
        }
      }
    }
  }
}

    li {
      a.nav-link {
        color: $color-dark !important;
        opacity: 1;

        &:hover {
          color: $color-dark !important;
        }
      }
    }
    .navbar-toggler {
      border: none;
      border-radius: 0;

      .navbar-toggler-icon {
        background-image: url('/public/images/user/burber-menu.svg') !important;
        height: 32px;
        width: 32px;
      }
    }
  }
</style>

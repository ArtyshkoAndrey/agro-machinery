<template>
  <nav id="second-menu" class="navbar navbar-expand-md bg-white navbar-light w-100">
    <div class="container">
      <button class="navbar-toggler"
              type="button"
              id="toggles-menu"

      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarTogglerDemo02" class="collapse navbar-collapse">
        <ul class="navbar-nav w-100">

          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'index'}">
              {{ $t('SecondMenu.index') }}
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="#">
              {{ $t('SecondMenu.about') }}
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'catalog'}">
              {{ $t('SecondMenu.catalog') }}
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="#">
              Производители
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="#">
              {{ $t('SecondMenu.news') }}
            </router-link>
          </li>

          <li class="nav-item me-lg-auto">
            <router-link class="nav-link" to="#">
              {{ $t('SecondMenu.contacts') }}
            </router-link>
          </li>

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

export default {
  name: "SecondMenu",
  data: () => ({
    nav: true,
    myCollapse: null,
    bsCollapse: null,
    collapse: null,
    flagWidth: false
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
      }
    });

    this.getUpdateWidth()
  },
  methods:{
    setInitialListeners () {
      this.myCollapse = $('#navbarTogglerDemo02')
      this.bsCollapse = new bootstrap.Collapse(this.myCollapse, {
        toggle: false
      })

      this.col = document.getElementById('navbarTogglerDemo02')
    },
    setInitialToggler () {
      this.myCollapse.on("click", "a:not([data-toggle])", null, () => {
        if (this.flagWidth) {
          this.bsCollapse.hide();
          this.nav = true
        }
      });

      this.col.addEventListener('hide.bs.collapse', () => {
        if (this.flagWidth) {
          this.nav = true
        }
      })
      this.col.addEventListener('show.bs.collapse', () => {
        if (this.flagWidth) {
          this.nav = false
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
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'resources/scss/user/colors';
  @import 'resources/scss/user/variables';


  #second-menu {
    .container {
      //border-bottom: 1px solid #D3D3D3;
      //border-width: medium;
    }

    @include respond-to(md) {
      border-bottom: none;
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

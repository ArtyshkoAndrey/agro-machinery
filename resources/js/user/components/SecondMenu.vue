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
        <ul class="navbar-nav">

          <li class="nav-item">
            <router-link class="nav-link" to="index">
              Главная
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="#">
              О нас
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="#">
              Каталог
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="#">
              Производители
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="#">
              Новости
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="#">
              Контакты
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap'
export default {
  name: "SecondMenu",
  data: () => ({
    nav: true,
    myCollapse: null,
    bsCollapse: null,
    collapse: null,
    flagWidth: false
  }),
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
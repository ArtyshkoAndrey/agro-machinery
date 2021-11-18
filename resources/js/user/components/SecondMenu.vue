<template>
  <nav id="second-menu" class="navbar navbar-expand-md bg-white navbar-light w-100">
    <div class="container">
      <div id="navbarTogglerDemo02" class="collapse navbar-collapse">
        <ul class="navbar-nav">

          <li class="nav-item">
            <router-link class="nav-link" to="#">
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
export default {
  name: "SecondMenu"
}
</script>

<style lang="scss" scoped>
  @import 'resources/scss/user/_colors.scss';

  li {
    a.nav-link {
      color: $color-dark !important;
      opacity: 1;

      &:hover {
        color: $color-dark !important;
      }
    }
  }
</style>
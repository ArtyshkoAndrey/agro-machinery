<template>
  <vs-sidebar
    v-if="user"
    v-model="active"
    fixsed
    hover-expand
    open
    reduce
  >
    <template #logo>
      <!-- ...img logo -->
    </template>

    <vs-sidebar-item v-for="item in items.links"
                     :id="item.name"
                     :key="item.name"
                     :to="item.path"
    >
      <template #icon>
        <box-icon :name="item.icon.name"
                  :type="item.icon.type"
                  :color="color"
        />
      </template>
      {{ $t(item.title) }}
    </vs-sidebar-item>
  </vs-sidebar>
</template>

<script>
import items from '~/admin/plugins/menu-items'
import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  data: () => ({
    active: 'dashboard.index',
    color: 'white',
    items
  }),
  computed: {
    ...mapGetters({
      user: 'auth/user',
      theme: 'theme/dark'
    })
  },
  watch: {
    theme: function (newVal) {
      if (newVal) {
        this.color = 'white'
      } else {
        this.color = 'black'
      }
    }
  },
  mounted () {
    const unwatch = this.$watch(
      () => this.$route,
      (route) => {
        if (typeof this.$route.matched[1] !== 'undefined') {
          this.active = this.$route.matched[1].alias[0]
        } else {
          this.active = route.name
        }
        // unwatch()
      })

    if (this.theme) {
      this.color = 'white'
    } else {
      this.color = 'black'
    }

  }
}
</script>

<style scoped>

</style>

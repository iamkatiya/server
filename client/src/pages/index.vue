<template>
  <div>
    <header-nav />
    <banner />
    <router-view />
    <extra />
    <footer-nav />
  </div>
</template>

<script>
import headerNav from '../components/header.vue'
import banner from '../components/banner.vue'
import extra from '../components/extra.vue'
import footerNav from '../components/footer.vue'

export default {
  name: 'Index',
  components: {
    headerNav,
    banner,
    extra,
    footerNav
  }
}
</script>

<style>

</style>

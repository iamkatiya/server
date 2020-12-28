<template>
  <div>
    <header-nav />
    <about-banner />
    <about-content />
    <extra />
    <footer-nav />
  </div>
</template>

<script>
import headerNav from '../components/header.vue'
import footerNav from '../components/footer.vue'
import aboutBanner from '../components/about-banner'
import aboutContent from '../components/content'
import extra from '../components/extra.vue'

export default {
  name: 'About',
  components: {
    headerNav,
    footerNav,
    aboutBanner,
    aboutContent,
    extra
  }
}
</script>

<style>

</style>

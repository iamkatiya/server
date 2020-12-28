<template>
  <div>
    <header-nav />
    <services />
    <footer-nav />
  </div>
</template>

<script>
import headerNav from '../components/header.vue'
import footerNav from '../components/footer.vue'
import services from '../components/servises'

export default {
  name: 'Services',
  components: {
    headerNav,
    footerNav,
    services
  }
}
</script>

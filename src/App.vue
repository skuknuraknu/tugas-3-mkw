<!-- eslint-disable prettier/prettier -->
<template>
  <div id="app">
      <Preloader v-if="isLoading" />
      <router-view>

      </router-view>
      <BackToTop />
  </div>
</template>
<!-- eslint-disable prettier/prettier -->

<script >
import Preloader from './components/Layouts/Preloader'
import BackToTop from './components/Layouts/BackToTop'

export default {
  name: 'App',
  components: {
      Preloader,
      BackToTop
  },
  data() {
      return {
          isLoading: true
      }
  },
  mounted() {
      setTimeout(() => {
          this.isLoading = false
      }, 2000)
  }
}
</script>
<style lang="scss">
// Import Main styles for this application
@import 'styles/style';
</style>

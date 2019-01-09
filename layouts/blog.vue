<template>
  <div 
    :class="'page-' + this.$route.name" 
    class="inner" 
    :key="'dynamic-content'">
    <a 
      class="anchor" 
      id="top"/>
    <Navigation/>
    <div class="grid-container">
      <nuxt/>
    </div>
    <Subscription/>
    <Footer/>
    <no-ssr>
      <cookie-law theme="0xcert">
        <div slot="message">
          This website uses cookies to ensure you get 
          the best experience on our website. 
          For more information, <nuxt-link to="/cookie-policy">click here</nuxt-link>
        </div>
      </cookie-law> 
    </no-ssr>
  </div>
</template>

<script>
let vueScroll = require('vue-scrollto')
import Navigation from '~/components/Navigation'
import Footer from '~/components/Footer'
import Subscription from '~/components/Subscription'

export default {
  scrollToTop: true,
  components: {
    Navigation,
    Footer,
    Subscription
  },

  mounted() {
    vueScroll.scrollTo('#__nuxt')
    twttr.widgets.load()
  }
}
</script>

<style lang="scss" scoped>
@include breakpoint(medium) {
  .inner {
    min-height: 80vh;
    padding-top: 8rem;
  }
}
</style>

<template>
  <div 
    :class="'page-' + this.$route.name" 
    class="inner">
    <a 
      class="anchor" 
      id="top"/>
    <Navigation/>
    <div class="grid-container">
      <div class="grid-x align-center">
        <div class="small-12 medium-10 large-8 cell margin-bottom-3">
          <nuxt/>
        </div>
      </div>
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
import Navigation from '~/components/Navigation'
import Footer from '~/components/Footer'
import Subscription from '~/components/Subscription'

export default {
  scrollToTop: true,
  components: {
    Navigation,
    Footer,
    Subscription
  }
}
</script>

<style lang="scss" scoped>
@include breakpoint(medium) {
  .inner {
    min-height: 80vh;
    padding-top: 12rem;
  }
}
</style>

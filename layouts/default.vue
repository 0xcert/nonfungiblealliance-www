<template>
  <div :class="'page-' + this.$route.name">
    <Navigation />
    <nuxt />
    <Footer />
    <no-ssr>
      <cookie-law theme="0xcert">
        <div slot="message">
          This website uses cookies to ensure you get 
          the best experience on our website. 
          For more information, <nuxt-link to="/cookie-policy">
            click here
          </nuxt-link>
        </div>
      </cookie-law> 
    </no-ssr>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation'
import Footer from '~/components/Footer'

export default {
  scrollToTop: true,
  components: {
    Navigation,
    Footer
  }
}
</script>

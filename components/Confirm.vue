<template>
  <section class="introduction">
    <div class="grid-container">
      <div class="grid-x grid-margin-x">
        <div class="small-12 medium-6 large-5 cell">
          <transition 
            mode="out-in" 
            name="layout">
            <div 
              v-if="state === 'loading'" 
              class="mb-7">
              <p>Subscribing, just a moment ...</p>
            </div>

            <div 
              v-if="state === 'success' " 
              class="mb-7" 
              key="confirm">
              <h3 class="">Thank you for applying!</h3>
              <p>We will be in touch soon.</p>
            </div>

            <div 
              v-if="state === 'error'" 
              class="mb-7" 
              key="error">
              <h3>Dang!</h3>
              <p>Something went wrong. Try again later or contact us on: 
              <a href="mailto:info@nonfungiblealliance.org">info@nonfungiblealliance.org</a></p>
              <nuxt-link 
                to="/members/apply" 
                class="button hollow white"> &larr; Try again</nuxt-link>
            </div>
          </transition>
        </div>

        <div class="cell show-for-medium medium-6 large-6 large-offset-1 align-bottom position-relative">
          <img 
            class="illustration" 
            src="/images/top-illustration.svg" 
            alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { handleServerError } from '~/mixins/handleServerError'
import vueScroll from 'vue-scrollto'

export default {
  data() {
    return {
      state: 'loading',
      data: {
        requestToken: ''
      }
    }
  },
  methods: {
    submit: async function() {
      try {
        if (this.data.requestToken) {
          await this.$axios.post('/newsletters', this.data)
          this.state = 'success'
        }
      } catch (err) {
        this.state = 'error'
        this.handleServerError(err)
        console.log('Error:' + err)
      }
    }
  },
  mounted() {
    this.data.requestToken = this.$route.query.requestToken
    this.submit()
  }
}
</script>


<style lang="scss" scoped>
.introduction {
  align-items: flex-end;
  display: flex;
  padding-bottom: 6rem;
  color: $white;

  .grid-container {
    width: 100%;
  }

  p > a {
    color: $primary;
  }

  h1 {
    font-weight: 800;
    line-height: 1.3;

    @include breakpoint(medium) {
      margin-top: 1rem;
      font-size: 3rem;
    }
  }

  @include breakpoint(medium) {
    .intro {
      max-width: 550px;
      font-size: 20px;
    }
  }

  @include breakpoint(large) {
    min-height: 580px;
  }
}

.illustration {
  position: absolute;

  @include breakpoint(large) {
    bottom: -11rem;
  }
}
</style>

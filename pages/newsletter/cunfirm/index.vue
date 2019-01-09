
<template>
  <div class="whitelist grid-container">
    <div class="grid-x align-center min-height">
      <div v-if="state == 0">
        <Loader />
        <p>Subscribing, just a moment ...</p>
      </div>
      <div 
        v-if="state == 1" 
        class="text-center">
        <h2>
          Congratulations!
        </h2>
        <p>
          You have been successfully subscribed!
          <br> Stay tuned for next updates!
        </p>
        <p><strong>The 0xcert team</strong></p>
        <p>
          <nuxt-link 
            to="/" 
            class="button primary margin-top-3">Back to home page </nuxt-link>
        </p>
      </div>

      <div 
        v-if="state == 2" 
        class="text-center">
        <h2>
          Invalid confirmation link
        </h2>
        <p>
          This confirmation link is no longer valid.
        </p>
        <p><strong>The 0xcert team</strong></p>
        <p>
          <nuxt-link 
            to="/" 
            class="button primary margin-top-3">Back to home page </nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: 0,
      data: {
        requestToken: ''
      }
    }
  },
  mounted() {
    this.data.requestToken = this.$route.query.requestToken
    this.submit()
  },
  methods: {
    submit: function() {
      if (this.data.requestToken) {
        this.$axios
          .post('/subscriptions', this.data)
          .then(response => {
            this.state = 1
          })
          .catch(error => {
            console.log(error)
            this.state = 2
          })
      } else {
        this.state = 2
      }
    }
  }
}
</script>

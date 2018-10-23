<template>
  <div class="error-page">
    <div class="grid-container">
      <div class="grid-x offset-top content">
        <div class="small-12 medium-8 medium-offset-1 large-6 cell">

          <div v-if="error.statusCode === 404">
            <h1>Page not found</h1>
            <p>
              The page you are looking for, does not exists. 
            </p>
            <nuxt-link 
              to="/" 
              class="button primary margin-top-1">Go to home page</nuxt-link>
          </div>

          <div v-else>
            <h1>An error occurred</h1>
            <p>
              This usually happens, if you are on the site while it is being updated. <br>
              Just refresh the page and everything should be working fine.
            </p>
          </div>     
        </div>  
      </div>   
    </div>
  </div>  
</template>

<script>
export default {
  props: {
    error: {
      type: String,
      default: ''
    }
  },
  methods: {
    refresh: function() {
      this.$router.go({
        path: this.$router.path,
        query: {
          t: +new Date()
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.error-page {
  padding-bottom: 6rem;

  @include breakpoint(medium) {
    background: url('/images/header-illustration.svg') no-repeat;
    min-height: 730px;
    height: 65vh;
    background-size: 60%;
    background-position: right bottom;
  }

  @include breakpoint(large) {
    background-size: 680px;
    background-position: right 100px;
  }

  .content {
    display: flex;
    flex-flow: row wrap;
    min-height: 50vh;
    align-items: center;
  }
}
</style>

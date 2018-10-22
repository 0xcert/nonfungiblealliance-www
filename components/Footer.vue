<template lang="html">
  <footer class="mb-4">
    <div class="grid-container position-relative">
      <div class="grid-x">
        <div class="small-12 text-center medium-4 cell mb-2">
          <nuxt-link v-for="item in menu" :key="item.id" :to="item.url" v-html="item.name" class="link"/>
        </div>
        <div class="small-12 text-center medium-4 cell mb-2">
          Powered by Oxcert
        </div>
        <div class="small-12 social text-right medium-4 cell mb-2">
          <SocialLinks :color="'dark'"/>
       </div>
      </div>
      <a href="" class="go-up" v-scroll-to="{el: '#__nuxt' }">
        <img src="/images/up.svg" alt="Back to the top">
      </a>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        menu: [
          {name: "Home", url: "/"},
          {name: "Members", url: "/members"},
          {name: "Resources", url: "/resources"},
          {name: "Blog", url: "/news"},
          {name: "Faq", url: "/faq"},
        ]
      }
    },
    computed: {
      thisYear: function () {
        return new Date().getFullYear()
      }
    }
  }
</script>

<style lang="scss">

footer {
  background: url('/images/footer-bg.png');
  padding: 12rem 0 5rem;
  margin-top: auto;

  @include breakpoint(medium) {
    padding: 10rem 0 1rem;
  }

  h5 {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul {
    margin: 0;

    li {
      list-style: none;
    }
  }

  .white .text-color {
    fill: $white;
  }
}

.copyright {
  font-family: 'Roboto', Arial, sans-serif;
  text-align: center;
  font-size: 14px;
  color: $gray;
}

.go-up {
  position: absolute;
  bottom: -2rem;
  right: 49%;
}

.social {
  @include breakpoint(medium) {
    flex-basis: 30% !important;
  }
}

</style>

<template lang="html">
<div>
  <footer>
    <div class="grid-container position-relative">
      <div class="grid-x">
        <div class="small-12 text-center medium-text-left medium-auto cell margin-bottom-2">
          <svgLogo class="logo" />
        </div>
        <div class="small-12 text-center  medium-text-left medium-auto cell margin-bottom-2">
          <h5>0xcert</h5>
          <ul>
            <li><nuxt-link to="/news" class="link" v-scroll-to="{el: '#__nuxt' }">News</nuxt-link></li>
            <li><nuxt-link to="/#platform" class="link" v-scroll-to="{el: '#platform'}">Platform</nuxt-link></li>
            <li><nuxt-link to="/#usecases" class="link" v-scroll-to="{el: '#usecases'}">Use cases</nuxt-link></li>
            <li><nuxt-link to="/#crowdsale" class="link" v-scroll-to="{el: '#crowdsale'}">Crowdsale</nuxt-link></li>
            <li><nuxt-link to="/roadmap" class="link" v-scroll-to="{el: '#__nuxt'}">Roadmap</nuxt-link></li>
            <li><nuxt-link to="/jobs" class="link" v-scroll-to="{el: '#__nuxt'}">Jobs</nuxt-link></li>
        </ul>
        </div>
        <div class="small-12 text-center medium-text-left medium-auto cell margin-bottom-2">
          <h5>Docs</h5>
          <ul>
            <li><a href="/whitepaper.pdf" target="_blank">Whitepaper</a></li>
            <li><a href="/technical-paper.pdf" target="_blank">Technical paper</a></li>
            <li><a href="https://github.com/0xcert" target="_blank">Github</a></li>
          </ul>
        </div>
        <div class="small-12 text-center medium-text-left medium-auto cell margin-bottom-2">
          <h5>Legal</h5>
          <ul>
            <!-- <li><a href="" target="_blank">Terms of sale</a></li> -->
            <li><a href="/privacypolicy.pdf" target="_blank">Privacy policy</a></li>
            <li><a href="/0xcert-terms-and-conditions.pdf" target="_blank">Terms and conditions</a></li>
            <li><nuxt-link to="/cookie-policy">Cookie policy</nuxt-link></li>
            <li><nuxt-link to="/disclaimer">General disclaimer</nuxt-link></li>
          </ul>
        </div>
        <div class="small-12 social text-center medium-text-left medium-shrink cell margin-bottom-2">
            <h5>Follow us</h5>
            <p>Keep up with the latest news.</p>
            <SocialLinks :color="'dark'" :class="'margin-bottom-2'"/>
       </div>
      </div>
      <a href="" class="go-up" v-scroll-to="{el: '#__nuxt' }">
        <img src="/images/up.svg" alt="Back to the top">
      </a>
    </div>
  </footer>

  <div class="grid-container">
    <div class="grid-x margin-top-3 margin-bottom-3 align-center-middle text-center">
      <div class="cell copyright">
        Copyright {{ thisYear }} &copy; <a href="https://0xcert.org">0xcert.org</a>
      </div>
    </div>
  </div>

</div>
</template>

<script>
  export default {
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
    padding: 16rem 0 5rem;
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
  bottom: -5.8rem;
  right: 49%;
}

.social {
  @include breakpoint(medium) {
    flex-basis: 30% !important;
  }
}

</style>

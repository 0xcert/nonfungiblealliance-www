<template lang="html">
  <div :class="['social-links', color ]">
    <a 
      :href="social.telegram" 
      target="_blank" 
      title="0xcert on Telegram"
    ><svgTelegram :class="'icon-color'" /></a>
    <a 
      :href="social.twitter" 
      target="_blank" 
      title="0xcert on Twitter"
    ><svgTwitter :class="'icon-color'" /></a>
    <a 
      :href="social.medium" 
      target="_blank" 
      title="0xcert on Medium"
    ><svgMedium :class="'icon-color'" /></a>
    <a 
      :href="social.facebook" 
      target="_blank" 
      title="0xcert on Facebook"
    ><svgFacebook :class="'icon-color'" /></a>
    <a 
      :href="social.linkedin" 
      target="_blank" 
      title="0xcert on LinkedIm"
    ><svgLinkedin :class="'icon-color'" /></a>
    <a 
      :href="social.youtube" 
      target="_blank" 
      title="0xcert on Youtube"
    ><svgYoutube :class="'icon-color'" /></a>
  </div>
</template>

<script>
import svgTwitter from '~/assets/img/twitter.svg'
import svgLinkedin from '~/assets/img/linkedin.svg'
import svgFacebook from '~/assets/img/facebook.svg'
import svgTelegram from '~/assets/img/telegram.svg'
import svgMedium from '~/assets/img/medium.svg'
import svgYoutube from '~/assets/img/youtube.svg'

export default {
  data() {
    return {
      social: {
        twitter: 'https://www.twitter.com/0xcert',
        facebook: 'http://fb.me/0xcert',
        linkedin: 'https://www.linkedin.com/company/0xcert/',
        medium: 'https://medium.com/0xcert',
        telegram: 'https://t.me/zeroxcert',
        youtube: 'https://www.youtube.com/channel/UCgWRwKYt01cmaBvDozpDnBg'
      }
    }
  },
  components: {
    svgLinkedin,
    svgFacebook,
    svgTwitter,
    svgTelegram,
    svgMedium,
    svgYoutube
  },
  props: {
    color: {
      type: String,
      default: 'white'
    }
  }
}
</script>

<style lang="scss">
.social-links {
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  justify-content: center;

  @include breakpoint(medium) {
    justify-content: flex-start;
  }

  a {
    display: inline-flex;
    padding: 1rem;
    align-self: center;

    .icon-color {
      fill: $white;
      max-height: 18px;

      &.github {
        max-height: 24px !important;
      }

      &.bitcointalk {
        max-height: 24px !important;
      }

      &.kakao {
        max-height: 24px !important;

        .text {
          fill: $base;
        }
      }
    }
  }

  &.white {
    justify-content: center;
    margin: 2.5rem 0 0;

    a:hover {
      .icon-color {
        fill: $primary;
      }
    }
  }

  &.horizontal {
    justify-content: center;
    margin: 2rem 0;
    background: rgba($base, 0.7);

    @include breakpoint(medium) {
      position: fixed;
      left: 0;
      top: 26vh;
      flex-flow: column wrap;
      z-index: 5;

      a {
        display: flex;
        padding: 0.6rem 0.3rem;

        &:hover {
          .icon-color {
            fill: $primary;
          }
        }
      }
    }
  }

  &.dark {
    a {
      display: flex;
      background: $base;
      border-radius: 60px;
      padding: 5px 2px;
      width: 42px;
      height: 42px;
      align-items: center;
      justify-content: center;
      margin-right: 1rem;
      margin-bottom: 1rem;

      .icon-color {
        max-height: 18px;
      }

      &:hover {
        background: $primary;
      }
    }
  }
}
</style>

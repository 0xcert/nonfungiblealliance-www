<template>
  <div class="video-links">
    <div class="grid-container">
      <div class="grid-x">
        <div class="small-12 medium-6 col text-center position-relative">
          
          <h3>Explainer video</h3>
          <div class="responsive-embed widescreen">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/yptxQdD6Xbo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </div>

        <div class="small-12 medium-6 col text-center">
          <h3>Quick links</h3>
          <div class="grid-x grid-margin-y align-center margin-top-1">
            <a href="/whitepaper.pdf" target="_blank" class="small-5 medium-3 col link-box">
              <img src="/images/icon-whitepaper.svg" alt="Whitepaper" class="icon">Whitepaper
            </a>
            <a href="/technical-paper.pdf" target="_blank" class="small-5 medium-3 col link-box">
              <img src="/images/icon-technical-paper.svg" alt="Light paper" class="icon lightpaper">Technical paper
            </a>
            <nuxt-link to="/0xcert_lightpaper.pdf" target="_blank" class="small-5 medium-3 col link-box">
              <img src="/images/icon-lightpaper.svg" alt="Light paper" class="icon lightpaper">Lightpaper
            </nuxt-link>
            <nuxt-link to="/faq" class="small-5 medium-3 col link-box">
              <img src="/images/icon-faq.svg" alt="Light paper" class="icon">FAQ
            </nuxt-link>
            <a href="https://github.com/0xcert" target="_blank" class="small-5 medium-3 col link-box">
              <img src="/images/icon-github.svg" alt="Github" class="icon">Github
            </a>
            <!-- <nuxt-link to="/bounty" class="small-5 medium-3 col link-box">
              <img src="/images/icon-bounty.svg" alt="Bounty Program" class="icon">Bounty
            </nuxt-link> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
  .video-links {
    padding: 2rem 0;

    h3 {
      margin-bottom: 47px;
    }

    .link-box {
      display: flex;
      flex-flow: column;
      font-size: 16px;
      color: #000000;
      text-align: center;
      padding: 25px 10px;
      background: #FFFFFF;
      border: 1px solid rgba(125,130,133,0.05);
      box-shadow: $box-shadow-light;
      border-radius: 5px;
      margin: 5px;

      &:hover {
        text-decoration: none;
        color: $primary;
        transform: translateY(2px);
        box-shadow: 0 2px 12px 0 rgba($primary, 0.1);
      }

      .icon {
        display: block;
        margin-bottom: 15px;

        &.lightpaper {
          margin-top: 4px;
        }
      }
    }

    @include breakpoint(medium) {
      .shade {
        position: absolute;
        left: -3rem;
        top: -3rem;
        content: '';
        background: $grey-bg;
        border-radius: 0 8px 8px 0;
        height: 350px;
        width: 115%;
        z-index: -1;
      }
    }
  }

</style>

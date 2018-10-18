<template lang="html">
<div>
  <a id="partners" name="partners" class="anchor"/>
  <div class="partners grid-container">
    <h2>Recently joined</h2>
    <div class="logos grid-x align-center">
      <div v-for="item in items" :key="item.id" class=" small-6 medium-4 large-3 cell align-self-middle">
        <a v-if="item.url" :href="item.url" class="logo" target="_blank">
          <img :src="item.logo" />
        </a>
        <div v-else class="logo">
          <img :src="item.logo" />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { logo: '/partners/wanchain.png',
          url: '/news/0xcert-and-wanchain-strategic-alliance'
        },
        { logo: '/partners/eu.jpg',
          url: '/news/partnership-for-non-fungible-future-education'
        },
        { logo: '/partners/continue-capital.png'},
        { logo: '/partners/vrf-capital.png'},
        { logo: '/partners/jove-capital.jpg'},
        { logo: '/partners/origin-capital.png'},
        { logo: '/partners/k4all.png'},
        { logo: '/partners/ey@2x.png'},
        { logo: '/partners/ijs@2x.png'},
        { logo: '/partners/trust-wallet.png'},
        { logo: '/partners/fengshui-capital.png'},
        { 
          logo: '/partners/hashmark.png',
          url: 'http://hashmark.io'
          }
        // { logo: '/supporters/unesco.png'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.partners {
  padding: 2rem 1rem;

  @include breakpoint(medium) {
    padding: 3rem 4rem 2rem;
  }

  img {
    max-height: 80px;
  }

  h2 {
    margin: 0 auto;
    text-align: center;
  }

  .logos {
    margin: 2rem 0;
  }

  .logo {
    box-shadow: $box-shadow-light;
    margin: 5px;
    padding: 2rem;
    border-radius: 5px;
    border: 1px solid rgba(125,130,133,0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 145px;
  }
}

</style>

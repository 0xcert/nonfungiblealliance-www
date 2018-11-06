<template lang="html">
  <div>
    <a 
      id="partners" 
      name="partners" 
      class="anchor"/>
    <div class="partners grid-container">
      <h2>{{ title }}</h2>
      <div class="logos grid-x align-center grid-margin-x grid-margin-y">
        <div 
          v-for="item in items.slice(0, limit)" 
          :key="item.id" 
          class="logo small-6 medium-4 large-3 cell align-self-middle">
          <img :src="`/partners/${item}`" >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: 'Recently joined',
      type: String
    },
    limit: {
      default: 12,
      type: Number
    }
  },
  data() {
    return {
      items: [
        'aave.png',
        'auctionity.png',
        'decentraland.svg',
        'demystify.png',
        'fuel-games.png',
        'gods-unchained.png',
        'hashmark.png',
        'sorare.png',
        'trg.jpg',
        'vault.png',
        'webp.png',
        'block-rocket.png',
        'blockchain-studios.png',
        'codex.png',
        'crypto-carz.png',
        'crypto-decks.png',
        'dac.png',
        'dapp.png',
        'ember-sword.png',
        'eth-town.png',
        'kette.png',
        'known-origin.png',
        'mokens.png',
        'non-fungible.png',
        'opensea.png',
        'su-squares.png',
        'unico.png',
        'doctrina.svg',
        'tokntok.svg',
        'socouch.png',
        '0xcert.svg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.partners {
  padding: 2rem 1rem;

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
    padding: 2rem;
    border-radius: 5px;
    border: 1px solid rgba(125, 130, 133, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 145px;
  }
}
</style>

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
          v-for="partner in partners.slice(0, limit)" 
          :key="partner.id" 
          class="logo small-6 medium-4 large-3 cell align-self-middle">
          <img :src="`/partners/${partner.logo}`">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import partners from '~/static/data/partners.yaml'
export default {
  props: {
    title: {
      default: 'Recently joined',
      type: String
    },
    limit: {
      default: 16,
      type: Number
    }
  },
  data() {
    return {
      partners
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
    padding: 1rem 2rem;
    border-radius: 5px;
    border: 1px solid rgba(125, 130, 133, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 130px;
  }
}
</style>

<template lang="html">
<div>
  <a id="featured" name="featured" class="anchor"/>
  <div class="partners grid-container">
    <h2>Featured in</h2>
    <div class="logos grid-x grid-margin-x grid-margin-y align-center">
      <div v-for="item in featured.slice(0, 12)" :key="item.id" class="logo small-6 medium-3 large-2 cell align-self-middle">
        <a v-if="item.url" :href="item.url" target="_blank">
          <img :src="'/logos/' + item.logo" :alt="item.title" />
        </a>
        <img v-else :src="'/logos/' + item.logo" :alt="item.title"/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import featured from '~/static/data/featured.json'

export default {
  data () {
    return {
      featured
    }
  }
}
</script>

<style lang="scss" scoped>
.partners {
  padding: 3rem 0 6rem;

  img {
    max-height: 80px;
  }

  h2 {
    margin: 0 auto;
    text-align: center;
  }

  .logos {
    margin: 1rem 0 0;
  }

  .logo {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80px;

    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    opacity: 0.8;
    transition: all $ease;

    &:hover {
      -webkit-filter: grayscale(0%); 
      filter: grayscale(0%);
      opacity: 1;
    }
  }
}

</style>

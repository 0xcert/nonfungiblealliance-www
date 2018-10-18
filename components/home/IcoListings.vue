<template lang="html">
<div class="grid-container">
  <a id="icolistings" name="icolistings" class="anchor"/>
  <div class="icolistings">
    <h2>ICO Listings</h2>
    <div class="logos grid-x align-center">
      <div v-for="item in listings.slice(0, 8)" :key="item.id" class="small-6 medium-4 large-3 cell align-self-middle">
        <a v-if="item.url" :href="item.url" target="_blank" class="logo">
          <img v-if="item.logo" :src="'/logos/' + item.logo" />
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import listings from '~/static/data/icoListings.json'

export default {
  data () {
    return {
      listings
    }
  }
}
</script>

<style lang="scss" scoped>
.icolistings {
  background: $light-blue-bg;
  border: 1px solid $light-blue;
  border-radius: 8px;
  margin: 1rem 0;
  padding: 2rem 1rem;

  @include breakpoint(medium) {
    margin: 4rem 0;
    padding: 3rem 3rem 2rem;
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
    margin: 5px;
    background: $white;
    box-shadow: $box-shadow-light;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid rgba(125,130,133,0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 120px;
    transition: box-shadow $ease;

    @include breakpoint(medium) {
      min-height: 146px;
      padding: 2rem;
    }

    &:hover {
      box-shadow: 0 2px 12px 0 rgba($primary, 0.1);
    }
  }
}

</style>

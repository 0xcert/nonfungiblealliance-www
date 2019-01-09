<template>
  <div class="submenu">
    <nuxt-link  
      exact
      v-for="subpage in this.subpages"
      :key="subpage.id"
      :to="subpage.url">
      {{ subpage.title }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    subpages: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.submenu {
  border-bottom: 1px solid $border;
  margin-bottom: 2rem;

  a {
    display: inline-block;
    margin-right: 21px;
    margin-bottom: -1px;
    padding: 22px 8px;
    cursor: pointer;
    color: $base;

    &:hover {
      color: $primary;
      text-decoration: none;
    }
  }

  .category:not(:first-child) {
    margin-left: 15px;
  }

  .nuxt-link-active {
    border-bottom: 2px solid;
    color: $primary;
    font-weight: bold;
  }
}
</style>

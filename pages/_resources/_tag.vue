<template>
  <div class="mt-7 resources grid-container">
    <h2>Resources</h2>
    <submenu :subpages="links" />
    <div class="grid-x grid-margin-x grid-margin-y">
      <div 
        v-for="resource in resources"
        :key="resource.id"
        class="resource cell snall-6 medium-4 large-3">
        <a 
          target="_blank"
          :href="resource.link" 
          class="label">{{ resource.description }}</a>
        <div class="tags">
          <nuxt-link 
            v-for="(tag, index) in resource.tag" 
            :key="`tag${index}`"
            :to="'/resources/'+tag"
            class="tag">
            {{ tag }}
          </nuxt-link>
        </div>
      </div>
    </div>
    <subscription/>
  </div>
</template>

<script>
import Subscription from '~/components/Subscription'
import Submenu from '~/components/Submenu.vue'

export default {
  scrollToTop: true,
  components: {
    Subscription,
    Submenu
  },
  data() {
    return {
      links: [
        { title: 'All', url: '/resources' },
        { title: 'Resources', url: '/resources/resources' },
        { title: 'Games', url: '/resources/game' },
        { title: 'Art', url: '/resources/art' }
      ]
    }
  },
  async asyncData({ app, params }) {
    const { data } = await app.$axios.post(
      'https://cms.0xcert.org/api/collections/get/alliance_resources',
      JSON.stringify({
        filter: {
          published: true,
          tag: params.tag
        },
        sort: { _created: -1 }
      }),
      { headers: { 'Content-Type': 'application/json' } }
    )

    return { resources: data.entries }
  }
}
</script>

<style lang="scss" scoped>
.resources {
  padding: 2rem 1rem;

  h2 {
    margin: 0 auto;
    text-align: center;
    margin-bottom: 3rem;
  }

  .resource {
    box-shadow: $box-shadow-light;
    padding: 1rem 2rem;
    border-radius: 5px;
    border: 1px solid rgba(125, 130, 133, 0.05);

    .label {
      display: block;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }

  .tag {
    font-size: 12px;
    text-transform: uppercase;
    border-radius: 3px;
    padding: 3px 8px;
    background-color: $grey-bg;
    margin-right: 10px;

    &:hover {
      text-decoration: none;
      color: $base;
      background-color: $primary;
    }
  }
}
</style>

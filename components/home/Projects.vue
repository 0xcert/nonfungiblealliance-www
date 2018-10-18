<template lang="html">
<div>
  <a id="projects" name="partners" class="anchor"/>
  <div class="projects grid-container">
    <h2>{{ projects.title }}</h2>
    <div class="logos grid-x grid-margin-x grid-margin-y align-center">
      <div v-for="item in projects.data" :key="item.id" class="logo small-6 medium-3 large-3 cell align-self-middle">
        <a v-if="item.url" :href="item.url" target="_blank">
          <img :src="item.logo" />
        </a>
        <img v-else :src="projects.filesURL + item.logo" />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import projects from '~/static/data/projects.json'

export default {
  data () {
    return {
      projects
    }
  }
}
</script>

<style lang="scss" scoped>
.projects {
  padding: 2rem 0;

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
    border: 1px solid rgba(125,130,133,0.05);
    min-height: 143;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 145px;
  }
}

</style>

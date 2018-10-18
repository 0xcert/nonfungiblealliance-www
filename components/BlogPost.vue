<template lang="html">
  <div class="blog-post">
    <div class="image">
      <nuxt-link :to="href">
        <div class="post-image" v-if="image" :alt="title" v-bind:style="{'background-image': 'url('+image+')'}" ></div>
      </nuxt-link>
    </div>
    <div class="content">
      <div class="category">
        {{ category }}
      </div>
      <h4 class="title">
        {{ title }}
      </h4>
      <div class="body">
        {{ body }}
      </div>
    </div>
    <nuxt-link class="read-more" :to="href">
      Read more &rarr;
    </nuxt-link>
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
    image: String,
    title: String,
    category: String,
    body: String,
    href: String,
    medium: String
  }
}
</script>

<style lang="scss" scoped>
.blog-post {
  margin-bottom: 1rem;
  display: flex;
  position: relative;
  flex-flow: column;
  background: $white;
  box-shadow: 0 2px 8px 0 $gray-light;
  border-radius: 3px; 
  font-family: $secondary-font;
  
  .post-image {
    height: 180px;
    border-radius: 3px 3px 0 0; 
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: opacity $ease;
    overflow: hidden;

    img {
      height: 100%;
    }

    &:hover {
      opacity: .6;
    }
  }

  .content {
    margin: 20px 30px 77px;

    .category {
      color: $gray;
      text-transform: uppercase;
      margin-bottom: 11px;
      letter-spacing: 1px;
      font-size: 0.9rem;
    }

    .title {
      font-family: $primary-font;
    }

    .body {
      margin-top: 20px; 
      color: $gray;      
    }
  }

  .read-more {
    position: absolute;
    left: 30px;
    bottom: 35px;
    font-weight: bold;
  }
}
</style>

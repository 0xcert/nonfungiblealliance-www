<template>
  <div class="news grid-container">
    <div class="grid-x">
      <div class="small-12 categories">
        <div v-for="(category, index) in categories"
            :key="category.id"
            :class="{active : category == activeCategory}"
            class="category"
            @click="toggle(categories[index])">
          {{ category }}
        </div>
      </div>
    </div>
      <div class="grid-x grid-margin-x grid-margin-y posts">
        <BlogPost v-for="post in news"
                  v-if="post.category==activeCategory || activeCategory=='all' && post.published"
                  :key="post.id"
                  class="small-12 medium-6 large-4 cell"               
                  :title="post.title"
                  :body="post.oneliner"
                  :href="`/news/${post.id}`"
                  :medium="post.url"
                  :image="'/news/images/' + post.id + '.jpg'"
                  :category="post.category" />   
      </div>          
    <Subscription/>
  </div>
</template>

<script>
import news from '~/static/data/news.json'
import BlogPost from '~/components/BlogPost'
import Subscription from '~/components/Subscription'

export default {
  scrollToTop: true,
  components: {
    BlogPost,
    Subscription
  },

  data () {
    return {
      news,
      activeCategory: 'all',
      categories: [
        "all",
        "hot",
        "events",
        "use cases",
        "Q&A",
        "tech",
        "archive"
      ]
    }
  },

  created () {
    const { category } = this.$route.query
    if (category) {
      this.activeCategory = category
    }
  },

  methods: {
    toggle: function(category) {
      this.activeCategory = category
      this.$router.push({ query: { category: this.activeCategory }})
    }
  }
}
</script>

<style lang="scss" scoped>
  .news {
    @include breakpoint(medium) {
      margin-top: 163px;
    }
    .categories {
      border-bottom: 1px solid #B0C8D3;
      margin-bottom: 48px; 
      text-transform: uppercase;

      .category {
        margin-right: 21px;
        margin-bottom: -1px;      
        padding: 26px 8px;
        display: inline-block;
        cursor: pointer;
      }

      .category:not(:first-child) {
        margin-left: 21px solid $base;
      }

      .active {
        border-bottom: 2px solid;
      }
    }
  }

  .posts {
    margin-bottom: 5rem;
  }
</style>
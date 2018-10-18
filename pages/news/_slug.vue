<template>
  <div :key="$route.params.slug" class="markdown blog-post grid-x align-center">
    <div class="small-12 medium-8 large-7 cell blog-image">
      <div class="postmetadata">
        Posted on <span class="updated">{{ publishedDate }}</span> 
      </div>
      <h1>{{ newsTitle }}</h1>
      <img :src="image" :alt="newsTitle"/>

      <social-sharing 
          :url="`https://0xcert.org/news/${this.$route.params.slug}`"
          :title="newsTitle"
          :description="newsTitle"
          twitter-user="0xcert"
          hashtags="0xcert,ERC721,NFT,blockchain"
          inline-template
          network-tag="a">
        <div class="share">
          <network network="twitter">
            <svg-twitter :class="'icon-color'"/>
          </network>
          <network network="facebook">
            <svg-facebook :class="'icon-color'"/>
          </network>
          <network network="linkedin">
            <svg-linkedin :class="'icon-color'"/>
          </network>
        </div>
      </social-sharing>
    </div>
    <div v-html="content" class="blog-content small-12 medium-8 large-7 cell"></div>
  </div>
</template>

<script>
import vueScroll from 'vue-scrollto'
import news from '~/static/data/news.json'

export default {
  layout: 'blog',
  scrollToTop: true,

  async asyncData ({params}) {
    const fileContent = await import(`~/static/news/${params.slug}.md`)
    const imageFile = await import(`~/static/news/images/${params.slug}.jpg`)

    return {
      content: fileContent,
      image: imageFile
    }
  },

  computed: {
    newsTitle: function () {
      return news.find(x => x.id === this.$route.params.slug).title
    },
    newsDescription: function () {
      return news.find(x => x.id === this.$route.params.slug).oneliner
    },
    publishedDate: function () {
      return news.find(x => x.id === this.$route.params.slug).publishedDate
    }
  },

  head () {
    return {
      title: `0xcert - ${this.newsTitle}`,
      meta: [
        { 
          hid: "url", 
          property: "og:url", 
          content: `https://0xcert.org/news/${this.$route.params.slug}` 
        },
        { 
          hid: "type", 
          property: "og:type", 
          content: "article" 
        },
        {
          hid: 'image',
          property: "og:image",
          content: `https://0xcert.org${this.image}`
        },
        { 
          hid: 'twitter', 
          property: "twitter:image", 
          content: `https://0xcert.org${this.image}`
        },
        { 
          hid: "title", 
          property: "og:title", 
          content: `0xcert - ${this.newsTitle}` 
        },
        { 
          hid: "socialDescription", 
          property: "og:description", 
          content: this.newsDescription 
        },
        { 
          hid: "description", 
          property: "description", 
          content: this.newsDescription 
        },
        { 
          hid: "twitterDescription", 
          property: "twitter:description", 
          content: this.newsDescription 
        },
        { hid: "twitterTitle", 
          property: "twitter:title", 
          content: `0xcert - ${this.newsTitle}` 
        },
      ]
    }
  }
}
</script>

<style lang="scss">
  .blog-post {
    h1 {
      font-size: 36px;
      text-align: center;
      line-height: 48px;
    }
  }

  .blog-image {
    img {
      width: 100%;
    }
  }

  .blog-content {
    margin-top: 2rem;

    iframe {
      margin: 2rem auto !important;
    }

    h2, h3, h4 {
      font-family: $secondary-font;
      font-weight: normal;
      font-size: 28px;
    }

    h2 {
      margin-top: 2rem;
    }

    h3 {
      font-size: 26px;
    }

    a.button {
      text-decoration: none;
      margin-top: 1rem;
    }

    ul {
      font-size: 18px;
    }

    p {
      line-height: 1.6;

      em {
        display: inline;
      }

      img {
        display: block;
        margin: 2rem auto 0;
      //  box-shadow: 0 0 25px rgba(0,0,0,0.2);
      }

      img + em {
        margin-top: 1rem;
        margin-bottom: 2rem;
        display: block;
        text-align: center;
        color: #7D8285;
      }
    }

    section ul {
      li {
        padding: 0 0 5px 1rem;
        margin: 0 0 0 1rem;

        > ul {
          margin-top: 1rem;
        }

        p {
          margin: 0;
        }
      }
    }
  }

  .share {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    background: rgba($base, 0.7);

    a {
      display: inline-flex;
      padding: 1rem;
      align-self: center;
      padding: 0.6rem;

      &:hover {
        .icon-color {
          fill: $primary;
        }
      }
    }

    .icon-color {
      fill: $white;
      max-height: 18px;
    }

    @include breakpoint(medium) {
      position: fixed;
      left: 0;
      top: 26vh;
      flex-flow: column wrap;
      z-index: 5;

      a {
        display: flex;
        justify-content: center;
        padding: 0.6rem;
      }
    }

    .icon-color {
      fill: $white;
    }
  }

  .postmetadata {
    color: $gray;
    margin: 0 0 1rem;
    text-align: center;
    text-transform: uppercase;
    font-size: 14px
  }

</style>
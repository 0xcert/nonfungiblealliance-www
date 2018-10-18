const fs = require('fs')
let news = fs.readdirSync('./static/news')

function getNews(post) {
  let slug = post.substr(0, post.lastIndexOf('.'));
  return `/news/${slug}`
}

const meta = {
  title: 'Non-fungible Alliance',
  description: '',
  image: 'https://nonfungiblealliance.org/meta-card.jpg',
}

module.exports = {
  head: {
    title: meta.title,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "url", property: "og:url", content: "https://nonfungiblealliance.org" },
      { hid: "type", property: "og:type", content: "website" },
      { hid: "title", property: "og:title", content: meta.title },
      { hid: "image", property: "og:image", content: meta.image },
      { hid: "imageType", property: "og:image:type", content: "image/jpg" },
      { property: "og:image:width", content: "700" },
      { property: "og:image:height", content: "352" },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:site", content: "@nonfungiblealliance" },
      { property: "twitter:creator", content: "@nonfungiblealliance" },
      { hid: "twitterTitle", property: "twitter:title", content: meta.title },
      { hid: "twitterDescription", property: "twitter:description", content: meta.description },
      { hid: "twitter", property: "twitter:image", content: meta.image },
      { hid: "socialDescription", property: "og:description", content: meta.description },
      { hid: "description", name: "description", content: meta.description }
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "alternate", type: "application/rss+xml", title: "RSS Feed for Non-fungiblealliance news", href: "/rss.xml" }
    ],
    script: [
      { src : "https://platform.twitter.com/widgets.js" }
    ]
  },
  css: [
    { src: "~/assets/css/animations.scss" },
    { src: "~/assets/css/styles.scss" }
  ],
  sassResources: [
    'foundation-sites/scss/foundation.scss',
    '@/assets/css/config/_variables.scss'
  ],
  loading: {
    color: "#00E5F3"
  },
  plugins: [
    { src: "~plugins/ga.js", ssr: false },
    { src: "~plugins/scroll-to.js" },
    { src: "~plugins/vee-validate.js" },
    { src: "~plugins/core-components.js" },
    { src: "~plugins/vue-social-share.js", ssr: true }
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/workbox',
    'nuxt-sass-resources-loader',
    '@nuxtjs/markdownit',
    '@nuxtjs/feed',
    'nuxt-mq',
    ['@nuxtjs/google-tag-manager', { id: 'GTM-XXXXXX' }],
  ],
  feed: [
    {
      path: '/rss.xml', // The route to your feed.
      async create (feed) {
        feed.options = {
          title: meta.title,
          description: meta.description,
          link: "https://nonfungiblealliance.org",
          image: "https://nonfungiblealliance.org/logo-image.png",
          favicon: "https://nonfungiblealliance.org/favicon.png",
          generator: "The Non-fungible Alliance Feed generator",
          copyright: "All rights reserved 2018, 0xcert",
        }

        const posts = await JSON.parse(fs.readFileSync('./static/data/news.json', 'utf8'));

        posts.forEach(post => { 
          feed.addItem({
            title: post.title,
            id: post.id,
            link: `https://nonfungiblealliance.org/news/${post.id}`,
            description: post.oneliner,
          })
        })

        feed.addCategory('blockchain')
        
        feed.addContributor({
          name: 'The Non-fungible Alliance',
          email: 'info@nonfungiblealliance.org',
          link: 'https://nonfungiblealliance.org/'
        })
      },
      cacheTime: 1000 * 60 * 15, 
      type: 'rss2' 
    }
  ], 
  env: {
    API_BASE_URL: process.env.API_BASE_URL || 'https://api-staging.0xcert.org'
  },
  axios: {
    baseURL: process.env.API_BASE_URL
  },
  workbox: {
    handleFetch: true,
    runtimeCaching: [
      {
          urlPattern: 'https://fonts.googleapis.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: {cacheableResponse: {statuses: [0, 200]}}
      },
      {
          urlPattern: 'https://fonts.gstatic.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: {cacheableResponse: {statuses: [0, 200]}}
      },
    ]
  },
  'mq': {
    defaultBreakpoint: 'default',
    breakpoints: {
      sm: 1024,
      md: 1250,
      lg: Infinity
    }
  },
  markdownit: {
    preset: 'default',
    linkify: false,
    breaks: false,
    injected: true,
    html: true,
    use: [
      ['markdown-it-block-embed']
    ]
  },
  generate: {
    routes: [
      ...news.map(getNews)
    ]
  },
  build: {
    vendor: [
      'axios',
      'vee-validate',
      'vue-cookie-law',
      'vue-scrollto',
      'vue-social-sharing'
    ],
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
      const urlLoader = config.module.rules.find(
        rule => rule.loader === "url-loader"
      );
      urlLoader.test = /\.(png|jpe?g|gif)$/;
      config.module.rules.push({
        test: /\.svg$/,
        loader: "vue-svg-loader",
        exclude: /node_modules/
      })
    }
  }
}

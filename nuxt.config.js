const meta = {
  title: 'The Non-fungible Alliance',
  description: 'Bringing together the NFT world',
  image: 'https://nonfungiblealliance.org/meta-card.jpg'
}

module.exports = {
  head: {
    title: meta.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'url', property: 'og:url', content: 'https://nonfungiblealliance.org' },
      { hid: 'type', property: 'og:type', content: 'website' },
      { hid: 'title', property: 'og:title', content: meta.title },
      { hid: 'image', property: 'og:image', content: meta.image },
      { hid: 'imageType', property: 'og:image:type', content: 'image/jpg' },
      { property: 'og:image:width', content: '700' },
      { property: 'og:image:height', content: '352' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@nonfungiblealliance' },
      { property: 'twitter:creator', content: '@nonfungiblealliance' },
      { hid: 'twitterTitle', property: 'twitter:title', content: meta.title },
      { hid: 'twitterDescription', property: 'twitter:description', content: meta.description },
      { hid: 'twitter', property: 'twitter:image', content: meta.image },
      { hid: 'socialDescription', property: 'og:description', content: meta.description },
      { hid: 'description', name: 'description', content: meta.description }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  },
  css: [{ src: '~/assets/css/animations.scss' }, { src: '~/assets/css/styles.scss' }],
  sassResources: ['foundation-sites/scss/foundation.scss', '@/assets/css/config/_variables.scss'],
  transition: {
    name: 'layout',
    mode: 'out-in'
  },
  loading: {
    color: '#00E5F3'
  },
  plugins: [
    { src: '~plugins/ga.js', ssr: false },
    { src: '~plugins/scroll-to.js' },
    { src: '~plugins/vee-validate.js' },
    { src: '~plugins/core-components.js' },
    { src: '~plugins/vue-social-share.js', ssr: true }
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/workbox',
    'nuxt-sass-resources-loader',
    '@nuxtjs/markdownit',
    'nuxt-mq'
  ],
  env: {
    API_BASE_URL: process.env.API_BASE_URL
  },
  axios: {
    baseURL: process.env.API_BASE_URL || 'https://api-staging.0xcert.org'
  },
  workbox: {
    handleFetch: true,
    runtimeCaching: [
      {
        urlPattern: 'https://fonts.googleapis.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: 'https://fonts.gstatic.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      }
    ]
  },
  mq: {
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
    use: [['markdown-it-block-embed']]
  },
  build: {
    vendor: ['axios', 'vee-validate', 'vue-cookie-law', 'vue-scrollto', 'vue-social-sharing'],
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
      const urlLoader = config.module.rules.find(rule => rule.loader === 'url-loader')
      urlLoader.test = /\.(png|jpe?g|gif)$/
      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        exclude: /node_modules/
      })
    }
  }
}

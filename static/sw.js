importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0ae7251278c0d4b789fa.js",
    "revision": "ce1694a8677ead1f2504d4664d0687ce"
  },
  {
    "url": "/_nuxt/1607cb0c3256fcecf64a.js",
    "revision": "1f4a4bdcaa9a2028381dcc09d134d97f"
  },
  {
    "url": "/_nuxt/1918fac7d88347861da2.js",
    "revision": "445c40b9801e4973c69eb3d9bd9d9b14"
  },
  {
    "url": "/_nuxt/1d02fee4de7a58f3ec95.js",
    "revision": "59ff5c65a5ae220e5e53c1e54e79aa65"
  },
  {
    "url": "/_nuxt/2aa388bb6ea613c26caf.js",
    "revision": "514105a4a29f1b76a4bf6613fff5a031"
  },
  {
    "url": "/_nuxt/6196e3882902b4fa44d0.js",
    "revision": "5776ba596ed1bfd9eb03c546e25e3c93"
  },
  {
    "url": "/_nuxt/9aacafb03718fb47575e.js",
    "revision": "37d63a311d44abeebeac9bbbc3448384"
  },
  {
    "url": "/_nuxt/a76150049d8947b6b64c.js",
    "revision": "177efaaf2669befdb21fd9ea365d2907"
  },
  {
    "url": "/_nuxt/a775efc946ee2170f7b7.js",
    "revision": "1e0f1e540b55a4142082d74015c69f1f"
  },
  {
    "url": "/_nuxt/c80af8e068edd8b8a907.js",
    "revision": "efae7707100ee9e15fd8c483bf095097"
  },
  {
    "url": "/_nuxt/c82b58729ea1b79eb384.js",
    "revision": "3a423ea2539bcb299394d08b52a01ed2"
  },
  {
    "url": "/_nuxt/c89e605df8aaf5e42611.js",
    "revision": "6c5966edde9b65e5ef96cc3365d6b0ef"
  },
  {
    "url": "/_nuxt/d6279d550af933f83c6a.js",
    "revision": "bb87334476f17bf8a499e31e76465cd5"
  }
], {
  "cacheId": "nf-alliance-www",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workbox.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')

workbox.routing.registerRoute(new RegExp('https://fonts.gstatic.com/.*'), workbox.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')

importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0a8d3210aebef5f3405b.js",
    "revision": "86d1f6a8302567326d3e183107747789"
  },
  {
    "url": "/_nuxt/1607cb0c3256fcecf64a.js",
    "revision": "1f4a4bdcaa9a2028381dcc09d134d97f"
  },
  {
    "url": "/_nuxt/416cbbbc3191debef749.js",
    "revision": "767e3381a216e0d4407f5537140323e3"
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
    "url": "/_nuxt/b5f7453c714261721bd1.js",
    "revision": "b9cea61e14bc518605813810c2045972"
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
  },
  {
    "url": "/_nuxt/f350c1abb30e6ddce2ee.js",
    "revision": "db3e2d421519c5299eecf8a77d950624"
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

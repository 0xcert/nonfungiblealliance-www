importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1dd2bf2dc1f207a3bf7a.js",
    "revision": "5414444509562875bfb9eccae7e80286"
  },
  {
    "url": "/_nuxt/3675054ea1d33d27b31b.js",
    "revision": "c15f771ed11f26b41b3974eefccac36d"
  },
  {
    "url": "/_nuxt/3f13eb47bb0e6a89527c.js",
    "revision": "a46b6f492b396c53ec73a530fa539a79"
  },
  {
    "url": "/_nuxt/3ff5d4d0dd39b9db3475.js",
    "revision": "9790dc9729d5a66566484241c376814e"
  },
  {
    "url": "/_nuxt/4768c36b66cc3277ee2c.js",
    "revision": "50ea82bd95cd603b7e514f52f8527926"
  },
  {
    "url": "/_nuxt/649a30d51334dbfd1b0c.js",
    "revision": "168a5f960d6fd11c5f18e5c846cd7e24"
  },
  {
    "url": "/_nuxt/71ca2e9652226d35ab64.js",
    "revision": "be0aae886b1d906a1b9bda6f60b1015c"
  },
  {
    "url": "/_nuxt/90e95d0df8a6f5641555.js",
    "revision": "41470238aa9caa8b9adbb0e27251b919"
  },
  {
    "url": "/_nuxt/94fd774351dabd6a18c8.js",
    "revision": "56f76dad98ecf2674d56341ad09eaf48"
  },
  {
    "url": "/_nuxt/b466e753285d31b0bc5e.js",
    "revision": "f3c752f87a11e159b854a015748b6981"
  },
  {
    "url": "/_nuxt/b67e982ee8d096f7b8ae.js",
    "revision": "f1d32fe382211c5bff53212e7f46590f"
  },
  {
    "url": "/_nuxt/f5b1bf61209f0ab75254.js",
    "revision": "74056fd181ec968ac3abf34eaac08a54"
  },
  {
    "url": "/_nuxt/f7d3ff809ea370dfe630.js",
    "revision": "9a6be22244c728766e2bdcaf48b114c3"
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

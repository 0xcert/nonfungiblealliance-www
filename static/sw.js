importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0d7ad85c8852c28b7358.js",
    "revision": "1c602590e83072eeaa92cbdf514eba9c"
  },
  {
    "url": "/_nuxt/23afadb33c84ab3176f8.js",
    "revision": "8ad6b0d30686b65d98509d92cd0836b5"
  },
  {
    "url": "/_nuxt/4cbc84f222186ba2aadc.js",
    "revision": "cb3d4191489d9d60a01b5988ad2db90c"
  },
  {
    "url": "/_nuxt/75056ecd827b9f8271b6.js",
    "revision": "35b5539736e74a8c6c82613f098172b3"
  },
  {
    "url": "/_nuxt/9769d4212400d82df540.js",
    "revision": "08acce8c277ec53e3ce849df75ae20b9"
  },
  {
    "url": "/_nuxt/b63b12209607122fba1b.js",
    "revision": "c4ffe546c9f1b96604a90e430c0be38c"
  },
  {
    "url": "/_nuxt/b9e1566cf68ce74ed98c.js",
    "revision": "03670a4ecb12a3cc1121d746ad6dcaf1"
  },
  {
    "url": "/_nuxt/cc6cfac03638a4a4be99.js",
    "revision": "c5727cdecacb14474cb120a6f79b8802"
  },
  {
    "url": "/_nuxt/d7cf494356e5e195f4c7.js",
    "revision": "0f5ce35bcc0d24bf74e7ef8e49cd99c3"
  },
  {
    "url": "/_nuxt/e1f55e3aaff46d9ce3f7.js",
    "revision": "1988d85358d5b9635373b346743e13ee"
  },
  {
    "url": "/_nuxt/e1fe11f6b2d548244034.js",
    "revision": "cde43cd3da0899aae151f21094730f27"
  },
  {
    "url": "/_nuxt/f008d987eaf099cae27d.js",
    "revision": "726dac5710447ef75478a1539af01d14"
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

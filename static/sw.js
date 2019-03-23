importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/416cbbbc3191debef749.js",
    "revision": "767e3381a216e0d4407f5537140323e3"
  },
  {
    "url": "/_nuxt/57aece0542d5e417642c.js",
    "revision": "de69d17442d7ae74bc91c0edaa13cf26"
  },
  {
    "url": "/_nuxt/6196e3882902b4fa44d0.js",
    "revision": "5776ba596ed1bfd9eb03c546e25e3c93"
  },
  {
    "url": "/_nuxt/75500e0b640ff4f70afe.js",
    "revision": "ffdcbc36d11c4ff41d1a912ce1e0bf89"
  },
  {
    "url": "/_nuxt/75a6bcdabdde34ea8b66.js",
    "revision": "7979ecf0c15f7a50f5b37e1662fe8fb6"
  },
  {
    "url": "/_nuxt/9b9d1c78edb3a055d377.js",
    "revision": "eafc0987aeac74c987ca6c2e3f28cace"
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
    "url": "/_nuxt/b058cb241b47365fa185.js",
    "revision": "b7b52158efd723b8538b869266657b8b"
  },
  {
    "url": "/_nuxt/c82b58729ea1b79eb384.js",
    "revision": "3a423ea2539bcb299394d08b52a01ed2"
  },
  {
    "url": "/_nuxt/cccab7bc6c05af999fbf.js",
    "revision": "bf6cb26e6de2a20c33eca287316fa995"
  },
  {
    "url": "/_nuxt/d5e4f78d3674e0f53b3c.js",
    "revision": "5f18b14667e57a15cf9e3b00fce671ad"
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

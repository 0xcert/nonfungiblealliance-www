importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/12cba4d8bb141c988da4.js",
    "revision": "e857f00770e1f90d763da8c977ac23b3"
  },
  {
    "url": "/_nuxt/1cc4c174767f536a4ed8.js",
    "revision": "9a3ed009d73e909ca687270c4ba34add"
  },
  {
    "url": "/_nuxt/267bbdb3d1c307a0c4ba.js",
    "revision": "4237943c3098ee78b89e39cd2fc5473e"
  },
  {
    "url": "/_nuxt/41b753550d0999af598a.js",
    "revision": "3cdad35b30a670f983f38743d5487c31"
  },
  {
    "url": "/_nuxt/5c29429a1e580b2d4350.js",
    "revision": "25e051d3faeea133dac54043df32fc25"
  },
  {
    "url": "/_nuxt/6d7c4a490c3622e683af.js",
    "revision": "0ec429a88a0d07816564b817420b6413"
  },
  {
    "url": "/_nuxt/712384c8fc9212384a3c.js",
    "revision": "1a3fa601682f449b0a4a23c3a7a456cb"
  },
  {
    "url": "/_nuxt/aaa18fdcf6e4e9dfd70f.js",
    "revision": "0ae078d18b6dedc634e16f3e90df9751"
  },
  {
    "url": "/_nuxt/ac6f7660b17811959833.js",
    "revision": "c5a3ed83fbc3ab2ada5537e43b79f961"
  },
  {
    "url": "/_nuxt/c7035ed9d578f6d56db0.js",
    "revision": "6a7071f44396a04152b4dedee066b048"
  },
  {
    "url": "/_nuxt/cfa63a0c51c8b39ca6b0.js",
    "revision": "f941345354b1d2825b37626007212c41"
  },
  {
    "url": "/_nuxt/db8306e1610cd44a9f86.js",
    "revision": "fdead6cfb9fb9ce2d00c2767ab23086b"
  },
  {
    "url": "/_nuxt/e3856f507267d23ce096.js",
    "revision": "e1262f82a65907e5bc452a20ea9a4fd5"
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

importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/267bbdb3d1c307a0c4ba.js",
    "revision": "4237943c3098ee78b89e39cd2fc5473e"
  },
  {
    "url": "/_nuxt/397d71321ad5380b411d.js",
    "revision": "272c0f4c212bdf61baf97bfa037297cf"
  },
  {
    "url": "/_nuxt/41b753550d0999af598a.js",
    "revision": "3cdad35b30a670f983f38743d5487c31"
  },
  {
    "url": "/_nuxt/6d7c4a490c3622e683af.js",
    "revision": "0ec429a88a0d07816564b817420b6413"
  },
  {
    "url": "/_nuxt/6f5dfd0ba46294fefadd.js",
    "revision": "c41ae0cbc21af563b485e71593b0f9ea"
  },
  {
    "url": "/_nuxt/712384c8fc9212384a3c.js",
    "revision": "1a3fa601682f449b0a4a23c3a7a456cb"
  },
  {
    "url": "/_nuxt/7c06427ce6353f9e448a.js",
    "revision": "ffc1773d06e8c0d2664eae549cf7ab83"
  },
  {
    "url": "/_nuxt/aaa18fdcf6e4e9dfd70f.js",
    "revision": "0ae078d18b6dedc634e16f3e90df9751"
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
    "url": "/_nuxt/e1035a827b6bfaaa679e.js",
    "revision": "397241e33c09bc73bf6594da875a0c76"
  },
  {
    "url": "/_nuxt/edde4f1dbc99489b125a.js",
    "revision": "7d87b238837c95cebbde0378fd1f76b6"
  },
  {
    "url": "/_nuxt/f8cb55eedae1d9ca1840.js",
    "revision": "dbdb37d236bf3d8b1f26fd455590a400"
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

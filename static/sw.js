importScripts('/nonfungiblealliance-www/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/nonfungiblealliance-www/_nuxt/0d7ad85c8852c28b7358.js",
    "revision": "1c602590e83072eeaa92cbdf514eba9c"
  },
  {
    "url": "/nonfungiblealliance-www/_nuxt/1b195d07e70ba58f3b3d.js",
    "revision": "8517d897de559641497e4c80be082526"
  },
  {
    "url": "/nonfungiblealliance-www/_nuxt/23afadb33c84ab3176f8.js",
    "revision": "8ad6b0d30686b65d98509d92cd0836b5"
  },
  {
    "url": "/nonfungiblealliance-www/_nuxt/2b3241174451128cd8cb.js",
    "revision": "e61e64c60ccbc2204d6d974e8b93c509"
  },
  {
    "url": "/nonfungiblealliance-www/_nuxt/75056ecd827b9f8271b6.js",
    "revision": "35b5539736e74a8c6c82613f098172b3"
  },
  {
    "url": "/nonfungiblealliance-www/_nuxt/79663d3ba7ce4fb4f1eb.js",
    "revision": "05c814a17cfb072261b71cf0b218fe19"
  },
  {
    "url": "/nonfungiblealliance-www/_nuxt/9769d4212400d82df540.js",
    "revision": "08acce8c277ec53e3ce849df75ae20b9"
  },
  {
    "url": "/nonfungiblealliance-www/_nuxt/b9e1566cf68ce74ed98c.js",
    "revision": "03670a4ecb12a3cc1121d746ad6dcaf1"
  },
  {
    "url": "/nonfungiblealliance-www/_nuxt/d7cf494356e5e195f4c7.js",
    "revision": "0f5ce35bcc0d24bf74e7ef8e49cd99c3"
  },
  {
    "url": "/nonfungiblealliance-www/_nuxt/e1f55e3aaff46d9ce3f7.js",
    "revision": "1988d85358d5b9635373b346743e13ee"
  },
  {
    "url": "/nonfungiblealliance-www/_nuxt/e1fe11f6b2d548244034.js",
    "revision": "cde43cd3da0899aae151f21094730f27"
  },
  {
    "url": "/nonfungiblealliance-www/_nuxt/f008d987eaf099cae27d.js",
    "revision": "726dac5710447ef75478a1539af01d14"
  }
], {
  "cacheId": "nf-alliance-www",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/nonfungiblealliance-www/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/nonfungiblealliance-www/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workbox.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')

workbox.routing.registerRoute(new RegExp('https://fonts.gstatic.com/.*'), workbox.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')

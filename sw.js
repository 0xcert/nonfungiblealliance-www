importScripts('/_nuxt/workbox.6041bd81.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/10ad25281d5755ffba05.js",
    "revision": "77b76e67891f3ad31e9772778f23a692"
  },
  {
    "url": "/_nuxt/1b06120587cbe4de12ad.js",
    "revision": "e6dd272bf7a7f5711f0eca79159a32ed"
  },
  {
    "url": "/_nuxt/2e5147b215728fac73e7.js",
    "revision": "52e61fc9714a4337794d7b4876bf91b4"
  },
  {
    "url": "/_nuxt/4472874990594212954c.js",
    "revision": "a89d46872bcdc6dc84eb5a9056ad649a"
  },
  {
    "url": "/_nuxt/58b7f83a23a49d0ecef4.js",
    "revision": "eb6539fc380c3768d2e20930e910e121"
  },
  {
    "url": "/_nuxt/6f667b18ab0837e1a876.js",
    "revision": "5d9e2941b1f912320b194a54170e7fc2"
  },
  {
    "url": "/_nuxt/724e40666378639cbda0.js",
    "revision": "f073c47203c95cd3288d94ed50e32b30"
  },
  {
    "url": "/_nuxt/9b64069c5aae36ddc6f6.js",
    "revision": "99c547f46d0d7c48961b71f9cc60dcb4"
  },
  {
    "url": "/_nuxt/bae5210fcce62ea46410.js",
    "revision": "1a7125524f8bee8c74fa4367a63fe3bf"
  },
  {
    "url": "/_nuxt/d969f5cc1b83c67d29a8.js",
    "revision": "bbc632e749b832df0a1c538d9a59d276"
  },
  {
    "url": "/_nuxt/eb4263dcab321cb3bf0e.js",
    "revision": "e866a645b8ebb25b1a47a368a5ade7d7"
  },
  {
    "url": "/_nuxt/f5002b2e0c1bf0d08a0e.js",
    "revision": "7d1fe6d6891acb712eee432bc30963fc"
  },
  {
    "url": "/_nuxt/fe9f4c31ddc44cff12ec.js",
    "revision": "8f5c21a14dc2d9e70d8fd109cd22c2ff"
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

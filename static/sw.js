importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nf-alliance-www",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.c9de8d4f23e4e2335b2b.js",
    "revision": "3bb05eeca77a13d7fda465db19e5a525"
  },
  {
    "url": "/_nuxt/layouts/blog.0bf95ac3916874b4888c.js",
    "revision": "5b38725c8e9f20e9143b19bad67a1ac5"
  },
  {
    "url": "/_nuxt/layouts/default.118861161460647aaa87.js",
    "revision": "4a1d633b20965ed1497db31357e8d3e1"
  },
  {
    "url": "/_nuxt/layouts/empty.524f478f4c27aace2cfb.js",
    "revision": "1e815df95416f5aa8b834127294be5a3"
  },
  {
    "url": "/_nuxt/layouts/inner.367ce59b944a20c11e71.js",
    "revision": "185dda1ae7bb1144193fe88ce4fe9d70"
  },
  {
    "url": "/_nuxt/manifest.1f3fe462d58ff0c6fbc8.js",
    "revision": "bb47c6dd591c9a08a8ad540109a672c4"
  },
  {
    "url": "/_nuxt/pages/cookie-policy/index.7e59adc1330bdbe481fe.js",
    "revision": "cc82a973f47db45bf4cdacea93cb511f"
  },
  {
    "url": "/_nuxt/pages/disclaimer/index.7ff99b1aaf49bd63cc82.js",
    "revision": "457a8c087500ed765895eab6c83c876b"
  },
  {
    "url": "/_nuxt/pages/faq/index.71b6afef707e12ec7ca5.js",
    "revision": "f5e419b5c4f593cae7fef42cda0ffdd7"
  },
  {
    "url": "/_nuxt/pages/index.7c547fbab3412a082160.js",
    "revision": "f08f514acb4a8e42a7f643458bb803e3"
  },
  {
    "url": "/_nuxt/pages/members/apply/index.9b0ef8c44765e28cd830.js",
    "revision": "2ef4025df876d74c0d1c6ad71aead20d"
  },
  {
    "url": "/_nuxt/pages/members/confirm/index.1d96aa1023a4ff1aaa97.js",
    "revision": "9c0989965c5e706f88eb61e818468630"
  },
  {
    "url": "/_nuxt/pages/members/index.eb9602b72e7e22d6939a.js",
    "revision": "4291d0e545332bfc285c61b7d4b9d457"
  },
  {
    "url": "/_nuxt/pages/newsletter/cunfirm/index.bbbc442d28b4c688fdf0.js",
    "revision": "f549ff4ab372683dc4dd257cd1b7322a"
  },
  {
    "url": "/_nuxt/pages/resources/index.b8b3be8cd30f126475e5.js",
    "revision": "6d49aba38e3bdd6efe351b5814ed9166"
  },
  {
    "url": "/_nuxt/vendor.0eb3a3e38440c4ae9d4d.js",
    "revision": "4f3ac80d707a3670264e2aa868724de0"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workboxSW.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.gstatic.com/.*'), workboxSW.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')


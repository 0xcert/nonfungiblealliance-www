importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "0xcert-www",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/14.9c2e69b1c6da9b81f54e.js",
    "revision": "40a6ffd3760c368977aa5cd31aae250a"
  },
  {
    "url": "/_nuxt/15.310077f17febc7747960.js",
    "revision": "f0ec510cef52ff018c69b1eb7f383052"
  },
  {
    "url": "/_nuxt/16.6c81c0db2ed3f4b9789a.js",
    "revision": "d3fe43b1de78545ec6962f1b77e48fc6"
  },
  {
    "url": "/_nuxt/17.0f3fe2ce7ccc693bee31.js",
    "revision": "5951874636319571f20c76b2ac4bb539"
  },
  {
    "url": "/_nuxt/18.9e8c82082adc8277fba8.js",
    "revision": "41a96dcfd10137a5e50ae65f86e650bd"
  },
  {
    "url": "/_nuxt/19.099d36ce4552cd35bae0.js",
    "revision": "a3b30602c947d9a068a8d6c41d1cbf3a"
  },
  {
    "url": "/_nuxt/20.03ccea13dac753c20fce.js",
    "revision": "9834d02f296f0eb11fc5027d4651ef0c"
  },
  {
    "url": "/_nuxt/21.2131496df225b8d95f71.js",
    "revision": "e8d5b1c92dfe7f2c8314cfdefe927e2d"
  },
  {
    "url": "/_nuxt/22.4452e1472bc38d3e3f73.js",
    "revision": "8572332984781c3be2cefc4b6541dfcf"
  },
  {
    "url": "/_nuxt/23.e028ad770faf0d4e6ad0.js",
    "revision": "5ff9404477eb562a9f59a0ea78d5595c"
  },
  {
    "url": "/_nuxt/app.ac439c81948f12038b2d.js",
    "revision": "124263ed9dd9ad42d8012bf1eb12dbfc"
  },
  {
    "url": "/_nuxt/layouts/blog.afb1b9a131404092adb8.js",
    "revision": "314bad508b7d2f96a0bcce0c2fdbd0c3"
  },
  {
    "url": "/_nuxt/layouts/default.7da9d8a3700f2589f2b7.js",
    "revision": "cd54543c0bd8755e3c282a57fc623666"
  },
  {
    "url": "/_nuxt/layouts/empty.422d34a2f5e74e899f6a.js",
    "revision": "32858c5c62582185627860febc2f4d6b"
  },
  {
    "url": "/_nuxt/layouts/inner.c18a9dfb5c953b9db1f4.js",
    "revision": "ac5fe041f9cc99f36fa7a1e3d081213b"
  },
  {
    "url": "/_nuxt/manifest.5913cccd41a9462f6bc5.js",
    "revision": "fb9f311ec9166e4cfdfff1dc102631de"
  },
  {
    "url": "/_nuxt/pages/cookie-policy/index.21155d087d77c897ec4e.js",
    "revision": "b8413e57f3e269b8eb6ceae157e194ab"
  },
  {
    "url": "/_nuxt/pages/disclaimer/index.a1283c689e97cac4738c.js",
    "revision": "1527c49db3f9cb27f90bd03553a71b9c"
  },
  {
    "url": "/_nuxt/pages/faq/index.506ebab39b48d2f656d7.js",
    "revision": "998a99b3c3ebc5bcf8d07093df092c40"
  },
  {
    "url": "/_nuxt/pages/index.f17194c4f6c18f3b75d2.js",
    "revision": "1bf0b631ae54deba834ded521d5bbc23"
  },
  {
    "url": "/_nuxt/pages/news/_slug.d698253728af168ff80d.js",
    "revision": "93cb470a9fa728e9d6340d43328cbea4"
  },
  {
    "url": "/_nuxt/pages/news/index.3694f006c2a22ebcb5da.js",
    "revision": "5fbbf08d774a50fffe3a13ef6fbde3f7"
  },
  {
    "url": "/_nuxt/pages/news/private-presale-sold-out/index.729232b3619e4123cf66.js",
    "revision": "87316f513a2d150786790f240f788bea"
  },
  {
    "url": "/_nuxt/pages/subscriptions/subscribe/index.6501bf77334f08c3c956.js",
    "revision": "0748a46d7e5c25d5453e9d14db50d3db"
  },
  {
    "url": "/_nuxt/vendor.cd23e039330e8064b882.js",
    "revision": "471f9c9c708d6697c3cc6ed4c37c52d5"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workboxSW.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.gstatic.com/.*'), workboxSW.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')


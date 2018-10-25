importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nf-alliance-www",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.6945c05f962b902832a4.js",
    "revision": "d7e041590b23f2e2e405474ebe25ef15"
  },
  {
    "url": "/_nuxt/layouts/blog.33008b05069f19954294.js",
    "revision": "470914c3017ab1c7cb0a2b6ad57b24cf"
  },
  {
    "url": "/_nuxt/layouts/default.dc65e44f6e89ca7d5231.js",
    "revision": "d51476b68ff6c8c1168a47c8deb4504b"
  },
  {
    "url": "/_nuxt/layouts/empty.4b0f3464bc647fe5e9e5.js",
    "revision": "4c477132665b941f8747532dde9bbb4e"
  },
  {
    "url": "/_nuxt/layouts/inner.05a6d2abbf2c9d02afba.js",
    "revision": "34c4028388af2c6155c1e721b14df055"
  },
  {
    "url": "/_nuxt/manifest.bf68865297d1224c19cc.js",
    "revision": "e6b979d8a4d6e57e60347570cb4e549e"
  },
  {
    "url": "/_nuxt/pages/cookie-policy/index.fd8e8d924df8e64c3a79.js",
    "revision": "b8413e57f3e269b8eb6ceae157e194ab"
  },
  {
    "url": "/_nuxt/pages/disclaimer/index.07ad5996cc1370359e07.js",
    "revision": "1527c49db3f9cb27f90bd03553a71b9c"
  },
  {
    "url": "/_nuxt/pages/faq/index.8d04aac0619e8fc5da5e.js",
    "revision": "256ec6081d48ad7046370533405d22eb"
  },
  {
    "url": "/_nuxt/pages/index.e0752241d86971320cf3.js",
    "revision": "84dca8fbf1450c1089eea5f1043b9908"
  },
  {
    "url": "/_nuxt/pages/members/apply/index.01cd66695c4828c9bf43.js",
    "revision": "cdd04259505a536e5ad6f3e4e988387b"
  },
  {
    "url": "/_nuxt/pages/members/confirm/index.efb2a2639e968de15c94.js",
    "revision": "a6e19fc895719da66e51fdd62f025ef0"
  },
  {
    "url": "/_nuxt/pages/members/index.e691528733e793b983ac.js",
    "revision": "848ce38ba0d99e7159b915ff3043fff0"
  },
  {
    "url": "/_nuxt/pages/newsletter/cunfirm/index.96ad041898186f2dde58.js",
    "revision": "b7324c9a473d8fca58aecafc76ffb653"
  },
  {
    "url": "/_nuxt/vendor.78c1e08dc543326037c1.js",
    "revision": "34743c708932fd6f185932badb33af25"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workboxSW.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.gstatic.com/.*'), workboxSW.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')


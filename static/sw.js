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
    "url": "/_nuxt/layouts/blog.838069b4d58a022fed61.js",
    "revision": "70cb1ae5699a6510170c35032951fc9e"
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
    "url": "/_nuxt/layouts/inner.f3f9cb673423e153e710.js",
    "revision": "12a3e7b0592f7c6dab9575f405554e7d"
  },
  {
    "url": "/_nuxt/manifest.5e903ff0cabc7b5a05ca.js",
    "revision": "50f99d9942dd2dfc3864030daaa7aefc"
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
    "url": "/_nuxt/pages/faq/index.8cf58382f5cd8c68bd2c.js",
    "revision": "5fddbc3360d76ddaee8469beb61eb95d"
  },
  {
    "url": "/_nuxt/pages/index.fa8b227c0bfe4288d2e0.js",
    "revision": "ff8cc1626bc60920aebd771b220b0e29"
  },
  {
    "url": "/_nuxt/pages/members/apply/index.93c44cc57d26a770eb25.js",
    "revision": "c178939d61fdc3c6b68e63f348d221f7"
  },
  {
    "url": "/_nuxt/pages/members/confirm/index.d450cf4fb2ee8f4616d4.js",
    "revision": "582c8bea97854a1913d5f5298831f052"
  },
  {
    "url": "/_nuxt/pages/members/index.eeb3e303bed7936e7dd7.js",
    "revision": "1c39cbf12120dae2bf411fc75322298a"
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


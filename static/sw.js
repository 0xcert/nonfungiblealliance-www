importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "0xcert-www",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/15.f5ea453a1978632d2614.js",
    "revision": "b61540a2dd14d326891a9abe4852d708"
  },
  {
    "url": "/_nuxt/16.aff591c966dd5af196e6.js",
    "revision": "44d75c5e64db7a5a3a0b0356257ca7bd"
  },
  {
    "url": "/_nuxt/17.65a90fa06add5e6a5197.js",
    "revision": "febd93f818caa711c0c02bcde7040d5d"
  },
  {
    "url": "/_nuxt/18.4772fbd639ac016b58f5.js",
    "revision": "df8f91eff23e3472371b2a367730be0c"
  },
  {
    "url": "/_nuxt/19.e30c1f930c880e7f21d9.js",
    "revision": "e9c4f15a3007c4ef5047e32dab8ea4c6"
  },
  {
    "url": "/_nuxt/20.6fa75b2302061df9b917.js",
    "revision": "6e9971d86fe9552ddfb63966bb3aecb7"
  },
  {
    "url": "/_nuxt/21.39aebf5e27a4cd4d90f8.js",
    "revision": "144095ea71142fd800668a775de8e766"
  },
  {
    "url": "/_nuxt/22.5566e397286ec3e83ba1.js",
    "revision": "e38a68fe2f0965f6e77541f521f76d2e"
  },
  {
    "url": "/_nuxt/23.c5f6cb6df5c52da84fa5.js",
    "revision": "c662fde1571b53f78f3142dc5876d2ca"
  },
  {
    "url": "/_nuxt/24.c08cb5342415874f8fce.js",
    "revision": "a47ed18ff82a5a13f1833fbb081a0967"
  },
  {
    "url": "/_nuxt/app.a47c9f2121c00ac2be9b.js",
    "revision": "ff1065a1e6c59d8ecf4e9bcba77e2a80"
  },
  {
    "url": "/_nuxt/layouts/blog.5a82778ec013518587b7.js",
    "revision": "721a51896b6e9348e1e96e595bfe31d4"
  },
  {
    "url": "/_nuxt/layouts/default.ba461172f543928c5cbe.js",
    "revision": "28b406f188d670487811ef6bec2fe4ef"
  },
  {
    "url": "/_nuxt/layouts/empty.c1f93a0cef9dd125c266.js",
    "revision": "63c12549bb42903780aee3cb100a2ad4"
  },
  {
    "url": "/_nuxt/layouts/inner.048aaec82edef4d1b26f.js",
    "revision": "6817e812c3f51560d2835ca0cf62ac7c"
  },
  {
    "url": "/_nuxt/manifest.cc555dcff58578e14e10.js",
    "revision": "df617fcb20b84532b82110514bc5999a"
  },
  {
    "url": "/_nuxt/pages/bounty/index.11e012e9ffd24f6dbd62.js",
    "revision": "ec82fa78087b82739fafbd12a1472ea7"
  },
  {
    "url": "/_nuxt/pages/cookie-policy/index.8e114bf68f7f605eba42.js",
    "revision": "cc82a973f47db45bf4cdacea93cb511f"
  },
  {
    "url": "/_nuxt/pages/disclaimer/index.edcde24c7d3bc7dbb7bb.js",
    "revision": "457a8c087500ed765895eab6c83c876b"
  },
  {
    "url": "/_nuxt/pages/faq/index.b0c83e05b9a9649d803a.js",
    "revision": "6afe9136234463192f1adbd46126785e"
  },
  {
    "url": "/_nuxt/pages/index.7b5481530069cc1d5feb.js",
    "revision": "cbd036029c7b00f17652aab0f37bda46"
  },
  {
    "url": "/_nuxt/pages/news/_slug.33453dd062de3ed685cb.js",
    "revision": "cbf925f277168c4dc15a0b35e5eb35d2"
  },
  {
    "url": "/_nuxt/pages/news/index.e2496f3ba68269d3bb56.js",
    "revision": "54fc2467c49ccd246025dabce7b0201b"
  },
  {
    "url": "/_nuxt/pages/news/private-presale-sold-out/index.729232b3619e4123cf66.js",
    "revision": "87316f513a2d150786790f240f788bea"
  },
  {
    "url": "/_nuxt/pages/subscriptions/subscribe/index.9476f94be7b099d7a225.js",
    "revision": "cf3a1112c33dec1c1b28a97a3d7aa901"
  },
  {
    "url": "/_nuxt/vendor.e77a1b71f79cc263c690.js",
    "revision": "757af935e64b1485750c2b17b770915a"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workboxSW.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.gstatic.com/.*'), workboxSW.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')


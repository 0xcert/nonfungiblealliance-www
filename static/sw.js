importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "0xcert-www",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/17.02103187d7b04faf2b9e.js",
    "revision": "8f13d329a358d5e19863ec818b65ee4f"
  },
  {
    "url": "/_nuxt/18.b5704c355a1172ed0aac.js",
    "revision": "62eb970925f88e8715045165b557068d"
  },
  {
    "url": "/_nuxt/19.59b366b73b75ce1e0f3c.js",
    "revision": "0eac1d40405592fbf29a57bb18c10f6e"
  },
  {
    "url": "/_nuxt/20.8123af288bf98fee376d.js",
    "revision": "9f3e2420a601e8ca9c5ecff83a7fdaaa"
  },
  {
    "url": "/_nuxt/21.8ebf31c0e62a9da68246.js",
    "revision": "b535dc5f3c9a53f77980a6a55e42518f"
  },
  {
    "url": "/_nuxt/22.01fff3e18b3dff916a26.js",
    "revision": "4791d3ef694b3cf1a78a1117c585b756"
  },
  {
    "url": "/_nuxt/23.df6c310adda3755b01b7.js",
    "revision": "30fbba6b2416ab80f577dffd13bebb59"
  },
  {
    "url": "/_nuxt/24.cecaf0a4875abb92fd0c.js",
    "revision": "747a155c2ba0fd8008fdce0cc3efe68b"
  },
  {
    "url": "/_nuxt/25.f29f55464b4467334db8.js",
    "revision": "1b303d5384a6c09afbdc73bbc501a0ce"
  },
  {
    "url": "/_nuxt/26.93d7779d1da3f4bb6c51.js",
    "revision": "117be09692bf9ff9bad5c1897052080e"
  },
  {
    "url": "/_nuxt/app.7fd459a08e721fa19299.js",
    "revision": "dfdbaf3340ceb2c02011c137215d5a7a"
  },
  {
    "url": "/_nuxt/layouts/blog.3d3650dd3e1787e2eccf.js",
    "revision": "3cd4bd6db36e383b587f0277ac657dcd"
  },
  {
    "url": "/_nuxt/layouts/default.a4c704538cd259ee2ce6.js",
    "revision": "4c96a82dd9c56c78eadb27645b7c936e"
  },
  {
    "url": "/_nuxt/layouts/empty.a759933a55cbedfb3629.js",
    "revision": "0c956b62c8a14301f18c9b5d8f83987b"
  },
  {
    "url": "/_nuxt/layouts/inner.e3647333407a35ee5b53.js",
    "revision": "adc8621c96d7ba9eef8aadc83be1184d"
  },
  {
    "url": "/_nuxt/manifest.b9f06d821193ff7c213f.js",
    "revision": "a19b85624f8bc4290e68fa08d1d3d692"
  },
  {
    "url": "/_nuxt/pages/cookie-policy/index.707c9076ba02e03137b2.js",
    "revision": "1752a0ebdb369643b1b6ac8154ae9349"
  },
  {
    "url": "/_nuxt/pages/disclaimer/index.06cfadec994174b5a485.js",
    "revision": "88c3cb442ebdd6f727595ead65e9dc5a"
  },
  {
    "url": "/_nuxt/pages/faq/index.bd23f0aecd86ae3bac32.js",
    "revision": "1384be8a594988900c9dca1d4c2990f2"
  },
  {
    "url": "/_nuxt/pages/index.9c21e82074a214bfedc5.js",
    "revision": "f9a44651149541bfdaa035e3a26436dc"
  },
  {
    "url": "/_nuxt/pages/members/apply/index.ed67f29ee0d40f7d7db5.js",
    "revision": "cdd9845bd6218dc2d1b8b7ecb4d6875f"
  },
  {
    "url": "/_nuxt/pages/members/confirm/index.50ffc814166a0d73b921.js",
    "revision": "f16ee77f3463f610ea1d278d37e29267"
  },
  {
    "url": "/_nuxt/pages/members/index.d10bd8c6a682da60bed9.js",
    "revision": "35e9a9cdda6cfa7d62c257e712a2fac1"
  },
  {
    "url": "/_nuxt/pages/news/_slug.c5fc7870c81dceb5514f.js",
    "revision": "cbdce752052082bbd4f49d044f675374"
  },
  {
    "url": "/_nuxt/pages/news/index.334a897762f5be19e8af.js",
    "revision": "06c6ad34f727fa891fe307da3d76f7aa"
  },
  {
    "url": "/_nuxt/pages/news/private-presale-sold-out/index.01c63e888b5d1bc0c7cf.js",
    "revision": "29e3ec4cb557456bbf3c1c36f7611042"
  },
  {
    "url": "/_nuxt/pages/newsletter/cunfirm/index.98c4d0be8bd07dc8c179.js",
    "revision": "73b778c061e40d268d53deee06236d08"
  },
  {
    "url": "/_nuxt/vendor.9a5fcc5350c88776164e.js",
    "revision": "1a460e5f08679ad309bb27029ac9a6bc"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workboxSW.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.gstatic.com/.*'), workboxSW.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')


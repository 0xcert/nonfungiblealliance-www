importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nf-alliance-www",
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
    "url": "/_nuxt/app.77760d98c53ed4ea9f0d.js",
    "revision": "91df7b32a5735fc525184251a17fa608"
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
    "url": "/_nuxt/manifest.b15c9deee2634739839d.js",
    "revision": "7356f62d66e52186b881fce750168b07"
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
    "revision": "6878bdd3a87c5657a0a7b75c10e6f841"
  },
  {
    "url": "/_nuxt/pages/index.afd0590da6156c53fe96.js",
    "revision": "a83fe86dc08d43340889de6df0036ee6"
  },
  {
    "url": "/_nuxt/pages/members/apply/index.3be30be0d24eaa4533c3.js",
    "revision": "a0aafb3b85dd456ed407224f54461827"
  },
  {
    "url": "/_nuxt/pages/members/confirm/index.b454b755c3122485ee7d.js",
    "revision": "7a37855868b053c3ec0d466f0b06c530"
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
    "url": "/_nuxt/vendor.316379e927f2d25be31d.js",
    "revision": "10a78cec7fee9787793a9cbda75a80b7"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workboxSW.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.gstatic.com/.*'), workboxSW.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')


importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "0xcert-www",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/100.f8a8d60f2ad2964e72a9.js",
    "revision": "c4ea15d958772dd75fa77913c6a8c50a"
  },
  {
    "url": "/_nuxt/101.9febdaf4a640fd5106a2.js",
    "revision": "e88e65d0d53152f4e2a8b3ced97c9841"
  },
  {
    "url": "/_nuxt/102.2a2699d133d1681fa1ec.js",
    "revision": "3701642c31a930d2d0ab0651cabedd84"
  },
  {
    "url": "/_nuxt/103.10976358b91f68d259d8.js",
    "revision": "7da9d9cf38693c710b9d71656e3145e1"
  },
  {
    "url": "/_nuxt/104.d2225cc8b4b521a5dd4c.js",
    "revision": "0c6f98dcd6d004dbbb77d7d6cff10982"
  },
  {
    "url": "/_nuxt/105.2695d1afe24212f41a50.js",
    "revision": "d5af1bcc43a5c2f15dd918faac6ac46c"
  },
  {
    "url": "/_nuxt/106.48a84eb4883bb8c6f904.js",
    "revision": "95eea54859c28d66ac1763b22f58b4a7"
  },
  {
    "url": "/_nuxt/107.8abf17ed809973236b11.js",
    "revision": "86157e73afe40a4242289707ea46f88c"
  },
  {
    "url": "/_nuxt/108.17c058d7753c44632939.js",
    "revision": "adbb1d864b1d2d0d56930eaa594b2c51"
  },
  {
    "url": "/_nuxt/109.8344472f62b160819e48.js",
    "revision": "1605d5df6657e18c5075c11f79942966"
  },
  {
    "url": "/_nuxt/110.28b5598b2d94839e057e.js",
    "revision": "fbdc1a5f38dbb2636c44d10558a6da18"
  },
  {
    "url": "/_nuxt/111.a649a018242af1b74920.js",
    "revision": "ec9c75735c288bd9a01111c5f30e042f"
  },
  {
    "url": "/_nuxt/112.faa452e54953520c2ceb.js",
    "revision": "5f55a39e86bdb4f06c66592cde2c0e58"
  },
  {
    "url": "/_nuxt/113.6531179d749c708bfcea.js",
    "revision": "ef866a4d726b142a808b518e724f3286"
  },
  {
    "url": "/_nuxt/114.12bcdb7bcd11f48b1bb4.js",
    "revision": "bd70c8714941ec619d7fd0847233cd5d"
  },
  {
    "url": "/_nuxt/115.f4fd616554ff3277874e.js",
    "revision": "d9384c2fb7910c8823f377071e0a09b5"
  },
  {
    "url": "/_nuxt/116.0b80e298dc684c3d5ed4.js",
    "revision": "cae7aa658dc3c9f04dc33b055298b2b2"
  },
  {
    "url": "/_nuxt/117.5741c4d66c05718707b4.js",
    "revision": "da62a961698c48bd2dc3298692d24603"
  },
  {
    "url": "/_nuxt/118.7909cb56e296229f4790.js",
    "revision": "7367718714c28a493924ad01575658b5"
  },
  {
    "url": "/_nuxt/119.d26c9ce0b0dcf59aaca6.js",
    "revision": "bd0cbfd188c997b60e801b8964ee470b"
  },
  {
    "url": "/_nuxt/120.1521bbafaeecb098b9b5.js",
    "revision": "e7613dc88677f8e31d9e76f8e55ff090"
  },
  {
    "url": "/_nuxt/121.b15c9030bf16b3e50fe1.js",
    "revision": "5acce558af7926c13a720963f0057023"
  },
  {
    "url": "/_nuxt/122.28eaed444931f581fc2b.js",
    "revision": "a9d5da5e7e2435b91b725afab8e30046"
  },
  {
    "url": "/_nuxt/123.9a9f3e01be5c4306b6ff.js",
    "revision": "05e71503156ce5bb502fe3c0e6c76448"
  },
  {
    "url": "/_nuxt/124.60568c385c780f91bc39.js",
    "revision": "cf3e88705460a8c67bb5f1ad82ba9bc1"
  },
  {
    "url": "/_nuxt/125.0675c2b1e4ecd4f975e5.js",
    "revision": "668cf044c7d71d8b1475bdff42ed51f6"
  },
  {
    "url": "/_nuxt/126.8521b4ae95cf598c36b5.js",
    "revision": "de0f4e885933e667652c502a8cf8ec25"
  },
  {
    "url": "/_nuxt/127.d36de3b71aca621d16ea.js",
    "revision": "f98c2315da3d953f967015a78a8f2585"
  },
  {
    "url": "/_nuxt/128.37ac7a46bb4923976ee5.js",
    "revision": "e14ddc9113b0199702ca951ff58c1e76"
  },
  {
    "url": "/_nuxt/129.2b4fd8ce7d99207d46e3.js",
    "revision": "a20d93a507f32964230a9268109c60f3"
  },
  {
    "url": "/_nuxt/130.025125c34d44c5ad69c0.js",
    "revision": "71b0cf5a10baa74b4a362c990d125568"
  },
  {
    "url": "/_nuxt/131.d53acc87b6b9d0d023f0.js",
    "revision": "f8bbcd26b91cab5793fe60501b5ebd37"
  },
  {
    "url": "/_nuxt/132.8dff7f52b6e721bd4406.js",
    "revision": "3523876719620ffbe4a6395b182ea3d2"
  },
  {
    "url": "/_nuxt/133.5b34e1f7c11ea0a87ea7.js",
    "revision": "499c7daef3fc8b24d70ecaea682c6647"
  },
  {
    "url": "/_nuxt/134.43e87b79d98b00be5b23.js",
    "revision": "a7124f2fd460d5bee8806b2643ccaa4b"
  },
  {
    "url": "/_nuxt/135.9c12b980c0ba142e00b0.js",
    "revision": "e7c5929e2e40c75890c160a9573c882c"
  },
  {
    "url": "/_nuxt/136.844a3bd6d4988a25fffb.js",
    "revision": "4ceda0ac1e1ffda8c732e103064d9f64"
  },
  {
    "url": "/_nuxt/137.2f93e61911b4615857c2.js",
    "revision": "94922d90d2d22cd81338b18810335f7e"
  },
  {
    "url": "/_nuxt/138.e2a82df32bbe8792d116.js",
    "revision": "69f17ac15f3a8ba6c865c48d5f9752cd"
  },
  {
    "url": "/_nuxt/139.2316b149140cc0479319.js",
    "revision": "ce83e8c3935b273ed3fb6c51952379a9"
  },
  {
    "url": "/_nuxt/140.364eb22cc8c2b65f1e4b.js",
    "revision": "d52cf7b2708cd9c2b189304feb6dceea"
  },
  {
    "url": "/_nuxt/141.c785ff3089a7f4aba2d0.js",
    "revision": "3c62de5b1363e321828aebe454afcde8"
  },
  {
    "url": "/_nuxt/142.fd700063062f268bc7c9.js",
    "revision": "9463b25b86025e885e8eed3ae20f296f"
  },
  {
    "url": "/_nuxt/143.a88f4b5f0d7ec376c086.js",
    "revision": "69b233c463aced2ecca832086cc9ca3f"
  },
  {
    "url": "/_nuxt/144.c91fc6c5354bfe93d132.js",
    "revision": "4a47282e0aea40a8450b4360c9845ae8"
  },
  {
    "url": "/_nuxt/145.003173b4ae14517bdf9d.js",
    "revision": "980a0ce0c1fe0742039fc4220f2e4507"
  },
  {
    "url": "/_nuxt/146.e29449a5f27ed6eb7764.js",
    "revision": "9726664d483733158411f25c862f67b0"
  },
  {
    "url": "/_nuxt/147.9f4ecdf95e76af76938f.js",
    "revision": "58bef4359b01ee934527686a6075e150"
  },
  {
    "url": "/_nuxt/148.4b37ba39364c8d3dcc51.js",
    "revision": "54fda575d5bb65cfb15bf989cdb2c58b"
  },
  {
    "url": "/_nuxt/149.6ba6f24729904bfdab10.js",
    "revision": "33ad47f74f9054ec751eefcc23df9c4d"
  },
  {
    "url": "/_nuxt/150.01bec1135e7d07c6bb27.js",
    "revision": "c76d47cca4656cd8014b610cab3830af"
  },
  {
    "url": "/_nuxt/151.8488c1e2bc40b6768911.js",
    "revision": "2cf86980afe13d5357c68e6367886908"
  },
  {
    "url": "/_nuxt/152.53eafabe2a954ec2ff34.js",
    "revision": "1d83af7c51d9427f91f4073c84c3b663"
  },
  {
    "url": "/_nuxt/153.a475c9ff63a90c661351.js",
    "revision": "c8334c0d682633bcca424258237d1475"
  },
  {
    "url": "/_nuxt/154.d41eff9a2c8b3d69f62c.js",
    "revision": "d0eee1bfd85149e5fa37f38b746dfe4a"
  },
  {
    "url": "/_nuxt/155.133c993c7f5941a36465.js",
    "revision": "e4f14369c642e4a64fdb882878e1ff4f"
  },
  {
    "url": "/_nuxt/156.46efb90ed032f5c38136.js",
    "revision": "aa999eed3fe68c17ca11117804dc2f21"
  },
  {
    "url": "/_nuxt/157.3a769899a85935f26a40.js",
    "revision": "86aef5777182d982c78af15c9e51f274"
  },
  {
    "url": "/_nuxt/158.a44012aa22d36f48b688.js",
    "revision": "56d91baf5ec3135a985dae979279c2c2"
  },
  {
    "url": "/_nuxt/159.5aed34a561d4871d329a.js",
    "revision": "49680322c0030a6e47a6313b7b5bd991"
  },
  {
    "url": "/_nuxt/160.89ba679dd0cdf8e3b9b7.js",
    "revision": "3efc408e1433bb8bf0d93baa32947c60"
  },
  {
    "url": "/_nuxt/161.af8d391bb443225479b4.js",
    "revision": "7fa9eb678d8ea17cacc92b4bfb6d2615"
  },
  {
    "url": "/_nuxt/162.71d010700e68d646f9e8.js",
    "revision": "721502dc492e234ff55e2876d632de38"
  },
  {
    "url": "/_nuxt/163.83edf3f9d2e554f99bae.js",
    "revision": "3af96003e1619e405bc1314dc836d2b2"
  },
  {
    "url": "/_nuxt/164.ef943aec5d003bd63a27.js",
    "revision": "174a824bcfd26040293f8ad45e49d22a"
  },
  {
    "url": "/_nuxt/165.35440ee0f3828a01e27f.js",
    "revision": "ee44096468870180123bd1100e01ca6a"
  },
  {
    "url": "/_nuxt/166.1193dedf5dc33a8cde17.js",
    "revision": "f344c39f1daa381f2d1c270e2490cd60"
  },
  {
    "url": "/_nuxt/167.b05df0b059c0936399ff.js",
    "revision": "0715851719dc7f9f30a6c3f8695e04ea"
  },
  {
    "url": "/_nuxt/168.4e0e344dfbcfeb85d8ad.js",
    "revision": "38ab376efcc4e3aaee95fe1fadbe94d3"
  },
  {
    "url": "/_nuxt/169.8b13cb5b9740ef8f3c10.js",
    "revision": "97791c267da960efd3031746031b41c7"
  },
  {
    "url": "/_nuxt/170.2b3594cc8b9cc751fd34.js",
    "revision": "274437f1eae3fccbf8c54762bb94407a"
  },
  {
    "url": "/_nuxt/171.48c1958c1f34c3ec3fa0.js",
    "revision": "401da66e564145dd270e2b85e7019c5d"
  },
  {
    "url": "/_nuxt/172.86c5807149c3a1ef6dbb.js",
    "revision": "0fb11125eaae39487f547426a6d9912d"
  },
  {
    "url": "/_nuxt/173.6174841334cbabe7f3e2.js",
    "revision": "bd916f316380c4cd894cb5c712e3d5b1"
  },
  {
    "url": "/_nuxt/174.d7e8be967f5b9764191f.js",
    "revision": "d176a9396f5b3fd8c55f9221dffd0e7b"
  },
  {
    "url": "/_nuxt/175.aec880e68f1f102064d8.js",
    "revision": "7d55d06aa4cc81c2f63c154ad74bc1b2"
  },
  {
    "url": "/_nuxt/176.b28438ea4d4b22ce0e07.js",
    "revision": "b1e0036f95db4af44a03f67824744d2e"
  },
  {
    "url": "/_nuxt/177.62968b65435a61a65786.js",
    "revision": "007fd7e7976f8baf963fcf9afebc8798"
  },
  {
    "url": "/_nuxt/178.faafd936ed794e7ea348.js",
    "revision": "4f29f5ad67c1b807986fc0abac64bd1d"
  },
  {
    "url": "/_nuxt/179.acd19bdba06e7b5c7042.js",
    "revision": "5d0e730fa8637e989799b05d62232795"
  },
  {
    "url": "/_nuxt/180.f7988960b7815fe10307.js",
    "revision": "591fcfc433d65d472127ee19d6c275ad"
  },
  {
    "url": "/_nuxt/181.4e0865a5026329c6b191.js",
    "revision": "be87d26150010246a6f4faad5c2ae9c5"
  },
  {
    "url": "/_nuxt/182.49898bc368460e84f581.js",
    "revision": "a53f0543b9a07c133a65157ba1dba4aa"
  },
  {
    "url": "/_nuxt/183.95134b5fd01326172960.js",
    "revision": "47def4b12bafee4b14cc2d7a0e37c316"
  },
  {
    "url": "/_nuxt/184.5eecfd9574252e863310.js",
    "revision": "1f094124d97e49643c253f1dc65895b5"
  },
  {
    "url": "/_nuxt/185.1c2946ce942bec342f3e.js",
    "revision": "83ff730642f61f732eccc51e4494902b"
  },
  {
    "url": "/_nuxt/186.9910c6caf99fbaf2b1ed.js",
    "revision": "7a07243af5b345cc6d9c86b77db29b02"
  },
  {
    "url": "/_nuxt/187.cfc303bc3327fbc7271e.js",
    "revision": "f940a88455ec2b6d244160dafbe58059"
  },
  {
    "url": "/_nuxt/27.eade1fa2c88bacdb4f90.js",
    "revision": "becfb04de32d071cb055e242544ef670"
  },
  {
    "url": "/_nuxt/28.376365f7e1dba9bdf8eb.js",
    "revision": "4ab993ee9a5666ef1928ab3fe82f0d26"
  },
  {
    "url": "/_nuxt/29.75006ab301ad82562d49.js",
    "revision": "5967eae1faab64b56b521f488546538f"
  },
  {
    "url": "/_nuxt/30.d610820760a2a29e1485.js",
    "revision": "1e54d215b444bc6e0f9c865d40a5e713"
  },
  {
    "url": "/_nuxt/31.64e802de4b16ac1e9ad9.js",
    "revision": "861981b1349e79e9d9142f8605d15dfe"
  },
  {
    "url": "/_nuxt/32.aa6fe043e44e295c123e.js",
    "revision": "a512345cddc511cb3c7a3101e7a206a5"
  },
  {
    "url": "/_nuxt/33.8498894b8fc97902519e.js",
    "revision": "6b1ad3dc285cecc097a6364434f0d7e2"
  },
  {
    "url": "/_nuxt/34.86c52de548a5db75e714.js",
    "revision": "7397f4e1c36a30c51297b33004039b74"
  },
  {
    "url": "/_nuxt/35.97922cd195d17040a973.js",
    "revision": "fd38c162e16e6daba7dbb4a5ef7b696e"
  },
  {
    "url": "/_nuxt/36.fff1d4df028a986093c5.js",
    "revision": "9663306e6b367a176749fedb1509a378"
  },
  {
    "url": "/_nuxt/37.fcc88362ba91a39e83c7.js",
    "revision": "e517d1d5adb231fde5b3413b2e23a310"
  },
  {
    "url": "/_nuxt/38.67a3d44c411b0fbc7329.js",
    "revision": "08a5f92bb3ec1960de021e405d23462b"
  },
  {
    "url": "/_nuxt/39.efb877b7aabc9ac25eb5.js",
    "revision": "2583217fe9e1e1415b6daf0e1b9d7ae0"
  },
  {
    "url": "/_nuxt/40.f98b5f3ffe2e0418823a.js",
    "revision": "50def6667fb6bf5acfc2cb295fd244ef"
  },
  {
    "url": "/_nuxt/41.9f81fe402779e0401bea.js",
    "revision": "91e62600f6df13c0534f13aa69390aa4"
  },
  {
    "url": "/_nuxt/42.a298fd64ff6dbfaaa80b.js",
    "revision": "a8f6b99d020164f60a686c7c835829ea"
  },
  {
    "url": "/_nuxt/43.9b6d875d9d97fc89cfa2.js",
    "revision": "1d00d099ba6617ae1904559f9a739e13"
  },
  {
    "url": "/_nuxt/44.9ed6e8c72712eefdb8d3.js",
    "revision": "f101cc61e51136e69f00369d5c436acb"
  },
  {
    "url": "/_nuxt/45.a7d0b739ea1d6ec7679d.js",
    "revision": "b211a7f00bba49ff1a529e1bfce7c6e9"
  },
  {
    "url": "/_nuxt/46.abe503067f008b409fa0.js",
    "revision": "a7b4bfa1b000b1b9acc3e56acb77b539"
  },
  {
    "url": "/_nuxt/47.352acde1924fc6fab6c3.js",
    "revision": "408c58be7b5408c31af38f8bf463358f"
  },
  {
    "url": "/_nuxt/48.64d0a38e974fc71790ad.js",
    "revision": "5d2446d3ce2d95874b78c3e9f478b80c"
  },
  {
    "url": "/_nuxt/49.51bd2107129d7c4a5b48.js",
    "revision": "d5a2abba37ffe28fa31ec675b8e117aa"
  },
  {
    "url": "/_nuxt/50.e4d60af94c08df01c235.js",
    "revision": "3ad2273e15a8a27e095a702805d01bd7"
  },
  {
    "url": "/_nuxt/51.84c65b21063c1e5d4f17.js",
    "revision": "680bd48ba9a24c8241c651c9a40cb8a0"
  },
  {
    "url": "/_nuxt/52.5cb75a6f9c18928799dd.js",
    "revision": "bb4347dec8092d921adc33c55d5bc3e8"
  },
  {
    "url": "/_nuxt/53.fff81aa5377ce1ce5988.js",
    "revision": "e4dfe5d395f45fef8791a3b3cd4a3f70"
  },
  {
    "url": "/_nuxt/54.6bfd05d4bca8192b01d6.js",
    "revision": "35bb95be6ffc6ab285179aceee101795"
  },
  {
    "url": "/_nuxt/55.49909c669a305f6dd8d7.js",
    "revision": "09a6d792ab6aaaf2d70c9dbd752d9ea9"
  },
  {
    "url": "/_nuxt/56.87da4dee9eafd07bdd33.js",
    "revision": "4e3a144e672b19ea5c4459eb7331b01a"
  },
  {
    "url": "/_nuxt/57.1b52ca6f61fad406e842.js",
    "revision": "630fc5e40501e910eb9b88ec68c079a4"
  },
  {
    "url": "/_nuxt/58.ed6df71190672796cecc.js",
    "revision": "02f3f16e2b32946c8fe8b3ce0c116778"
  },
  {
    "url": "/_nuxt/59.efb3e33f689b8760d9a7.js",
    "revision": "ab066e50c9585a116e3b2029e20eb2d1"
  },
  {
    "url": "/_nuxt/60.0956204f58775e04bc56.js",
    "revision": "bb3c03bb72b82b4bda52afc1f31b2b2e"
  },
  {
    "url": "/_nuxt/61.0aec731654f706f6772c.js",
    "revision": "8da9f4619b33a9837b2e8f18485228c1"
  },
  {
    "url": "/_nuxt/62.715bc40db30ee5010c38.js",
    "revision": "5608f3671c46391a3a6d32aa0c08b195"
  },
  {
    "url": "/_nuxt/63.cd75d77449d73e69293c.js",
    "revision": "bf06ec0c8f229ea346b5c5ad5a831e09"
  },
  {
    "url": "/_nuxt/64.aaaa464f4c34fd497826.js",
    "revision": "3ccbd172f13ad8062aefdb20de4704b0"
  },
  {
    "url": "/_nuxt/65.349ce74c38c19f2e0d9a.js",
    "revision": "62ce43abefa6cf674306275098f83b6f"
  },
  {
    "url": "/_nuxt/66.ca9adb5004dd82b75387.js",
    "revision": "d61ff20ef5a3ce15f617a32d59ab8869"
  },
  {
    "url": "/_nuxt/67.17507cf22d6369f9e653.js",
    "revision": "ebcb600c3fd857d2d2f40595cec65f93"
  },
  {
    "url": "/_nuxt/68.fe367e9a7cf04dbd85f1.js",
    "revision": "e04067b1672700535a3726b6792b529c"
  },
  {
    "url": "/_nuxt/69.b0b791c55ae7bb852818.js",
    "revision": "46c397d910569629c6c90ec205ba5e78"
  },
  {
    "url": "/_nuxt/70.8c8cc3dccac03f04e9eb.js",
    "revision": "6bcf46858d8fb93ca0e6c825aae5a7bd"
  },
  {
    "url": "/_nuxt/71.a6234bd68d24ce21b531.js",
    "revision": "00265175fad7f933d2ea3450194d4d5c"
  },
  {
    "url": "/_nuxt/72.ae443f9d1dc0a0f2ea34.js",
    "revision": "716cb12936d6e7a320326ceb9d399244"
  },
  {
    "url": "/_nuxt/73.82e5a994c41c7f8094d7.js",
    "revision": "2da1504e886f3d4899b54edbec1ee97e"
  },
  {
    "url": "/_nuxt/74.7bb1f659ba182af1401c.js",
    "revision": "492af4ee724f59f13465c7eac283a44b"
  },
  {
    "url": "/_nuxt/75.8ad74ddb991212e7bf88.js",
    "revision": "6c33b9748be319ebcfe1c1238c8c3287"
  },
  {
    "url": "/_nuxt/76.f1515a0e60f8a2aa0ec9.js",
    "revision": "9db7ca2d06c5c07833af3cee2fc4a711"
  },
  {
    "url": "/_nuxt/77.c94eeedacc8a183d90b5.js",
    "revision": "d1e2d3a84efaae47096a4994e9b32672"
  },
  {
    "url": "/_nuxt/78.53576e0e0ca7b8f04b4f.js",
    "revision": "0b60a065481fda56c30439b562523298"
  },
  {
    "url": "/_nuxt/79.be3ec33c19139845e266.js",
    "revision": "51bfb6961ad10a1852c2e6405d40a105"
  },
  {
    "url": "/_nuxt/80.7e617fdea4b6acfbb292.js",
    "revision": "ce4a1fc1d3506913e2b61188a02f2764"
  },
  {
    "url": "/_nuxt/81.ebe0f1b3d2106d52da7d.js",
    "revision": "3bb77df9b6b3c4f7549599f46592cef0"
  },
  {
    "url": "/_nuxt/82.fa5046af2c8dd6a6847d.js",
    "revision": "ae19c32f368e33ed38fa51991c88e097"
  },
  {
    "url": "/_nuxt/83.a5d756598dad1f3c2365.js",
    "revision": "3d9977f6c4725f4f7d4be72a24d1ffd1"
  },
  {
    "url": "/_nuxt/84.eb2297b6155f2cad7dba.js",
    "revision": "9307b7b939acb210296456d0fbed821e"
  },
  {
    "url": "/_nuxt/85.82feaa66891afb05197b.js",
    "revision": "eed6100cbdd655ad10f4282f97399454"
  },
  {
    "url": "/_nuxt/86.c388e46e1d886f9f7528.js",
    "revision": "535890bb418d9e7fd5a21afb29e825a1"
  },
  {
    "url": "/_nuxt/87.bdc22a30f2b1bc5bced8.js",
    "revision": "098965259af026b9076aa669e486a7f9"
  },
  {
    "url": "/_nuxt/88.f11e1d0462e32ded2543.js",
    "revision": "e35957eb927f5238770acefbd2a3b451"
  },
  {
    "url": "/_nuxt/89.35af2bbae18db9e70586.js",
    "revision": "8bffd222caf5050afd905b6253a85819"
  },
  {
    "url": "/_nuxt/90.f152b7dabee04c65fc1f.js",
    "revision": "99ff96af0a730308327a74642b958086"
  },
  {
    "url": "/_nuxt/91.24c3cbe7d4897dbce7c6.js",
    "revision": "a24e17c6d1c93e830420195b7de1f871"
  },
  {
    "url": "/_nuxt/92.7a69f45077a6e4e404d8.js",
    "revision": "7543c4029c217aaf6eb411b8f45d8ef9"
  },
  {
    "url": "/_nuxt/93.aebd10be57ebecde8d89.js",
    "revision": "e7ab16a0b3a3a6be1c13b14d89bc8369"
  },
  {
    "url": "/_nuxt/94.a32ead2c34e74dc9da36.js",
    "revision": "dd31c50061faf9c7d0e6c6768fc65059"
  },
  {
    "url": "/_nuxt/95.12e04c3f8a59a73a2848.js",
    "revision": "5de46f8e34f7c33e60167f9c74df8695"
  },
  {
    "url": "/_nuxt/96.6e52b65429d580bfc50e.js",
    "revision": "a007f4be76977d0493b91d6a1864b4bd"
  },
  {
    "url": "/_nuxt/97.679b4e987f513b766bce.js",
    "revision": "71e9d13ddcb66a9ffd6b00606a12a34b"
  },
  {
    "url": "/_nuxt/98.429de7f39a9ecb81eeed.js",
    "revision": "08d9b8a8d80de4a7544e77b81be96193"
  },
  {
    "url": "/_nuxt/99.f3cac6b306ffc79cec03.js",
    "revision": "c49ae0dc151327fea9eaa24397b7ce81"
  },
  {
    "url": "/_nuxt/app.6de800096a01019c09cc.js",
    "revision": "14a7c203f58b2b7d00f29a6138736c8c"
  },
  {
    "url": "/_nuxt/layouts/blog.4efa17cc2ae339ce88ab.js",
    "revision": "bed03dac78c9709b91579df0a82c46a6"
  },
  {
    "url": "/_nuxt/layouts/default.e40b8fcbb9b9ed38ad21.js",
    "revision": "ebf115760b4ee2a7bf50c64de312e7f0"
  },
  {
    "url": "/_nuxt/layouts/empty.39064c4451165c86337d.js",
    "revision": "c331f2d760d48a89c03112518225bb22"
  },
  {
    "url": "/_nuxt/layouts/inner.7e375a95ced76d06d394.js",
    "revision": "e4be58f282cc14efef091bb16054f440"
  },
  {
    "url": "/_nuxt/manifest.008f0bc13f3e6abb377c.js",
    "revision": "ca6ca2bb2bdf5418509c0ce634e7b877"
  },
  {
    "url": "/_nuxt/pages/articles/_slug.6d24f4cfb4f78cfb26da.js",
    "revision": "15953da207ed583c58000a1690be91ad"
  },
  {
    "url": "/_nuxt/pages/articles/index.066131b0cbc850ee6e31.js",
    "revision": "44652e4a16c9ea7ae471d6fc4a8db62c"
  },
  {
    "url": "/_nuxt/pages/bounty/index.e9049466b76078abf4cd.js",
    "revision": "2ff70ab1dbaeb30e6b34bc6eedac3f1e"
  },
  {
    "url": "/_nuxt/pages/cookie-policy/index.6c4f4827557c0d959377.js",
    "revision": "810539240d336910b4551b2a8d3624cf"
  },
  {
    "url": "/_nuxt/pages/crowdsale/index.a3528dc9d6a31d49ee36.js",
    "revision": "7d2d5aa3165c5aeead3867099ec31abb"
  },
  {
    "url": "/_nuxt/pages/disclaimer/index.65e9e961f6cf2b5baf6e.js",
    "revision": "22346d2ababb0044070c8edf731c51c5"
  },
  {
    "url": "/_nuxt/pages/faq/index.e212a90a8d8287807201.js",
    "revision": "76539c3950bda6385dbb6c9182eb8125"
  },
  {
    "url": "/_nuxt/pages/hodl-love/index.437f95d6b0a64dae4101.js",
    "revision": "336c88da920970e141f40b34456e4bc8"
  },
  {
    "url": "/_nuxt/pages/hodl-love/subscribe/index.f422cbb31a2a8858163d.js",
    "revision": "6e346de4388723ee3a30b47ee7303088"
  },
  {
    "url": "/_nuxt/pages/home.ad9a1de3f0e3e3604c0c.js",
    "revision": "deaa9c3c3cb8fa94ea8ca0378f6d20e0"
  },
  {
    "url": "/_nuxt/pages/index.272725ca0545e2ad8520.js",
    "revision": "5ad1bc584270abb91f6973934ed1905b"
  },
  {
    "url": "/_nuxt/pages/jobs/_slug.6b371338d9c501fd1bd4.js",
    "revision": "3114bffaf4ebca99bbc2854f60c290fb"
  },
  {
    "url": "/_nuxt/pages/jobs/index.d4dc5b8fedda7a7ff513.js",
    "revision": "112d09ecad666d5e3aec26fef70499be"
  },
  {
    "url": "/_nuxt/pages/kyc/index.0c077d53299a394b5bfa.js",
    "revision": "9fddc7e5475e80ab6cf18a653c10c36c"
  },
  {
    "url": "/_nuxt/pages/news/_slug.eecbde3e6a0fd6c9298f.js",
    "revision": "baf90f7622d2c57d08fbecf1819b9f82"
  },
  {
    "url": "/_nuxt/pages/news/index.a105d89395ea3e0e8f13.js",
    "revision": "e721e6a2261d2c702dd2531c18024972"
  },
  {
    "url": "/_nuxt/pages/news/private-presale-sold-out/index.ac54c0ae07a73c607c18.js",
    "revision": "ef12f5cccd6d42b8a9c5dcee07e7ba46"
  },
  {
    "url": "/_nuxt/pages/roadmap/index.8c7f8c21703c78404c0c.js",
    "revision": "a57802aa80eb959023a38a65b60f31b9"
  },
  {
    "url": "/_nuxt/pages/subscriptions/subscribe/index.eac7ba8b21a4c4d62e69.js",
    "revision": "b1916c4270e4a6baf1ebf9f2cac458a9"
  },
  {
    "url": "/_nuxt/pages/whitelists/new/index.2807848554e2f399dd27.js",
    "revision": "02b8634ccd198adabd025a6b7ab1ad0f"
  },
  {
    "url": "/_nuxt/pages/whitelists/subscribe/index.ad8f61635ce727a5168b.js",
    "revision": "dfc03695d8802a4e920040a2c1e9b2cd"
  },
  {
    "url": "/_nuxt/vendor.4682d1f174feddb8fca0.js",
    "revision": "53958ddf302d45677dd840a33d292be8"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workboxSW.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.gstatic.com/.*'), workboxSW.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')


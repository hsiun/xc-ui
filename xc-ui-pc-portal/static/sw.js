importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "xc-portal",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.02339db9f2dd9b39d2df.js",
    "revision": "f7f2a3c93a108b8c7d1727950e6cec7a"
  },
  {
    "url": "/_nuxt/layouts/default.a7c4cccdfa7b35b8ae6e.js",
    "revision": "98523d28a2ed84d8d73fe98f9f57de49"
  },
  {
    "url": "/_nuxt/layouts/default1.e795ea2094e104d22ee3.js",
    "revision": "7ca7105a2a48b135c6c662c1b783da60"
  },
  {
    "url": "/_nuxt/layouts/empty-page.4da53b5907d6875f1c9c.js",
    "revision": "8fcb693116262b4bb18a29f1d91c18a5"
  },
  {
    "url": "/_nuxt/layouts/test.97c482ac55ca436952bd.js",
    "revision": "f533acd097cf4779319bca9dfeeb0db2"
  },
  {
    "url": "/_nuxt/manifest.cc769a7432bce798835a.js",
    "revision": "0da32da1583b76f50b8209b78ddbbfd6"
  },
  {
    "url": "/_nuxt/pages/about.74490f563bf52bcfd831.js",
    "revision": "4925297e196ba1d1b28c8eac2a51c2d1"
  },
  {
    "url": "/_nuxt/pages/course/search/index.3355015e0c3f200a33cf.js",
    "revision": "8c4b53140e7eb657899f9c268c14667a"
  },
  {
    "url": "/_nuxt/pages/user.86d0760924c0e9ac9c23.js",
    "revision": "8299854288aa04ba54dd693034e9aaf0"
  },
  {
    "url": "/_nuxt/pages/user/_id.9f5a2ad29ce306929430.js",
    "revision": "fc66b66c4cd2d032f167b40f4eb57152"
  },
  {
    "url": "/_nuxt/pages/user/index.3367f5bc84cc3f602206.js",
    "revision": "26a7a402fbe61b89b07c8ae155143e9c"
  },
  {
    "url": "/_nuxt/pages/user/one.0a1bc5bc7fa0d495f21f.js",
    "revision": "9eed656c5877ee80b525ad21fce79d6a"
  },
  {
    "url": "/_nuxt/vendor.39cfb5fda64d40897c19.js",
    "revision": "c2f5d05e577819418ebe353d1ac7cd2a"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')


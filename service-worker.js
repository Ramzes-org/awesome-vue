/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ec0a86eaff56cfd48690087e5ce5866a"
  },
  {
    "url": "assets/css/0.styles.7af2af56.css",
    "revision": "099d38a9318bb22544c4369fba2ff245"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.81037b9d.js",
    "revision": "ede132d3860095d761bd0486adf06e23"
  },
  {
    "url": "assets/js/11.68c9d64c.js",
    "revision": "fa3c299b7a76e8efbc1bf48f12604677"
  },
  {
    "url": "assets/js/12.77ffa490.js",
    "revision": "dbcd1db68e6ae5e15b4364e07649fd2e"
  },
  {
    "url": "assets/js/13.ed3e8d41.js",
    "revision": "7758c9fff1bc61705a1d713a840e3381"
  },
  {
    "url": "assets/js/14.16cf6059.js",
    "revision": "53854dc871001658f6ee437ec3ee96e8"
  },
  {
    "url": "assets/js/15.4f441e80.js",
    "revision": "90c3edfcbd0036bfcb4a3e6d838c50ed"
  },
  {
    "url": "assets/js/16.9db2d83c.js",
    "revision": "067c415433f9e10e3f7a51a44ce8ee1d"
  },
  {
    "url": "assets/js/17.94fd69cb.js",
    "revision": "307e4842ce8efd1c7d103a1b5a1605ef"
  },
  {
    "url": "assets/js/18.12fa10a5.js",
    "revision": "30e8b396b09f0876276a87c5ae35b0f4"
  },
  {
    "url": "assets/js/19.36df4a8f.js",
    "revision": "514d0b04f7f45ba07a98a0abafd01d29"
  },
  {
    "url": "assets/js/20.3ac63f5d.js",
    "revision": "53694c65bd68aa283af289bd8c910065"
  },
  {
    "url": "assets/js/21.bfd295c4.js",
    "revision": "ad656d61880079f38812b6a3cd4d00d2"
  },
  {
    "url": "assets/js/22.fc530588.js",
    "revision": "67d33c7af22445e3f6fb9ac849fc588b"
  },
  {
    "url": "assets/js/23.f378eae7.js",
    "revision": "a411fa383d10f38c6631928997780cab"
  },
  {
    "url": "assets/js/24.e2b3990b.js",
    "revision": "bf06fbbfbb2133178e7017faa6449a0b"
  },
  {
    "url": "assets/js/25.a2d449ca.js",
    "revision": "7a2b90b45e1a0a1a4a8065757c6ab59b"
  },
  {
    "url": "assets/js/26.35a751f4.js",
    "revision": "9220a5ae4c206f65fae3b2696b368ea4"
  },
  {
    "url": "assets/js/27.d6110d6b.js",
    "revision": "6d7d92b3d67795ff8258961ddb738d9c"
  },
  {
    "url": "assets/js/28.38213637.js",
    "revision": "46790743e31db0d2068d9b4b802bd83f"
  },
  {
    "url": "assets/js/29.b0c5df6c.js",
    "revision": "5535710e3d66c121852d3c14fec1df7e"
  },
  {
    "url": "assets/js/3.b1d6ac8c.js",
    "revision": "a3f24752b64e6a2255329d75ab853424"
  },
  {
    "url": "assets/js/30.8c5c4736.js",
    "revision": "499f833bc3af7646de405f3abc056281"
  },
  {
    "url": "assets/js/31.b823a7d6.js",
    "revision": "92423a4d31cdc6219de08186e1690d68"
  },
  {
    "url": "assets/js/32.fe004e33.js",
    "revision": "46abd4ea9e834864cb7a65ab94cc905a"
  },
  {
    "url": "assets/js/33.45cbc648.js",
    "revision": "b20d3e58ec8130bfea5bdee98fbe02eb"
  },
  {
    "url": "assets/js/34.7701c5c5.js",
    "revision": "2c582aa30faf374aab59e15caea8de8a"
  },
  {
    "url": "assets/js/35.8e31f679.js",
    "revision": "a7c6cdace67e0c3f0a277b46f5acfc06"
  },
  {
    "url": "assets/js/36.dde589aa.js",
    "revision": "46c267b548d74c8161c58d93d81daaa9"
  },
  {
    "url": "assets/js/37.18871a7e.js",
    "revision": "7144eb2224917ae4f09b7a07f5b04762"
  },
  {
    "url": "assets/js/38.970cfbb6.js",
    "revision": "e672fe5f5b1fa9072d2cb651d0e78446"
  },
  {
    "url": "assets/js/39.065e6344.js",
    "revision": "0c23ea535eefb4fb730969ed979d0f14"
  },
  {
    "url": "assets/js/4.e70bc8c6.js",
    "revision": "f480dcc13ce10ebf93a61890853bf55a"
  },
  {
    "url": "assets/js/40.dad114d8.js",
    "revision": "f8967d793f0089c65b483bae117a9762"
  },
  {
    "url": "assets/js/41.f3c87996.js",
    "revision": "bec3499f1b0cdd9c0330b5f454e49491"
  },
  {
    "url": "assets/js/5.c30f959f.js",
    "revision": "48f5f138dc1dc5d7d60cff112dd2864a"
  },
  {
    "url": "assets/js/6.b8dd4c54.js",
    "revision": "abef2c615473255cc94cc93a9dfdae76"
  },
  {
    "url": "assets/js/7.2035234a.js",
    "revision": "9093827393f89384dd002e27bd1145ed"
  },
  {
    "url": "assets/js/8.13ec205c.js",
    "revision": "d859c1a8f00b50df67dfcab3287263e6"
  },
  {
    "url": "assets/js/9.710524ce.js",
    "revision": "69c3dbbfa74e8efcf8d282351d6201a6"
  },
  {
    "url": "assets/js/app.b10f2151.js",
    "revision": "473a6f2f85d36e8d7c4f9daf415e64a4"
  },
  {
    "url": "assets/js/vendors~docsearch.8f557a18.js",
    "revision": "ef662aaa91359e958c134d8a0632def3"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "d0c0b6c50d716d26a889b0955aed91de"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "42f9d1ae3654c4f88b3b6d511f5dbeea"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "20d74c7aa4a2d43adf1aca7f7c7b806a"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "b0efd661e9fa411a6f7950abce8ed127"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "7d8362fba242e0bc63b214bb548774dd"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "1d176e2daf0fddfe3c2aa685cb4b73bb"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "4fe7199e055caaf8fc55b71b5e4ad5c5"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "086d5e80b5112124e86c92595b148c15"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "5142f796a89143b177ce96aaaf173096"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "d5c2abcaf93cd1e23df9e40982f98969"
  },
  {
    "url": "googleb0cb4a6e76619924.html",
    "revision": "997b21b41e019120a987acc0a2de5a22"
  },
  {
    "url": "hero.png",
    "revision": "b0451959428f1596d579dd0a4165e5b9"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "18bd5130d1d2c560f7a64a810f10b567"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "ca0e5ccce3e6597c6a92389767d386f2"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "a0a146811db506577fc59becb1e9df8a"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "eaad287782a03fec4918c03df6f2b1d3"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "81480ca682e35a952f4d63bea5471718"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "200d639632824824997b3658a17ae3ad"
  },
  {
    "url": "index.html",
    "revision": "961476ebfdf58ad6afc5dc52b8b791d5"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "ac61c64421d1f85dd4ed093549853ba3"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "2571f183aa9cb2493b38f7c1a8a512a7"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "f2d7c9b83dae29cd25a27c2b9b18d78a"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "cb6307f5d8fbb88e2a25763efd7691fa"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "c56fb3b7510f5c94352957e545cc8a35"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "18a9aabbf0b54651cfba65e6bbc26767"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "e4372d1b9cabf1284c68f524315c0113"
  },
  {
    "url": "resources/books.html",
    "revision": "872d04ec145b5bc1abc0ae2dfb10e1fa"
  },
  {
    "url": "resources/community.html",
    "revision": "250e1e864e0a7507bc53b03429d5809e"
  },
  {
    "url": "resources/conferences.html",
    "revision": "9c2a7345786f2f78b9c4d52b989e02ce"
  },
  {
    "url": "resources/courses.html",
    "revision": "62221c2052b1bfedf782fbbba19c518c"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "0a210ba688c6c09db6fcef827d1a543f"
  },
  {
    "url": "resources/examples.html",
    "revision": "481c34a4697eef45d458d1b3d1188892"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "6405c2861f98456d22d7760422259399"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "34106dc3faba9b5b51359d0d0a97c947"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "3ef50f3e1f7d3f9662fc3ac39883770b"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "d45fb709cec7a86cbf1bf674d40f7c52"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "7a73948732c755bf86133c272eae89e1"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "fb62d1209723ffd0ad57979381cd6b46"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "7741736b9355621487b27e09841291f3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

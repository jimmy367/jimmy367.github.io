/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2017/06/21/make-php5-dev/index.html","56f7e6e962ec8edf191f9b43c4b2b9bd"],["/2017/06/22/simulator-and-emulator/index.html","f9cca5d937c67a48f6ed9366e8393208"],["/2017/06/23/simple-git-command/index.html","28f10757f35f4a3bf6606877764b93b9"],["/2017/07/07/odd-number-factor-magic-squar/index.html","f203c8c9228d26520d116bad1dd9005e"],["/2017/10/07/math-100c/index.html","4093004b8455b85d7f3a07968e90c824"],["/2019/04/11/api-mock/index.html","6814de87f5800d8ac6f0b659d400c902"],["/2019/04/15/learn-angular-part1/index.html","561788e4013c3bb5bfc9da7bd52e888a"],["/2019/04/16/learn-angular-part2/index.html","5ff104d1336bcef59a71eec6c96f0c5c"],["/2019/04/18/classic-quotations/index.html","f8ea88d829e3772ddae4578b74cac3d7"],["/2019/04/19/learn-angular-part3/index.html","70644658ea4be940ccb6ecb0cf74906c"],["/2019/05/22/learn-angular-part4/index.html","083c411b900ca497266eb558680e9230"],["/2020/02/20/classic-quotations2/index.html","65b619f45d7a6195d6e8e5516a5d6ba5"],["/2020/03/22/Execution-Policies/index.html","a251b54f6a743b533def80c9165a5c74"],["/2020/03/22/hexo-github/index.html","7993fe140ee424f51a877a3be4204410"],["/2020/03/22/use-nvm/index.html","7e3574e66473ba7e0990013c08e283ef"],["/2020/03/27/modify-post-data/index.html","88a0b4d2d9e49b293690617f9d060f80"],["/2020/03/31/docker-install/index.html","2f9c743a10d5495db1f05d98aa726683"],["/2020/03/31/vmware-centos/index.html","277d58ae5e985e1cc52a5eaa4de7c349"],["/2020/04/01/gitlab-cicd/index.html","afb23fdc1abcf44928b35024379caf08"],["/2020/06/11/classic-quotations3/index.html","cb9156a20055d86327911c606640b658"],["/2020/07/07/it-quotations/index.html","277368d834ac95501acd06539352aa65"],["/2020/10/14/classic-poems-md/index.html","29a7b09b475c89a7513f7d8ae15ad8b8"],["/2021/03/11/nginx-setup-intro/index.html","f3c84d194308419037257dfa4d225239"],["/2021/07/29/classic-quotations5/index.html","cf6da32bf6517126135cbd4632226b84"],["/2021/10/22/vite-5173/index.html","aeffa44a278013de0f8e4fbb6892dd52"],["/2021/11/22/yarn-command/index.html","a3f5e80127bb1435cadbc2fa1644127b"],["/2022/01/11/classic-quotations6/index.html","cc14f1cc10ce40d7f5d29a8e7503af81"],["/2022/09/28/make-nginx-tomcat-dev/index.html","add7fe78f8f1a13d7de1dd7c427d5cb7"],["/2022/10/11/classic-quotations7/index.html","eea33a3a87e553a2bdd4bc7abff4d8cb"],["/2022/11/15/go2048/index.html","31931f51087dee60d368ba01f84df5b3"],["/2022/12/07/quasar/index.html","63e7f61582197154123cd40e60f538e5"],["/archives/2017/06/index.html","8bb66b90ce50104eacae0cdff95578e4"],["/archives/2017/07/index.html","abf6609b420e580a8e5f6479b46e1aa6"],["/archives/2017/10/index.html","a7eeba4937932ccf891335646159b30f"],["/archives/2017/index.html","1b000250c39ef2620413cf634024f118"],["/archives/2019/04/index.html","4d4ade9759784c604a3d491b549da8aa"],["/archives/2019/05/index.html","6897612b9339259d42c1321af4f14dd4"],["/archives/2019/index.html","e50b4b003fb6cb7cdc759a9edf199505"],["/archives/2020/02/index.html","33e62d51a5db488ba6b64b4001afa817"],["/archives/2020/03/index.html","00de3951366979096ba518b2775bbbd6"],["/archives/2020/04/index.html","59ad4da596f0e26969c60a6da9bae898"],["/archives/2020/06/index.html","5c734ea9c3111aa276566acf2e6ad47d"],["/archives/2020/07/index.html","7660e9c08b3381eedcfc4e619e7d8064"],["/archives/2020/10/index.html","453738f37810b56a8388bdd1713df564"],["/archives/2020/index.html","2fb9590ea8318d41e1d3bdbee973b5cd"],["/archives/2020/page/2/index.html","41e9c70d574fc216ef092a502d6fc934"],["/archives/2021/03/index.html","d7fb6f19c40b15b55aa0d8a5d6b9009c"],["/archives/2021/07/index.html","b4166fa529df8343c6f74be3e7a613c6"],["/archives/2021/10/index.html","be80b1fdd3d5e1d5461cb4680faa304b"],["/archives/2021/11/index.html","54662d896cd81af5517e44ab4d9247ae"],["/archives/2021/index.html","c1d954f42a9301177a50e46285f80437"],["/archives/2022/01/index.html","b04a34c58cb6ceedbc5f16bf754cb544"],["/archives/2022/09/index.html","1c267fd7e8ba2727ecaecbb266a74741"],["/archives/2022/10/index.html","8264937595093bc945101fdd0aa7a6a9"],["/archives/2022/11/index.html","34b286dd92558edfc53d1983b40dc5f9"],["/archives/2022/12/index.html","9964d58fb4b21cc7eb0fb8a87df1ee31"],["/archives/2022/index.html","53d9972e72a2196244aff7170cfb114a"],["/archives/index.html","919332319fff82dc82ad57ae187eb8a4"],["/archives/page/2/index.html","05d52467f4ec4989d3ec7a4bbf06472d"],["/archives/page/3/index.html","98892671b9be78489f8f6332c6e375aa"],["/archives/page/4/index.html","2d771e787a7ce53c340de7d30e5bdc86"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/IT/index.html","74131661c3cf8275925ad92b117a6335"],["/categories/Web/index.html","b8dd1d20e04b1981668eedf838ef019d"],["/categories/Web/page/2/index.html","dade404e3f115bb03c3c639eaf059bf2"],["/categories/Web/开发/index.html","d099f87d8231bd12c540dee13c51ce34"],["/categories/Web/开发/page/2/index.html","7e2c7e064d5ada7656f0dc4e6d692447"],["/categories/index.html","72c5c698f7de2a3bce8baea84b764da1"],["/categories/只言片语/index.html","c68b13c67dad187f62cb25c12f5e6503"],["/categories/名言名句/index.html","9ded502b15a69596bc8986eaf34a33a0"],["/categories/开发/GAME/index.html","5a789469d96f6816340b44121179e506"],["/categories/开发/index.html","b5b89fc4caaaa24bc16bff97b93ad8e8"],["/categories/开发/quasar/index.html","25d740df915a523a86a3937b393a265c"],["/categories/开发/环境/index.html","2fc9a119de688a9a9c0f97d462dc4dbc"],["/categories/开发/项目管理/index.html","f8b4d6be392c81a2bda4a956858e8d0c"],["/categories/搭建/index.html","04d71a6c578e8914743d778c8f02d8c9"],["/categories/搭建/个人博客/index.html","de2ee5720b43c30c7e6f82f1603b98e0"],["/categories/数学/index.html","7d73ef623f0ec960415bf4c132571380"],["/categories/数学/算法/index.html","485c07902b0a6dff8fb0cc446e0f1832"],["/categories/移动/index.html","03999609948d9547844981f997906556"],["/categories/移动/开发/index.html","002d62981db21edb8099d1a584823923"],["/categories/系统/index.html","38f806ee40210247b181fab40c46541c"],["/categories/系统/设定/index.html","302b62eeece94b9a9ed385b705287da7"],["/categories/计算机基础/index.html","8afad32a80259631e6bbde656e2c10c5"],["/categories/计算机基础/算法/index.html","445990312e11b92227ca9b22da21b9e2"],["/categories/资产管理/Git/index.html","a06ccdcbd92d7499a756e3ebe5b956cd"],["/categories/资产管理/index.html","aafbac8a3e10578bf9a13da263633d0c"],["/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","789f9c9f355db21f95a38b3bd3080ea0"],["/game/alegeb/assets/index.1fd69727.css","312469eebbdab4c482e7bb1e11715204"],["/game/alegeb/assets/index.4bd4fa98.js","76c8be9e73b7a6811a9035ac0aeb7d99"],["/game/alegeb/index.html","ff008e5712317312f927748a4879832d"],["/game/alegeb/vite.svg","8e3a10e157f75ada21ab742c022d5430"],["/game/index.html","1364b1df15c2960dbab518338fa56096"],["/game/sortnum/assets/index.70e223c2.css","642d6a3097b9e86dd2e2cddd3c3be7c7"],["/game/sortnum/assets/index.b149f31b.js","abf1a0c881f2b8c228a92ac05cb1a623"],["/game/sortnum/icon.svg","b6cbc75c21422cd9d2b07bd5c1fccb4b"],["/game/sortnum/index.html","22c31481b0fc2f5f951c22f06b43171d"],["/game/v2048/assets/index.4ae8fdc4.js","15b2b2fa206d3d1f799478b41d0fc539"],["/game/v2048/assets/index.8b3013eb.css","a82811291a800112da80b379808db8a6"],["/game/v2048/index.html","e1e60885326b7b586a49a5b28fbf92df"],["/images/pwaicons/144.png","efff21439c827d34d0cc72b2dfea6043"],["/images/pwaicons/192.png","8553936f00b640f2b64ede4ade6735c7"],["/images/pwaicons/36.png","cc5b0122a3428f892a764204492dea90"],["/images/pwaicons/48.png","1308d018c508749ca67b27e0e7da417f"],["/images/pwaicons/512.png","13745279d10098e794ce653fa753d606"],["/images/pwaicons/72.png","3bfa02fd2e0a6bec63b030d13ecffa83"],["/images/pwaicons/96.png","bc7b3a07927a9a1c2e1fd8529a79a50a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","480a2c0ddbf05288847d3847429f48d3"],["/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/mixed/assets/BaseContent.4b633ef8.js","d6560abeb510761fa25d6058701c1fa6"],["/mixed/assets/BaseContent.c112e03c.css","d9498c02ff626fd906cab5dd46e0867f"],["/mixed/assets/DarkMode.77b0afef.js","b3b8ea9da24e532e58418816ec074ed0"],["/mixed/assets/ErrorNotFound.520c7c6c.js","508adfba4a366308cf648a35570b0b5d"],["/mixed/assets/IndexPage.238fafd8.js","8153a563f43d7648e95934e8f1c80134"],["/mixed/assets/IndexPage.3020febd.js","d08f2f39fce201f3d7f322dcddc4b6fc"],["/mixed/assets/IndexPage.7447fee4.js","9d7446303db217de495e2ecfd8d9e63c"],["/mixed/assets/IndexPage.ae3bc434.css","4a8bc6cf57a6bfb37fda44b3abbb5244"],["/mixed/assets/IndexPage.b7dc6a65.css","9e5dd5577afbbc578f9a009cdbd28913"],["/mixed/assets/IndexPage.ceb9e62f.js","ab42177e936dca36bcd799140c7ba643"],["/mixed/assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff","4aa2e69855e3b83110a251c47fdd05fc"],["/mixed/assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff","40bcb2b8cc5ed94c4c21d06128e0e532"],["/mixed/assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff","ea60988be8d6faebb4bc2a55b1f76e22"],["/mixed/assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff","0774a8b7ca338dc1aba5a0ec8f2b9454"],["/mixed/assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff","bcb7c7e2499a055f0e2f93203bdb282b"],["/mixed/assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff","d3907d0ccd03b1134c24d3bcaf05b698"],["/mixed/assets/MainLayout.21b32a4f.css","a8b3cee097ca33a4d0231972b849c9b8"],["/mixed/assets/MainLayout.3d8dfb82.js","7ff2388c27ed40bc3e3df8df2f23cae8"],["/mixed/assets/QBtn.48f26167.js","8b9d2918eedab63cb5ab646af87e20b6"],["/mixed/assets/QCard.6488c776.js","8835375fe9e703b5c9ec4391895daf61"],["/mixed/assets/QForm.f3e6b114.js","2141b21611ed8824f7914f52c64c0a1f"],["/mixed/assets/QScrollArea.6f90cfaf.js","af72fdd13d77b0ea417c3dd490a83d36"],["/mixed/assets/QSlideTransition.85aaf34a.js","8c37035a9416741276829f3fe6fb65d8"],["/mixed/assets/_commonjsHelpers.4e997714.js","44790040f67d32cf5f050d4990db5e2f"],["/mixed/assets/axios.e3e07775.js","b951604f9456ef63d689c7cbf238b368"],["/mixed/assets/config.5d9e882b.js","8aa8cc0a9f41a39d13a502b0e698f652"],["/mixed/assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff","3e1afe59fa075c9e04c436606b77f640"],["/mixed/assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.83be7b2f.woff2","393b5d8b3fd798486652801f3ee8c6ea"],["/mixed/assets/i18n.8763465d.js","2567a862f4448982923a07141fdac6b5"],["/mixed/assets/index.0f5bfe64.css","06d29e23dcb1ec5ddb591d2bcbedd782"],["/mixed/assets/index.2cf0d985.js","4c5ad768d0f77191ab0e5be5f3090a80"],["/mixed/assets/index.35e427b2.js","d687f8f46e3b8cf23227bbfc7dfb3113"],["/mixed/assets/index.c75e35b3.js","3d4d1a3f163c54e81f9318967c385fb0"],["/mixed/assets/lottery.7374305a.js","a0bf2d684e45469d9ad4be0f049ea360"],["/mixed/assets/mock.c66b7862.js","6634bfe1c23e2ae7ecb5c2a2910bdf5d"],["/mixed/assets/position-engine.b983691c.js","98fd0e8389c8dc743740193dbf736c8e"],["/mixed/assets/scroll.475bdc22.js","a993ba5815032a98912238cc6ad5a482"],["/mixed/assets/selection.491c7c2b.js","d380215706eda81cfebc8f280a3fff96"],["/mixed/assets/touch.70a9dd44.js","f9cd7355694b15b01548ffe718cdba2b"],["/mixed/assets/use-prevent-scroll.ab7e7917.js","318379b1196d8e9a8cae8e361ca09db2"],["/mixed/assets/vm.14103ea1.js","4292df9e5a8eebb2429680b37a0f29ad"],["/mixed/css/loading.css","d980ba639bffe4e5bcf73773f03e9f0b"],["/mixed/icons/favicon-128x128.png","ab92df0270f054ca388127c9703a4911"],["/mixed/icons/favicon-16x16.png","e4b046d41e08e6fa06626d6410ab381d"],["/mixed/icons/favicon-32x32.png","410858b01fa6d3d66b7bf21447c5f1fc"],["/mixed/icons/favicon-96x96.png","db2bde7f824fb4057ffd1c42f6ed756e"],["/mixed/icons/logo.png","2ac90fbd48268dffc96e8dfac7ac9402"],["/mixed/images/2017.png","aeef832581538a1726f00c11c1ec34e8"],["/mixed/images/QR-code.jpg","934f3fae0b1090ed8eec007fde75c03e"],["/mixed/images/background.jpg","67143cbfe90bd27c3996b8239d3d229f"],["/mixed/images/background.png","994616a1b8098393431c87f8a3c37f62"],["/mixed/images/button.png","8ab857a1c4bcd528f69a0e99dd161030"],["/mixed/images/kindle.png","b6c0b5ba2e214420c57d278267dd011a"],["/mixed/images/login.jpg","88687891dd960bec0dbe258a08490250"],["/mixed/images/music.png","959d881ca7b8bc07ad46b18a49933fb4"],["/mixed/images/roll.png","1ab124d156fa403df9b7a05424ad3af4"],["/mixed/index.html","2fc8499832b9dfa7fc6710281ae5bc48"],["/page/2/index.html","e891c41caab7c2412b4916fed629109d"],["/page/3/index.html","0e5b351448b4650c9012cd2eaa19eba5"],["/page/4/index.html","478becc79ce2c5c51df3083088cc9216"],["/page/5/index.html","10227b652b008d676b8975bdb7d975fa"],["/page/6/index.html","9ee71242009420fa86f5e191f6cb27be"],["/page/7/index.html","0fa58624f1736fd93cfb2858636a794f"],["/tags/API/index.html","e9aed2adf01a308e4440f42ab81dca41"],["/tags/Android/index.html","30e9a53955ffda0b665092ff81919299"],["/tags/Apache/index.html","30a94ce3a25d5e3dba0d0a427aa48551"],["/tags/Emulator/index.html","f22821f00b03c6bf916cb23a49a89811"],["/tags/GAME/index.html","88a7f540ba39abb979bbabdef132bfb9"],["/tags/Git/index.html","68f8b239bcc24bb6564fabf21c89f9f6"],["/tags/GitHub/index.html","65ff173109d4dfeb3a5b4d9b7ba5edd0"],["/tags/NGINX/index.html","a584bb063c4e7594c41d52cccc8da962"],["/tags/PHP5-6/index.html","b402a424a5464081a546f39c132ef4ac"],["/tags/Simulator/index.html","6c09b8dd2765621f0f0f018ed3e0fd67"],["/tags/TOMCAT/index.html","4bab733423c00fd50f4131c291cbb0e7"],["/tags/VUE/index.html","df4f881464f93f84f8af3b9fdee80f54"],["/tags/angular/index.html","0b82df60cc4ab4b35c84c36b2d4f2758"],["/tags/blog/index.html","b0ebceceb366b51c40f611a868030bc6"],["/tags/centos/index.html","65b649bb387bb488eef6b53df7e894ac"],["/tags/docker/index.html","da76d3f53a5a0d2d5065970fbeee0557"],["/tags/gitlab/index.html","7d1a30f523c6d38777ab15adec608989"],["/tags/hexo/index.html","ace74a775eb14035c2b386032c6c9b98"],["/tags/iPhone/index.html","c2774540dfd2a5fa34b0d70980ba3a45"],["/tags/index.html","673375953b0bbfd3bf705e727b79cb6d"],["/tags/javascript/index.html","5bcab7893f90ca319aae11048cb16b9a"],["/tags/json-server/index.html","078123fa50de91bc1a68eb8daacd05aa"],["/tags/linux/index.html","f4441489af5a35cadf0ded78abaf4c31"],["/tags/npm/index.html","242d9ef0de7961c0df1eaddd69d26886"],["/tags/nrm/index.html","e71b5db076ec5fd9fbd687ec7bf20fa5"],["/tags/nvm/index.html","537e4f78802a7b2de083d41b0d1a83de"],["/tags/powershell/index.html","30a4cd78ed5f69dc0a69e4603a011596"],["/tags/quasar/index.html","f6baa5466253bf24e6bb99d7ac9fda1e"],["/tags/runner/index.html","645371f4686d09563131f3e7df657e29"],["/tags/script/index.html","c3e298f905077817a6fa5e609cfa8900"],["/tags/sonarqube/index.html","17e98b55315db503042543cd2583bebd"],["/tags/vite/index.html","d4be79433c78b6eb4e7a12d6fc925ea4"],["/tags/vmware/index.html","3a0efd967077a22398181bd0f3c92589"],["/tags/yarn/index.html","d9bee32c3d598a96caac2ef0ad029bd5"],["/tags/仓库/index.html","f521384a150b62228f96c39a1dd95c1c"],["/tags/分布式版本控制/index.html","b1019ddea01e3de90771ef21c2a20f37"],["/tags/前端/index.html","43d46d22417f0357c0e677e741bca8bb"],["/tags/前端MOCK/index.html","6c68fad520afe095a1653e31aa58fec6"],["/tags/只言片语/index.html","a1be879919c39958cdf97de4f16f2675"],["/tags/名言名句/index.html","0c5fc3a3ab5ea379ff4421310a7f4e54"],["/tags/唯美/index.html","cb99506db5b4e680b2e9092aad06c26a"],["/tags/幻方/index.html","9907ea19dd3064501d91c82e9195a2a1"],["/tags/感悟/index.html","b78dff54fd582685334f5d77afda432b"],["/tags/数学/index.html","b055c602e602f4c42d45e4d8b8ed0a36"],["/tags/测试/index.html","de57e0c91bf5ea3cd7f2e671b015df66"],["/tags/版本管理/index.html","93409edec31f700f5d8c31e58fd52ffa"],["/tags/环境配置/index.html","3e8624e4cc9c856c964f8b51b62a5299"],["/tags/算法/index.html","9fd9ab57a36d293bd1f7a54f2e03ab81"],["/tags/经典/index.html","bf06fa99d295d89cf42b8ea90e261904"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"www.ohtudou.com"});





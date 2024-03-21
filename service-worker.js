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

var precacheConfig = [["/2017/06/21/make-php5-dev/index.html","a0a1eea3e9f33a20c8ac439f393a3aa4"],["/2017/06/22/simulator-and-emulator/index.html","a12a9a14a8b98408fc8c59aa0099baa1"],["/2017/06/23/simple-git-command/index.html","cec8186b90dc046875a12aef71ef170f"],["/2017/07/07/odd-number-factor-magic-squar/index.html","40e6194a2cafc6307c0ac2529e7ba18a"],["/2017/10/07/math-100c/index.html","ec206a44454a09ca8175ee92a761a13f"],["/2019/04/11/api-mock/index.html","718ba9242e5fe34e6b09dc5d5a53de94"],["/2019/04/15/learn-angular-part1/index.html","579d448bff52b87301cdb4e45224f99d"],["/2019/04/16/learn-angular-part2/index.html","738e1d83f4d26b19ede6b02109e18c71"],["/2019/04/18/classic-quotations/index.html","8393faf791218df2299815611721db84"],["/2019/04/19/learn-angular-part3/index.html","f077c78b628e49f8a294195e58c0a5c6"],["/2019/05/22/learn-angular-part4/index.html","8cd48a57614f2e45121ef90dad8b452d"],["/2020/02/20/classic-quotations2/index.html","a4a8ff14a22cd4aeed7dda6401d42e59"],["/2020/03/22/Execution-Policies/index.html","0866d59b49ec46f6346e68c0e8cab325"],["/2020/03/22/hexo-github/index.html","157755731360706d527467c753e5ab4c"],["/2020/03/22/use-nvm/index.html","aad64b1017eb365b8b4fa1bc089a9d63"],["/2020/03/27/modify-post-data/index.html","a6a429692fdf90d160ad96b637ed3d0b"],["/2020/03/31/docker-install/index.html","f25949b7490cc272cfde740b2293d624"],["/2020/03/31/vmware-centos/index.html","ad28f0998d8c0e6ed21503fa0a61e32f"],["/2020/04/01/gitlab-cicd/index.html","1fe1cd20593d77fcd5601392814079bb"],["/2020/06/11/classic-quotations3/index.html","342cfaa409b87838742a381c68cb7996"],["/2020/07/07/it-quotations/index.html","de927a474a38aea302fd567a33808263"],["/2020/10/14/classic-poems-md/index.html","0385077ac8468ca1182f1069aef79b75"],["/2021/03/11/nginx-setup-intro/index.html","498162f84bf99a177a4bf0501e7520e3"],["/2021/07/29/classic-quotations5/index.html","500c5ddb96b3d34501349f88ff7f270d"],["/2021/10/22/vite-5173/index.html","cfd6bee7544957de55e3f581ae846179"],["/2021/11/22/yarn-command/index.html","d29bf49c973c8fc4395efa500f3ca01b"],["/2022/01/11/classic-quotations6/index.html","54901c55586b6f6295e45b703349dc8c"],["/2022/09/28/make-nginx-tomcat-dev/index.html","e8eb8decb54d3fdb11669a380fad071d"],["/2022/10/11/classic-quotations7/index.html","8bb48c3629648a9aef2cb048596c8631"],["/2022/11/15/go2048/index.html","8ba23a37a13f14f9272f1b50ef3a8c1b"],["/2022/12/07/quasar/index.html","386ad7390bfeb12890e819ddf03e7045"],["/2023/04/21/githubupdate/index.html","b584d6a3a8334e7abadba4af9682b081"],["/2024/01/21/githubupdate/index.html","9e1d21ec8d2904df2e3e0ab0a67bcc3f"],["/2024/03/21/nexusssl/index.html","c3ecf9cfc37a552e7f1b64b8bd00f358"],["/archives/2017/06/index.html","bfa9d33c660fb8d919b832dbc19b5423"],["/archives/2017/07/index.html","6a51fa8c751f6b33ff973680b9d98dfa"],["/archives/2017/10/index.html","e66c6115e76419910e5758dec10b2787"],["/archives/2017/index.html","5d15516339686b1f9f2031b20e10a067"],["/archives/2019/04/index.html","f85b80cee4fd8c3ec8d61b0b915a005f"],["/archives/2019/05/index.html","b98d21108b6f2a3ebacf651d17700ac8"],["/archives/2019/index.html","fcda5ba8268cb745665a58062f072018"],["/archives/2020/02/index.html","3a634e1ba363ec09286d0525250b000e"],["/archives/2020/03/index.html","a44a593dc9e206db569cd854088be858"],["/archives/2020/04/index.html","d87a9806c1bb32b9b30d0af37fd75325"],["/archives/2020/06/index.html","41c7e21e539883e4186561a4b43b54e3"],["/archives/2020/07/index.html","bee328f5c0ce28d22aaf12465acbe562"],["/archives/2020/10/index.html","e5c25545f84d5d9b64e085acae8d5bbf"],["/archives/2020/index.html","998720501a6be32c8d6dd80d33691a99"],["/archives/2020/page/2/index.html","7bd11b10710f8a04900f1f7b2a5c51f7"],["/archives/2021/03/index.html","79570c8bcfafafcd6f531de89f11c2e7"],["/archives/2021/07/index.html","12661933e79b54800ca6b7dc5227d782"],["/archives/2021/10/index.html","3abb99fae7694f4d72ce583e0411905c"],["/archives/2021/11/index.html","96731f4369d113b52124238db593e075"],["/archives/2021/index.html","deae213032336d6ccb97d601c1928bf6"],["/archives/2022/01/index.html","24e165acfd0c9a5f0067f3c9157e0e0d"],["/archives/2022/09/index.html","c5cb9bee9e8d3840afa0436c2ab94dbe"],["/archives/2022/10/index.html","faa8088f7834fd55ec970dbf82fd6fd3"],["/archives/2022/11/index.html","266f21d567aaf41825c5c8b2f246b946"],["/archives/2022/12/index.html","adddba17ffdcdc492338797ece0dd279"],["/archives/2022/index.html","03f6a93b1fdf8331828e87720b236239"],["/archives/2023/04/index.html","66a55aeca80ecbb940ccbf2bfb8a1370"],["/archives/2023/index.html","62d1f368f88befa3a0b77b280ac72d2a"],["/archives/2024/01/index.html","c41017d4a44b0cc078727d6c6c6fc6d5"],["/archives/2024/03/index.html","b2b80c04192399867478f569defc2208"],["/archives/2024/index.html","76e678ec057e1389671dde5b85c3732f"],["/archives/index.html","4ca893e5c58a32abf2805d4993cbe12d"],["/archives/page/2/index.html","2991665a86cfd4b1717037ebcd931183"],["/archives/page/3/index.html","845e990a6afad1ebf49f891c1d957066"],["/archives/page/4/index.html","504bdbf8c214bcedf1cb6429b035e188"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/IT/index.html","3793ea4d0e2ce52bf6b4e8a6e0e08879"],["/categories/Web/index.html","71d56e2fbc70d6aad7b0d9647423d389"],["/categories/Web/page/2/index.html","989229a7c8e4cafc8b79c1b668bc932e"],["/categories/Web/开发/index.html","1e838ef7d1f8883a9e4811114dd5d828"],["/categories/Web/开发/page/2/index.html","55e58d11faf9a9b1519626ecd2c597fe"],["/categories/index.html","299993773f64650d434dbe33a8e65854"],["/categories/只言片语/index.html","9451fc8732e9fc767f22ad948e684934"],["/categories/名言名句/index.html","03d7b3e5e181725110f1c3bd84483795"],["/categories/开发/GAME/index.html","ddbf45a5a7a189e2827e193096ad801d"],["/categories/开发/index.html","47dc468873f404a60b43ebb0b912deb7"],["/categories/开发/quasar/index.html","39a71068ffeefeb7aa99bdb1522e00c2"],["/categories/开发/环境/index.html","639634e0d0edb9b4e18f23cad500df69"],["/categories/开发/项目管理/index.html","705b056b1c87dac8115869ad82132a7c"],["/categories/开发环境/index.html","37b6407ccce037d7932cfea7e0e9f18b"],["/categories/搭建/index.html","9d9d89822886a57e3f0d640a48c47135"],["/categories/搭建/个人博客/index.html","09bf90fb812a1f4b1ec37814e9eee6e4"],["/categories/数学/index.html","138bfe3fc68f3b521504452c515b9013"],["/categories/数学/算法/index.html","30bd433e2ebb8df41257aae3791fa3b2"],["/categories/移动/index.html","ee2eeab880b4515fc6a2710eafd1ca53"],["/categories/移动/开发/index.html","b8511c96a9b546ec462f5c3274d68a35"],["/categories/系统/index.html","5d6bfc6bb489ac3d3dbc2537d8c29740"],["/categories/系统/设定/index.html","c0f04b83df199af0252d8b259c1f4809"],["/categories/计算机基础/index.html","299ce40f7d656d2695804b5413a61b09"],["/categories/计算机基础/算法/index.html","4432699a59afecdd6a23c7506d4f7717"],["/categories/资产管理/Git/index.html","407b83c9698281be783f43578cc17251"],["/categories/资产管理/index.html","6d0fc43e2a4134e74194db2ac683284b"],["/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","ee1ffce8b2f08802cf4371e74f167c51"],["/game/alegeb/assets/index.1fd69727.css","312469eebbdab4c482e7bb1e11715204"],["/game/alegeb/assets/index.4bd4fa98.js","76c8be9e73b7a6811a9035ac0aeb7d99"],["/game/alegeb/index.html","ff008e5712317312f927748a4879832d"],["/game/alegeb/vite.svg","8e3a10e157f75ada21ab742c022d5430"],["/game/index.html","ebb1215cb398cffcab30229fc99d6cc3"],["/game/sortnum/assets/index.70e223c2.css","642d6a3097b9e86dd2e2cddd3c3be7c7"],["/game/sortnum/assets/index.b149f31b.js","abf1a0c881f2b8c228a92ac05cb1a623"],["/game/sortnum/icon.svg","b6cbc75c21422cd9d2b07bd5c1fccb4b"],["/game/sortnum/index.html","22c31481b0fc2f5f951c22f06b43171d"],["/game/v2048/assets/index.4ae8fdc4.js","15b2b2fa206d3d1f799478b41d0fc539"],["/game/v2048/assets/index.8b3013eb.css","a82811291a800112da80b379808db8a6"],["/game/v2048/index.html","e1e60885326b7b586a49a5b28fbf92df"],["/images/pwaicons/144.png","efff21439c827d34d0cc72b2dfea6043"],["/images/pwaicons/192.png","8553936f00b640f2b64ede4ade6735c7"],["/images/pwaicons/36.png","cc5b0122a3428f892a764204492dea90"],["/images/pwaicons/48.png","1308d018c508749ca67b27e0e7da417f"],["/images/pwaicons/512.png","13745279d10098e794ce653fa753d606"],["/images/pwaicons/72.png","3bfa02fd2e0a6bec63b030d13ecffa83"],["/images/pwaicons/96.png","bc7b3a07927a9a1c2e1fd8529a79a50a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","0fd4f2c8b2ce28f90728b937159a4feb"],["/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/mixed/assets/BaseContent.20f412d4.js","033472042affdf21cae33b2a74bee0ad"],["/mixed/assets/BaseContent.96940248.css","0acd6e8623b2183a02151b3bddf5b56b"],["/mixed/assets/DarkMode.84a437d5.js","4d29374e3e096ed6c93d9dd933b6f426"],["/mixed/assets/ErrorNotFound.a0ff514a.js","63f633c66342ec69168ab9e02eddcc10"],["/mixed/assets/IndexPage.376dcc3c.js","e80f1d4f8c84f045a2cf63accf339a8f"],["/mixed/assets/IndexPage.4a048049.js","9b454e6a117663a279a51bea0c992064"],["/mixed/assets/IndexPage.852bffa1.js","83db25d473d3d0012cb31fb1d27a6df5"],["/mixed/assets/IndexPage.9511f029.js","b7a8aa5647ccba9f3c323b103f81fa98"],["/mixed/assets/IndexPage.ae3bc434.css","4a8bc6cf57a6bfb37fda44b3abbb5244"],["/mixed/assets/IndexPage.c910957b.js","8fccc39e7d3a865d899f88c77371c31b"],["/mixed/assets/IndexPage.ce3f2bab.css","5a7638a4e2a96e55a1a255d32e429018"],["/mixed/assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff","4aa2e69855e3b83110a251c47fdd05fc"],["/mixed/assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff","40bcb2b8cc5ed94c4c21d06128e0e532"],["/mixed/assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff","ea60988be8d6faebb4bc2a55b1f76e22"],["/mixed/assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff","0774a8b7ca338dc1aba5a0ec8f2b9454"],["/mixed/assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff","bcb7c7e2499a055f0e2f93203bdb282b"],["/mixed/assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff","d3907d0ccd03b1134c24d3bcaf05b698"],["/mixed/assets/MainLayout.2e53fda5.css","95adb64366012eeba458550a9f9ed76c"],["/mixed/assets/MainLayout.5514f9bb.js","14e21a22e36282eb15aea3cf3680dc3d"],["/mixed/assets/QForm.8af54fa6.js","fa4117c3ffaa0e1100e029a47eb4be4e"],["/mixed/assets/QImg.13a344aa.js","13376a52263a181b485e65f9e32255e1"],["/mixed/assets/QScrollArea.9bd87065.js","35f87efe7bf438829755a20aa2ad65f9"],["/mixed/assets/QSlideTransition.dc6d229c.js","45cab5b1c9ab9ae3957b51abebc175c8"],["/mixed/assets/_commonjsHelpers.4e997714.js","44790040f67d32cf5f050d4990db5e2f"],["/mixed/assets/axios.d430bf94.js","483892efcc04c6ff556cfaa4da93a887"],["/mixed/assets/config.bdffb9b8.js","da30082949ca87a70d9c9a4dc55006b2"],["/mixed/assets/dialog.e7bf14fd.js","f33a43d00a0bf2c9c7a5f5283592b4ad"],["/mixed/assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff","3e1afe59fa075c9e04c436606b77f640"],["/mixed/assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.83be7b2f.woff2","393b5d8b3fd798486652801f3ee8c6ea"],["/mixed/assets/i18n.f2109a60.js","0d4953f615f0d1dd4f239b189841b09e"],["/mixed/assets/index.13381753.js","832396c72927ad292f6c68417acc682f"],["/mixed/assets/index.20ec9d85.css","574139f9aa06b8f44157511efa513c77"],["/mixed/assets/index.2cf0d985.js","4c5ad768d0f77191ab0e5be5f3090a80"],["/mixed/assets/index.51f40b55.js","53b1dde422c21e6e4aae0c3778e1e6b0"],["/mixed/assets/mock.38765d94.js","b9c6a2d19d7dabdac768d65fb62741bf"],["/mixed/assets/position-engine.45d4a394.js","206bc405f45e507d9e40d919b09338fe"],["/mixed/assets/selection.f16de754.js","0f835b4f3ece7b4d367585b3771b904f"],["/mixed/assets/touch.70a9dd44.js","f9cd7355694b15b01548ffe718cdba2b"],["/mixed/css/loading.css","d980ba639bffe4e5bcf73773f03e9f0b"],["/mixed/icons/favicon-128x128.png","ab92df0270f054ca388127c9703a4911"],["/mixed/icons/favicon-16x16.png","e4b046d41e08e6fa06626d6410ab381d"],["/mixed/icons/favicon-32x32.png","410858b01fa6d3d66b7bf21447c5f1fc"],["/mixed/icons/favicon-96x96.png","db2bde7f824fb4057ffd1c42f6ed756e"],["/mixed/icons/logo.png","2ac90fbd48268dffc96e8dfac7ac9402"],["/mixed/icons/material.png","a700e98fc6da7c5b8e71a6ee62f5bd94"],["/mixed/images/avatar/0-1.png","579b1824fa469e13ecd891769e9f3eaf"],["/mixed/images/avatar/0-10.png","3e4af0acbc1aabaf026aa2cf9fb8c123"],["/mixed/images/avatar/0-11.png","888065934c19a9d7c7d7c0a12c5ee2b4"],["/mixed/images/avatar/0-2.png","9181b53f6914f433a3d0d98d2dd64560"],["/mixed/images/avatar/0-3.png","f0a4107263d0518dabb7e90b410920e3"],["/mixed/images/avatar/0-4.png","dc1bcece73dedab8467fc1a6e272ec35"],["/mixed/images/avatar/0-5.png","c9ac9c1a4b7b76db5e8a3764c869a782"],["/mixed/images/avatar/0-6.png","f07d66e00150e23a0d8b2e10b7b0f86b"],["/mixed/images/avatar/0-7.png","bd80794fddbffb4031fab537cc898680"],["/mixed/images/avatar/0-8.png","b907dc756c5ac066437b40a2dd900187"],["/mixed/images/avatar/0-9.png","055a91979264664a1ee12b9453610d82"],["/mixed/images/avatar/1-1.png","f81eabdb1dca49fd9361e28658b928ad"],["/mixed/images/avatar/1-10.png","4e505cd1fefa5a3170dffaba0b28a363"],["/mixed/images/avatar/1-11.png","171be406128575cd5248e5b590888c77"],["/mixed/images/avatar/1-2.png","ef7bc4ccd78ee7f9c3269041a2bcb6d7"],["/mixed/images/avatar/1-3.png","5d30366f5b8327c9be0f605ee89230cb"],["/mixed/images/avatar/1-4.png","0e0b15ffcbb3309ad020e1f1806d07aa"],["/mixed/images/avatar/1-5.png","f40e9e6ef38d48d522956106dd3f26bf"],["/mixed/images/avatar/1-6.png","11266af8e077bdff516ca2e4e85e4116"],["/mixed/images/avatar/1-7.png","3a5e4af38ecdbe48a713b9041de65b17"],["/mixed/images/avatar/1-8.png","84c6439910e4fed5871b5fa8ac79d053"],["/mixed/images/avatar/1-9.png","64fc8cdb87c574300e057670cf9cca8a"],["/mixed/images/kindle.png","b6c0b5ba2e214420c57d278267dd011a"],["/mixed/index.html","cb61fa85c3b368671d27a5fefd7acf7d"],["/page/2/index.html","ff7ee831d0000ff05fffcba990f1a709"],["/page/3/index.html","46c06247470da7a581bbedc9710bcabc"],["/page/4/index.html","5d7fe46cec22ff0acd8b7e3865dd3250"],["/page/5/index.html","b2513d2ae304a3bc177bd0dd45a1ce25"],["/page/6/index.html","b944c9d12f837a33b7fbfeb345d3b592"],["/page/7/index.html","ab25f99ce358d548387276fb8851e69c"],["/tags/API/index.html","672a06945fb30930925a4ee3c851eb9c"],["/tags/Android/index.html","9732a0e544358e5266d35afa74e3e7ca"],["/tags/Apache/index.html","62ff979e3b6a60fe4a4f82690a75960b"],["/tags/Emulator/index.html","fe6c6735472c07cf2cfe83d19f54f1d8"],["/tags/GAME/index.html","035dc64ed7ca8bf3532a1553b836f09f"],["/tags/Git/index.html","d23bc0a9d04d12cac7366701edb2a7ea"],["/tags/GitHub/index.html","29da10abff1f8f38fc4ac66458432027"],["/tags/NGINX/index.html","f95d314bc582d975cfebaf862f7bc027"],["/tags/Nexus-SSL/index.html","0a278dc39167b0d4ab4f4eaf4cda7b6a"],["/tags/PHP5-6/index.html","6cefa2cdaf1b80202bc25d421bf268d0"],["/tags/Simulator/index.html","45d938da2273406c197cb8577b97a1db"],["/tags/TOMCAT/index.html","3706d385ddb6be2f2e807aa03ca43bb6"],["/tags/VUE/index.html","d1e7bccbd836a32485635d7311cf6e70"],["/tags/angular/index.html","589677694d987c0c6467965efd909b30"],["/tags/blog/index.html","f1fe66c468e4526b1b8d3d95aaab4a31"],["/tags/centos/index.html","944ad0286b1a60ec6849188307606690"],["/tags/docker/index.html","93195bd370eede4b771a63975b754ebc"],["/tags/gitlab/index.html","84c8c2406c14557cef75fdf816bff8e4"],["/tags/hexo/index.html","f68709ca7e9d643d357637c5cf3ab3d2"],["/tags/iPhone/index.html","f6e0956421e8b9ae17a0cb6a860a9011"],["/tags/index.html","ed84fdd9adb3a742840ac04c1c788907"],["/tags/javascript/index.html","7667d793526275620fa92d6ae3e1e6f6"],["/tags/json-server/index.html","db8b1f4b248d4265ca14344a78063e49"],["/tags/linux/index.html","74274dd5e15497700a4e8a838f120ea4"],["/tags/npm/index.html","58de2c79bb785f8005c0e1deaf3831ad"],["/tags/nrm/index.html","42c82fcccde6179a6b5b6d7867ce33bd"],["/tags/nvm/index.html","42d9e2f86611e16751d4f0ccc7aae8f4"],["/tags/powershell/index.html","03e5d2e65e40be9418daca029ec7b6db"],["/tags/quasar/index.html","5845467a4172d8c09cdf6a72a4f397bb"],["/tags/runner/index.html","fd650b6acc41ca8c7ca2768c66f4b114"],["/tags/script/index.html","2e8edd0e100ceea2853029cece947403"],["/tags/sonarqube/index.html","6a0c02c9179d01d10239a3c45418f3d0"],["/tags/vite/index.html","ae5958cc14ec3994e5244f87949ae287"],["/tags/vmware/index.html","dc7be4c4e6d5cc36482387b741bf2284"],["/tags/yarn/index.html","4c622be6dd5d05ae85bf432b5d9d3ffc"],["/tags/仓库/index.html","d5b1d0a9c1473c8d241077ab8c4f79ec"],["/tags/分布式版本控制/index.html","cf9ba5f6aff8f51330580da743627823"],["/tags/前端/index.html","6fc74dcb36bae124d3f3ed58ead8e8ee"],["/tags/前端MOCK/index.html","0a5e5a835863245b991a4bb35f5d6382"],["/tags/只言片语/index.html","7608854f294fed519e496740850c1505"],["/tags/名言名句/index.html","fbd968a0e78f2df93cb74debd2907ff2"],["/tags/唯美/index.html","8535b30b31507878f6f828fb2e7ccf10"],["/tags/幻方/index.html","0785d4d1400868850a4b3bf9297fc215"],["/tags/感悟/index.html","8c4d320d928064b9c6e42411e130d933"],["/tags/数学/index.html","b77738202ab6e8323bfcab72f923f595"],["/tags/测试/index.html","b1dc1d2ea963cb6474a28b1269117bf4"],["/tags/版本管理/index.html","ad82abf6350cf12af56d2ef185e8aacc"],["/tags/环境配置/index.html","f2c598eb8400853c29ee5a360d194581"],["/tags/算法/index.html","53b62b2cdba2e7f35fbc6dc535108b6a"],["/tags/经典/index.html","11eb7392ca286e8d1bdefba12b615f93"]];
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





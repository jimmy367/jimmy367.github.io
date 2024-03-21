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

var precacheConfig = [["/2017/06/21/make-php5-dev/index.html","b4f715812cb219e60c3cf5e49ec1ca77"],["/2017/06/22/simulator-and-emulator/index.html","63b6aae267aa21727846db84ffae2c53"],["/2017/06/23/simple-git-command/index.html","5e211ff3e1130aff2c1f472c0d824727"],["/2017/07/07/odd-number-factor-magic-squar/index.html","fc7b86beddbf1dbe5f690c9b22fc988f"],["/2017/10/07/math-100c/index.html","6e0258a3c815dfbcfdcc1dc6d1f9682d"],["/2019/04/11/api-mock/index.html","1f49c5bf477b1f9d3b44d3e82fd8439c"],["/2019/04/15/learn-angular-part1/index.html","bd29fe8c33e2ec091a76f6794044719a"],["/2019/04/16/learn-angular-part2/index.html","72a0ac037a8ec9fd95db614d75cd6ee1"],["/2019/04/18/classic-quotations/index.html","d1c5f74ad160aa9e55adb5562714b787"],["/2019/04/19/learn-angular-part3/index.html","341e099c14a9201890c531d43ba3c401"],["/2019/05/22/learn-angular-part4/index.html","5f4a4ec38e284fd50c90abccf7aff9c9"],["/2020/02/20/classic-quotations2/index.html","0d85c00951067f387146cb14ffee8e52"],["/2020/03/22/Execution-Policies/index.html","519dea3a325135f33b096dfe6c160002"],["/2020/03/22/hexo-github/index.html","423cb668fbdd9a7750ec1d3b35b884e2"],["/2020/03/22/use-nvm/index.html","950b0fdc14b45db6815db9eff70de049"],["/2020/03/27/modify-post-data/index.html","fb98ec3cdc28a979cccd7d9285bf4ec7"],["/2020/03/31/docker-install/index.html","e17fa8d21227ff96628e78a18b2f1f58"],["/2020/03/31/vmware-centos/index.html","502f239c5dddadd4eb2f8222b4155801"],["/2020/04/01/gitlab-cicd/index.html","391db49b16bad3e3f235d784603d3a04"],["/2020/06/11/classic-quotations3/index.html","3df3d50c771091b3d78436d73fd4fe47"],["/2020/07/07/it-quotations/index.html","00e0bc0b4fe90a1fc96a8247a2e6580f"],["/2020/10/14/classic-poems-md/index.html","748c3ca15c459f4c37cac3c0c9a42039"],["/2021/03/11/nginx-setup-intro/index.html","02e0904984b0be1470164e6aae6b6edc"],["/2021/07/29/classic-quotations5/index.html","70994822bfc33dab3e866fe24fb058b1"],["/2021/10/22/vite-5173/index.html","c88e00a49ed191dd3ecb7a7efd4a30ce"],["/2021/11/22/yarn-command/index.html","1bb8297d54459fdd16ce1be0058e950a"],["/2022/01/11/classic-quotations6/index.html","96696d2aeee5cbbcdb1c0d24918bcd3a"],["/2022/09/28/make-nginx-tomcat-dev/index.html","b0061d85f652e29e2ce9ec06eadb38ab"],["/2022/10/11/classic-quotations7/index.html","f0a3cafd2a73ed548f08d1394d033611"],["/2022/11/15/go2048/index.html","65ea1d82ac41b78672a3bd3038a0ab27"],["/2022/12/07/quasar/index.html","c5d5e14dbda9c77f5346504cd1cc7f5c"],["/2023/04/21/githubupdate/index.html","c569feb0e529b8f0218b99013b5279e4"],["/2024/01/21/githubupdate/index.html","9e1d21ec8d2904df2e3e0ab0a67bcc3f"],["/2024/03/21/nexusssl/index.html","5cbc9599a4710af848593fdb06ae5b14"],["/archives/2017/06/index.html","623d5d8eda4385e2520df5154a57207e"],["/archives/2017/07/index.html","6c6d44a41b94caa48d139fdf96c02f6a"],["/archives/2017/10/index.html","741bd8779f5bd2adca77ede0e2e590f1"],["/archives/2017/index.html","ea131e8fafebc975586e6ec4a589413b"],["/archives/2019/04/index.html","c96b988dfd62f3738f936fc3f8bc86d1"],["/archives/2019/05/index.html","098c0344ec79d3e0660f1193fb1c7c72"],["/archives/2019/index.html","42b096c5dda2fb5d475cba33861cf7f8"],["/archives/2020/02/index.html","35715bc92bb2d582c090fd491266f01f"],["/archives/2020/03/index.html","1a77d1d7a31e3e98eb6ced723d7f675a"],["/archives/2020/04/index.html","5281de2af0e8603360574964614103c5"],["/archives/2020/06/index.html","670ac6c3de604733982ea3ad764e5d62"],["/archives/2020/07/index.html","0690ef96ffc88501510454f9d54fad31"],["/archives/2020/10/index.html","c67f83637b779d8b3e1a252926dea7b8"],["/archives/2020/index.html","1f882bf436a460138b24b07854b09e0b"],["/archives/2020/page/2/index.html","fd89089b6ee7313a1b133611b4c6a150"],["/archives/2021/03/index.html","8213129a71e368a00c2cde55fea87537"],["/archives/2021/07/index.html","9be4292c9efd89ab449f53702f2faac9"],["/archives/2021/10/index.html","f5e9805456938adcae937fb34b28d2af"],["/archives/2021/11/index.html","c12e64de87cef81a4de816261f250dda"],["/archives/2021/index.html","de3255ea1cc18f23d36b5ee63514bfe4"],["/archives/2022/01/index.html","d493715e5d1858711b34b3db2d35d6d9"],["/archives/2022/09/index.html","b815f226c24d9877be36bb3cfe4be356"],["/archives/2022/10/index.html","1fc8a3dc08d30d5bf598c33eb42d10e1"],["/archives/2022/11/index.html","8104bf0029b8bf58577f3e94a32e1d87"],["/archives/2022/12/index.html","9a01b684d25204b687ee1a220706bdaf"],["/archives/2022/index.html","d9269c7f7ed8b225418b83ed0769a2df"],["/archives/2023/04/index.html","13bb617fc27c793cd0800dd733229e91"],["/archives/2023/index.html","11fc2b697239256450f4998b9324f681"],["/archives/2024/01/index.html","c41017d4a44b0cc078727d6c6c6fc6d5"],["/archives/2024/03/index.html","26a205dd78824c8cc7e54bc568d4cb7a"],["/archives/2024/index.html","29dd44a5f8e6c2d9a8e06c7637e55b24"],["/archives/index.html","898e6a2a99b76d7663d3dc70cedc2412"],["/archives/page/2/index.html","66237d8c550a1a7f86d59792c62e0ce8"],["/archives/page/3/index.html","428d2beb2a98f77e2f8b3e7ccc29ed1e"],["/archives/page/4/index.html","dc93cfa7b2ca137dd8d2c8261d3295d9"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/IT/index.html","0c693e836d452cd2e81030e23267b48b"],["/categories/Web/index.html","c714664fea0cf146680218dd3e65ad14"],["/categories/Web/page/2/index.html","457aa1339901f515cfa7ebedffa49ad8"],["/categories/Web/开发/index.html","1b23e953ff3bcf44633aaf2a9d8dbe3e"],["/categories/Web/开发/page/2/index.html","6e7ec828bce9cc794829aab212e5cf31"],["/categories/index.html","abfe8c1ef87cd62df1b1caf6ac650f67"],["/categories/只言片语/index.html","9f5a248fd05317249afa9f3d0903935d"],["/categories/名言名句/index.html","fa9156dc896e9f3a8caac204ac547dce"],["/categories/开发/GAME/index.html","a777749d165647a6e91e6a9b22a4cc22"],["/categories/开发/index.html","2ce02a327dd0c1376b09c6030fadf984"],["/categories/开发/quasar/index.html","393ab078632ea0dc93c5d4e0f50ebfe9"],["/categories/开发/环境/index.html","28d7cd9049b3d5bfd6fe606ce09c7d6b"],["/categories/开发/项目管理/index.html","77fb2d91182a4fd607f7153e5209c01a"],["/categories/开发环境/index.html","5c97591f5bf7d7f7e0e6f78dd3eaec91"],["/categories/搭建/index.html","23dd9d7656f8d252035a755fb0fa0277"],["/categories/搭建/个人博客/index.html","c569256bc74f8e1bcf41c3209282dc8f"],["/categories/数学/index.html","d426cb38462f13a899585f2ca796d8b8"],["/categories/数学/算法/index.html","16ebd71e7b602da9b48c8d211f1857d6"],["/categories/移动/index.html","6d12125dba5dd8a3c4bf3761e410502e"],["/categories/移动/开发/index.html","50ec055de9149e37d6081b2dc48f0f0f"],["/categories/系统/index.html","61b7c54b6c313654450949d96cc20162"],["/categories/系统/设定/index.html","504c8d8b8a3843c60f469538394eb77f"],["/categories/计算机基础/index.html","aad422976106d48bd55cd4293c662f19"],["/categories/计算机基础/算法/index.html","3db81e748d418609acb4ffcabcc8d88a"],["/categories/资产管理/Git/index.html","ceeb5f6bd63d31b470c637362d496bba"],["/categories/资产管理/index.html","d2c82ecc72cc08325a5d5bee8e9b34e8"],["/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","d7c0387b4cf5f851b3d7f01c2b31450a"],["/game/alegeb/assets/index.1fd69727.css","312469eebbdab4c482e7bb1e11715204"],["/game/alegeb/assets/index.4bd4fa98.js","76c8be9e73b7a6811a9035ac0aeb7d99"],["/game/alegeb/index.html","ff008e5712317312f927748a4879832d"],["/game/alegeb/vite.svg","8e3a10e157f75ada21ab742c022d5430"],["/game/index.html","5125832ac484fa15abc2241e6db7790f"],["/game/sortnum/assets/index.70e223c2.css","642d6a3097b9e86dd2e2cddd3c3be7c7"],["/game/sortnum/assets/index.b149f31b.js","abf1a0c881f2b8c228a92ac05cb1a623"],["/game/sortnum/icon.svg","b6cbc75c21422cd9d2b07bd5c1fccb4b"],["/game/sortnum/index.html","22c31481b0fc2f5f951c22f06b43171d"],["/game/v2048/assets/index.4ae8fdc4.js","15b2b2fa206d3d1f799478b41d0fc539"],["/game/v2048/assets/index.8b3013eb.css","a82811291a800112da80b379808db8a6"],["/game/v2048/index.html","e1e60885326b7b586a49a5b28fbf92df"],["/images/pwaicons/144.png","efff21439c827d34d0cc72b2dfea6043"],["/images/pwaicons/192.png","8553936f00b640f2b64ede4ade6735c7"],["/images/pwaicons/36.png","cc5b0122a3428f892a764204492dea90"],["/images/pwaicons/48.png","1308d018c508749ca67b27e0e7da417f"],["/images/pwaicons/512.png","13745279d10098e794ce653fa753d606"],["/images/pwaicons/72.png","3bfa02fd2e0a6bec63b030d13ecffa83"],["/images/pwaicons/96.png","bc7b3a07927a9a1c2e1fd8529a79a50a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","f9680f2f8084083db7c411f638d7c79b"],["/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/mixed/assets/BaseContent.20f412d4.js","033472042affdf21cae33b2a74bee0ad"],["/mixed/assets/BaseContent.96940248.css","0acd6e8623b2183a02151b3bddf5b56b"],["/mixed/assets/DarkMode.84a437d5.js","4d29374e3e096ed6c93d9dd933b6f426"],["/mixed/assets/ErrorNotFound.a0ff514a.js","63f633c66342ec69168ab9e02eddcc10"],["/mixed/assets/IndexPage.376dcc3c.js","e80f1d4f8c84f045a2cf63accf339a8f"],["/mixed/assets/IndexPage.4a048049.js","9b454e6a117663a279a51bea0c992064"],["/mixed/assets/IndexPage.852bffa1.js","83db25d473d3d0012cb31fb1d27a6df5"],["/mixed/assets/IndexPage.9511f029.js","b7a8aa5647ccba9f3c323b103f81fa98"],["/mixed/assets/IndexPage.ae3bc434.css","4a8bc6cf57a6bfb37fda44b3abbb5244"],["/mixed/assets/IndexPage.c910957b.js","8fccc39e7d3a865d899f88c77371c31b"],["/mixed/assets/IndexPage.ce3f2bab.css","5a7638a4e2a96e55a1a255d32e429018"],["/mixed/assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff","4aa2e69855e3b83110a251c47fdd05fc"],["/mixed/assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff","40bcb2b8cc5ed94c4c21d06128e0e532"],["/mixed/assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff","ea60988be8d6faebb4bc2a55b1f76e22"],["/mixed/assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff","0774a8b7ca338dc1aba5a0ec8f2b9454"],["/mixed/assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff","bcb7c7e2499a055f0e2f93203bdb282b"],["/mixed/assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff","d3907d0ccd03b1134c24d3bcaf05b698"],["/mixed/assets/MainLayout.2e53fda5.css","95adb64366012eeba458550a9f9ed76c"],["/mixed/assets/MainLayout.5514f9bb.js","14e21a22e36282eb15aea3cf3680dc3d"],["/mixed/assets/QForm.8af54fa6.js","fa4117c3ffaa0e1100e029a47eb4be4e"],["/mixed/assets/QImg.13a344aa.js","13376a52263a181b485e65f9e32255e1"],["/mixed/assets/QScrollArea.9bd87065.js","35f87efe7bf438829755a20aa2ad65f9"],["/mixed/assets/QSlideTransition.dc6d229c.js","45cab5b1c9ab9ae3957b51abebc175c8"],["/mixed/assets/_commonjsHelpers.4e997714.js","44790040f67d32cf5f050d4990db5e2f"],["/mixed/assets/axios.d430bf94.js","483892efcc04c6ff556cfaa4da93a887"],["/mixed/assets/config.bdffb9b8.js","da30082949ca87a70d9c9a4dc55006b2"],["/mixed/assets/dialog.e7bf14fd.js","f33a43d00a0bf2c9c7a5f5283592b4ad"],["/mixed/assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff","3e1afe59fa075c9e04c436606b77f640"],["/mixed/assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.83be7b2f.woff2","393b5d8b3fd798486652801f3ee8c6ea"],["/mixed/assets/i18n.f2109a60.js","0d4953f615f0d1dd4f239b189841b09e"],["/mixed/assets/index.13381753.js","832396c72927ad292f6c68417acc682f"],["/mixed/assets/index.20ec9d85.css","574139f9aa06b8f44157511efa513c77"],["/mixed/assets/index.2cf0d985.js","4c5ad768d0f77191ab0e5be5f3090a80"],["/mixed/assets/index.51f40b55.js","53b1dde422c21e6e4aae0c3778e1e6b0"],["/mixed/assets/mock.38765d94.js","b9c6a2d19d7dabdac768d65fb62741bf"],["/mixed/assets/position-engine.45d4a394.js","206bc405f45e507d9e40d919b09338fe"],["/mixed/assets/selection.f16de754.js","0f835b4f3ece7b4d367585b3771b904f"],["/mixed/assets/touch.70a9dd44.js","f9cd7355694b15b01548ffe718cdba2b"],["/mixed/css/loading.css","d980ba639bffe4e5bcf73773f03e9f0b"],["/mixed/icons/favicon-128x128.png","ab92df0270f054ca388127c9703a4911"],["/mixed/icons/favicon-16x16.png","e4b046d41e08e6fa06626d6410ab381d"],["/mixed/icons/favicon-32x32.png","410858b01fa6d3d66b7bf21447c5f1fc"],["/mixed/icons/favicon-96x96.png","db2bde7f824fb4057ffd1c42f6ed756e"],["/mixed/icons/logo.png","2ac90fbd48268dffc96e8dfac7ac9402"],["/mixed/icons/material.png","a700e98fc6da7c5b8e71a6ee62f5bd94"],["/mixed/images/avatar/0-1.png","579b1824fa469e13ecd891769e9f3eaf"],["/mixed/images/avatar/0-10.png","3e4af0acbc1aabaf026aa2cf9fb8c123"],["/mixed/images/avatar/0-11.png","888065934c19a9d7c7d7c0a12c5ee2b4"],["/mixed/images/avatar/0-2.png","9181b53f6914f433a3d0d98d2dd64560"],["/mixed/images/avatar/0-3.png","f0a4107263d0518dabb7e90b410920e3"],["/mixed/images/avatar/0-4.png","dc1bcece73dedab8467fc1a6e272ec35"],["/mixed/images/avatar/0-5.png","c9ac9c1a4b7b76db5e8a3764c869a782"],["/mixed/images/avatar/0-6.png","f07d66e00150e23a0d8b2e10b7b0f86b"],["/mixed/images/avatar/0-7.png","bd80794fddbffb4031fab537cc898680"],["/mixed/images/avatar/0-8.png","b907dc756c5ac066437b40a2dd900187"],["/mixed/images/avatar/0-9.png","055a91979264664a1ee12b9453610d82"],["/mixed/images/avatar/1-1.png","f81eabdb1dca49fd9361e28658b928ad"],["/mixed/images/avatar/1-10.png","4e505cd1fefa5a3170dffaba0b28a363"],["/mixed/images/avatar/1-11.png","171be406128575cd5248e5b590888c77"],["/mixed/images/avatar/1-2.png","ef7bc4ccd78ee7f9c3269041a2bcb6d7"],["/mixed/images/avatar/1-3.png","5d30366f5b8327c9be0f605ee89230cb"],["/mixed/images/avatar/1-4.png","0e0b15ffcbb3309ad020e1f1806d07aa"],["/mixed/images/avatar/1-5.png","f40e9e6ef38d48d522956106dd3f26bf"],["/mixed/images/avatar/1-6.png","11266af8e077bdff516ca2e4e85e4116"],["/mixed/images/avatar/1-7.png","3a5e4af38ecdbe48a713b9041de65b17"],["/mixed/images/avatar/1-8.png","84c6439910e4fed5871b5fa8ac79d053"],["/mixed/images/avatar/1-9.png","64fc8cdb87c574300e057670cf9cca8a"],["/mixed/images/kindle.png","b6c0b5ba2e214420c57d278267dd011a"],["/mixed/index.html","cb61fa85c3b368671d27a5fefd7acf7d"],["/page/2/index.html","e8129a151c1dc417ea4ac055df73ef2a"],["/page/3/index.html","e4397e692a2deafcffaf257572d802b7"],["/page/4/index.html","784ce28cc9fdcd92a4c972627acde132"],["/page/5/index.html","56fa79698b4119af9e49e15151a8305f"],["/page/6/index.html","1ee254c62ed619dbdb64501c638ec436"],["/page/7/index.html","4b8e22d7498e5b2a43beca547dd01abe"],["/tags/API/index.html","9dcb99181b8fd95e9c9d8e8eb3fc107a"],["/tags/Android/index.html","dcac3566499df70f01dba95f7be73703"],["/tags/Apache/index.html","cb1edcaf25ae6326ae1be600fb556744"],["/tags/Emulator/index.html","7a7a4ad1f9ef4c85fdf78178e378d2d9"],["/tags/GAME/index.html","45a088970c4c08d8034537dd3abd75d1"],["/tags/Git/index.html","475aaa307e4a9cc983aea5dc0ccba3d5"],["/tags/GitHub/index.html","c5595306b1665402b4c734b2c6cf8210"],["/tags/NGINX/index.html","b95560ead8af5ebb33ad65bf6dedb9e2"],["/tags/Nexus-SSL/index.html","428d09ef3ac4f2de8f5a9fbb57e7e011"],["/tags/PHP5-6/index.html","6111afac53b8ba44cfed2f0097f90aa5"],["/tags/Simulator/index.html","84fdeaaffd606e0035824b9ab6e9275c"],["/tags/TOMCAT/index.html","8c0997b9247928700f15cb89cd1f55e5"],["/tags/VUE/index.html","b05eff31fff22e1c9851d91995dfda06"],["/tags/angular/index.html","7942910182472a42e492e36ea0174664"],["/tags/blog/index.html","a25bfbe5980caf09096cf0d10c621b44"],["/tags/centos/index.html","f821197002c17ca6ef19e4b275b1ef99"],["/tags/docker/index.html","c257813c535bc60405b67f55e5e336c1"],["/tags/gitlab/index.html","42123107ed242009b805b6fa3e49fe00"],["/tags/hexo/index.html","3521fca429aa5fe8a6d47b73e3b92f44"],["/tags/iPhone/index.html","000c02cf91019ed04a2b5e4359cccb65"],["/tags/index.html","e5f98f3e0452bb675dc076560cf4caf9"],["/tags/javascript/index.html","efe73c53377e5786e081db1dfc0eb326"],["/tags/json-server/index.html","df32a4ddfe2a0f05845663bfa9f0cec4"],["/tags/linux/index.html","5246bf0d1a866094eae788cb5c84c9a9"],["/tags/npm/index.html","218f85ba99bd5419e715f6e7aea65983"],["/tags/nrm/index.html","a6cc0cd6d627d0e3872efadc89890362"],["/tags/nvm/index.html","6f00332b78c4bdc5e54da99fb65b7faf"],["/tags/powershell/index.html","acc5704193cab713d59b70f7a7d18d5b"],["/tags/quasar/index.html","7ea644b45ee33ef27d9a69cf24014614"],["/tags/runner/index.html","013ba7c1f5d89fd51134b07e8cf4f929"],["/tags/script/index.html","3b54af424fa5de702c1453135968bb6c"],["/tags/sonarqube/index.html","b7217bcbc1d6490f49fe44ce6e705e88"],["/tags/vite/index.html","c64a1548a4cb13df3b8346df438906a8"],["/tags/vmware/index.html","aa6da3b8f14d40717662eebc7d58bbed"],["/tags/yarn/index.html","30ae9ff3077279ebd061cef70a1e43fe"],["/tags/仓库/index.html","521f19d4a241b53924b6c4db61e10188"],["/tags/分布式版本控制/index.html","99268ff173e589927aabca515ffc1958"],["/tags/前端/index.html","f8e264f387c08f60a2cde800a449c27d"],["/tags/前端MOCK/index.html","a88a8caeb2986bcb30edb9be0446e08c"],["/tags/只言片语/index.html","8e83ae6f4738a91264f81d01123813c1"],["/tags/名言名句/index.html","3023bf41bae88da2d8f76fddaf5a2a54"],["/tags/唯美/index.html","d50ba9c8225171d62454d8828ef1014a"],["/tags/幻方/index.html","646bf762d9c047766623a2e0cde38ac1"],["/tags/感悟/index.html","2f220d0a3b92d9be42a0c090f989001a"],["/tags/数学/index.html","8ec6d996a293fc45ef11006a000016c3"],["/tags/测试/index.html","f033a1f911d92b12e956dd03cded703b"],["/tags/版本管理/index.html","4095cd5ad63da57fe9d226e607197496"],["/tags/环境配置/index.html","53f1448a6a26fbc16e1671fef0c11213"],["/tags/算法/index.html","915435d43b18142c230e3ad56b86429d"],["/tags/经典/index.html","db6380cbb022c86adff0fac6fdee89df"]];
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





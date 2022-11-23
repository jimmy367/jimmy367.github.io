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

var precacheConfig = [["/2017/06/21/make-php5-dev/index.html","70141da62fbb385cbde47e7a84ff05b3"],["/2017/06/22/simulator-and-emulator/index.html","7de3efa94d60003c0f1e6d67e9cf5162"],["/2017/06/23/simple-git-command/index.html","fd405f47f1e3b0f41865dc4f3d86c362"],["/2017/07/07/odd-number-factor-magic-squar/index.html","0a6f512ddc777515822cf859984e1973"],["/2017/10/07/math-100c/index.html","5cc7af13cba09740228df6be79aa42bf"],["/2019/04/11/api-mock/index.html","a444002a6bae177f82b1f35eef44ad92"],["/2019/04/15/learn-angular-part1/index.html","9b7019cf74eb248d0464fc3f21a20cf0"],["/2019/04/16/learn-angular-part2/index.html","90730624fd2d57248ead4d0ddac785d8"],["/2019/04/18/classic-quotations/index.html","ec6c149abf28a9ac72cbcec1b991e8d1"],["/2019/04/19/learn-angular-part3/index.html","b24c4bf8023b6f279d3ed95b924a8f2c"],["/2019/05/22/learn-angular-part4/index.html","f4c37a7425cf9bb27f052dfb52047053"],["/2020/02/20/classic-quotations2/index.html","23acb523000c712cb71fe06348e92dd5"],["/2020/03/22/Execution-Policies/index.html","f84166ced9dcbf4478537e389f61c265"],["/2020/03/22/hexo-github/index.html","a63271b4efa6e6010aef6366e752df1c"],["/2020/03/22/use-nvm/index.html","0b22d6e2db10b512076f54762a7acea9"],["/2020/03/27/modify-post-data/index.html","d25930894252d1679604c502627f984a"],["/2020/03/31/docker-install/index.html","2753e497ab7a7f3072c08fd837850cab"],["/2020/03/31/vmware-centos/index.html","9cbf9989d1b912725c6fcfe996b73268"],["/2020/04/01/gitlab-cicd/index.html","ca9a69c2069ce939de1e9553a50726bc"],["/2020/06/11/classic-quotations3/index.html","378afbf257918c098d7869a7db040e7c"],["/2020/07/07/it-quotations/index.html","f09db32fef5830f3cb06a23032798d77"],["/2020/10/14/classic-poems-md/index.html","79adb9bb825d76150d901dbfd2630269"],["/2021/03/11/nginx-setup-intro/index.html","313d36a41a8c4c70b7f2faaf6d863699"],["/2021/07/29/classic-quotations5/index.html","c59e0584849b9dae0937cf28afd80fa8"],["/2021/10/22/vite-5173/index.html","0b0ef2dd7fe9b6eeb7838061775b7bc4"],["/2021/11/22/yarn-command/index.html","74be4bd2511a4b08f5f53bca601235ae"],["/2022/01/11/classic-quotations6/index.html","9986e64fa946930297b8fbb0ce6ed313"],["/2022/09/28/make-nginx-tomcat-dev/index.html","73577f63451d47e09962f99e96856938"],["/2022/10/11/classic-quotations7/index.html","289698e2f6cc3697d8c563917a3d5252"],["/2022/11/15/go2048/index.html","836a37f442a3cedf75f382ad614e3a68"],["/archives/2017/06/index.html","1c561bc9e16ae9460b551f1011194bcf"],["/archives/2017/07/index.html","6a04738bce0ed2de1aa1e0c4ec0969b8"],["/archives/2017/10/index.html","b37b3fd3ab4354cf4bca44c81d3fd52b"],["/archives/2017/index.html","c586b3fa2aa41fc8ac26efec07cc09b7"],["/archives/2019/04/index.html","06251affbb7dc5c401aed71ef3283a4b"],["/archives/2019/05/index.html","ea6f47c582d4e748f759754798a30462"],["/archives/2019/index.html","4e501bdcd38c4c2c3a25dcf14b1c820f"],["/archives/2020/02/index.html","f3031ccdfab9f359d231ecccdc231457"],["/archives/2020/03/index.html","d30c09e5ae507e2911b62bd6ec57aaf9"],["/archives/2020/04/index.html","d7ce0cc7984c798c61d1d4dcdbb2f764"],["/archives/2020/06/index.html","1a73cefb40a3018fdadf1bb176f1d644"],["/archives/2020/07/index.html","ca1c675d6101d9c7edab7b8d23a0c23e"],["/archives/2020/10/index.html","28429ea5d90818edb11198723b3399b1"],["/archives/2020/index.html","6be57cdd42062b5d671b89aff81b2ea6"],["/archives/2020/page/2/index.html","149bfd7e9b557eea01f99e83ea251b1a"],["/archives/2021/03/index.html","1dc870c95770d8e56363570ea2b1f3d8"],["/archives/2021/07/index.html","0347b9dabe5508cc7bc25080dc0af2e8"],["/archives/2021/10/index.html","8438d9250a0cdb90c7a4f50dc48f6e09"],["/archives/2021/11/index.html","06c7d915ef31f65a2da8296112840759"],["/archives/2021/index.html","d132d62c255325c3899a3ce1a9c38236"],["/archives/2022/01/index.html","3ed28ce596eb939c37cd01cb06c9d85f"],["/archives/2022/09/index.html","be73591a3918adaebe5a5eea02f95973"],["/archives/2022/10/index.html","8833cb59984d50516b9981d70e3c9533"],["/archives/2022/11/index.html","3b03675f143b59d91c5ad61f3343e227"],["/archives/2022/index.html","18003d7388992724dfdffd934dd30c4b"],["/archives/index.html","d412bb5d7a901e11ff99761b57e7fba5"],["/archives/page/2/index.html","4a85cdaf9ecb6d2f711ed2d2cb2f681d"],["/archives/page/3/index.html","0c96b405c466c25b105081c954759220"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/IT/index.html","3e871563efe826f5d6c0d7f8cbddec33"],["/categories/Web/index.html","a83fa46211ccf5e5a55c9b6c53888d2a"],["/categories/Web/page/2/index.html","b9065a165166d110167edee2ff1da14f"],["/categories/Web/开发/index.html","5307bf47bfdda00b1d36e3f5bc09a7f6"],["/categories/Web/开发/page/2/index.html","31e46d91c091dcc685a6fe2a0c5eb031"],["/categories/index.html","7bbb165eaf19886ac38c1134164b7140"],["/categories/只言片语/index.html","e81e3f4d60783a308c487ecbb10d79f0"],["/categories/名言名句/index.html","46a18623346b8893d7d1379e28cbfa89"],["/categories/开发/GAME/index.html","ffc4492536437b92ac672fe24bb2fef5"],["/categories/开发/index.html","d49ae782ff5f740c81d1a776e0cf6a6d"],["/categories/开发/环境/index.html","7dad26a537298bc898ba93697cb3b97a"],["/categories/开发/项目管理/index.html","6f543f8a0bddfbf453896def77e8edc6"],["/categories/搭建/index.html","8e47c7dba8739c3fe86bec7a006bd77c"],["/categories/搭建/个人博客/index.html","5d26f071e60f84082edd566980f543ae"],["/categories/数学/index.html","cec3dc4532dd5356c671e87b23bfcafd"],["/categories/数学/算法/index.html","91302b68b4ea717726aa2f75afede429"],["/categories/移动/index.html","23dffec739f05e271ac3f72b478b1248"],["/categories/移动/开发/index.html","b272217c8e75033fe6747e3812f3bb22"],["/categories/系统/index.html","da8d4f6d09b7f648885164a7a42d91cf"],["/categories/系统/设定/index.html","ff18d21285576ca0408e29b78643e998"],["/categories/计算机基础/index.html","27fd7da2b7be2daf4da3cb648addae44"],["/categories/计算机基础/算法/index.html","b5309182f93a786d7808522e94553c5d"],["/categories/资产管理/Git/index.html","52f2645be0cd0cfa677e13359f4a286e"],["/categories/资产管理/index.html","4fe906354dd03ed07b8806c4ba6436e7"],["/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","969141c96bd00e31503b5d33362cabef"],["/game/alegeb/assets/index.1fd69727.css","312469eebbdab4c482e7bb1e11715204"],["/game/alegeb/assets/index.4bd4fa98.js","76c8be9e73b7a6811a9035ac0aeb7d99"],["/game/alegeb/index.html","ff008e5712317312f927748a4879832d"],["/game/alegeb/vite.svg","8e3a10e157f75ada21ab742c022d5430"],["/game/index.html","64f18c446c180ca2d720bdd88ac753f4"],["/game/sortnum/assets/index.70e223c2.css","642d6a3097b9e86dd2e2cddd3c3be7c7"],["/game/sortnum/assets/index.b149f31b.js","abf1a0c881f2b8c228a92ac05cb1a623"],["/game/sortnum/icon.svg","b6cbc75c21422cd9d2b07bd5c1fccb4b"],["/game/sortnum/index.html","22c31481b0fc2f5f951c22f06b43171d"],["/game/v2048/assets/index.4ae8fdc4.js","15b2b2fa206d3d1f799478b41d0fc539"],["/game/v2048/assets/index.8b3013eb.css","a82811291a800112da80b379808db8a6"],["/game/v2048/index.html","e1e60885326b7b586a49a5b28fbf92df"],["/images/pwaicons/144.png","efff21439c827d34d0cc72b2dfea6043"],["/images/pwaicons/192.png","8553936f00b640f2b64ede4ade6735c7"],["/images/pwaicons/36.png","cc5b0122a3428f892a764204492dea90"],["/images/pwaicons/48.png","1308d018c508749ca67b27e0e7da417f"],["/images/pwaicons/512.png","13745279d10098e794ce653fa753d606"],["/images/pwaicons/72.png","3bfa02fd2e0a6bec63b030d13ecffa83"],["/images/pwaicons/96.png","bc7b3a07927a9a1c2e1fd8529a79a50a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","2f96ab0f2cf3a929e0986610a25ea74c"],["/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","5056520900f9abbef466215f9e439687"],["/page/3/index.html","90b8cc10ea65483bd4fcef329c9b4174"],["/page/4/index.html","415cb86658247a3ea957bfb22f16f703"],["/page/5/index.html","f9cb9046725d2e7dec087766263539ba"],["/page/6/index.html","9d05db9323ec4e0192f703a12ed2ce0c"],["/tags/API/index.html","fa03ac9bcfbb4aa59aafc94fd524d279"],["/tags/Android/index.html","87072d428fdf9804cca9caa3815e115d"],["/tags/Apache/index.html","8c5f459825f36708ac4d40fef491d208"],["/tags/Emulator/index.html","a38c05b63d3d3c3832b8f297e407b5e3"],["/tags/GAME/index.html","c6d75b837f7093221d5d244cc6e7c6c7"],["/tags/Git/index.html","9170ba0fe049878bae9fb73207dba2b6"],["/tags/GitHub/index.html","541a80a6270a293ac0bd4832fbb73de0"],["/tags/NGINX/index.html","c095e5b3d5c46878791b1567c327488a"],["/tags/PHP5-6/index.html","9d92555b700f3c138b18287ae9aa7427"],["/tags/Simulator/index.html","e0ceca7286de1b2bd10632f2304e6709"],["/tags/TOMCAT/index.html","55ecd0cce48848efd167b94a2476e578"],["/tags/VUE/index.html","5dd239097b8a1834ad72a9f91a22a752"],["/tags/angular/index.html","0279814d60d17c1d4aaabc030a6d6093"],["/tags/blog/index.html","1d6eb1d13fd2a510ed244379e2eb2852"],["/tags/centos/index.html","9aeb4283224f73b997f1144c6864eab4"],["/tags/docker/index.html","5c6ab128cf7e1bb5069533b4395edfad"],["/tags/gitlab/index.html","288782a2ee300c2c12da222627f5f994"],["/tags/hexo/index.html","c03d1ae14c4e1763332781b09f1cf90a"],["/tags/iPhone/index.html","36fa89ad6714e16b5c71b0a6a53010ba"],["/tags/index.html","a2cd31a9e151f4cc1d0cd1d1f87b738b"],["/tags/javascript/index.html","1b7be0747ccf3ab03e787f6429238698"],["/tags/json-server/index.html","24ca13203527255c1b8886a9b49c4e1a"],["/tags/linux/index.html","65258c37192d6a268079298e81199f76"],["/tags/npm/index.html","c1e3d8d77e40de79d16a17fd8dd64208"],["/tags/nrm/index.html","25d17cb02ee34abb01ef14786993a286"],["/tags/nvm/index.html","ece578363ff85e340ff0037bcb751fe5"],["/tags/powershell/index.html","8341938f1c55db9a659cd6429d56a03d"],["/tags/runner/index.html","ba52fb1d32866d94f570014f991292db"],["/tags/script/index.html","6ec359f358d71000565ddf4df220f7a8"],["/tags/sonarqube/index.html","8f98cfe3dca4a4cb6c03b604468d6760"],["/tags/vite/index.html","c623895dd39d660da118a27a524396a5"],["/tags/vmware/index.html","7704db5fbe8b7bb0130ce12a7ba48cdc"],["/tags/yarn/index.html","f881e87d2a74f6c3e3407d550dc78153"],["/tags/仓库/index.html","98c5290191ec09b3368f5de6a518dee0"],["/tags/分布式版本控制/index.html","0858cd78daad780cea9779e6e9693197"],["/tags/前端/index.html","016e4397b9360987f22aa1a351eec1d7"],["/tags/前端MOCK/index.html","db17ff935b64dedd4fed39601e3ee02d"],["/tags/只言片语/index.html","e3e09f9561409784ac62441432a1e931"],["/tags/名言名句/index.html","7a0a61787b926fc24400e415cb36ebc3"],["/tags/唯美/index.html","aaf4c92a33ea54879dfbdb3542b3acb4"],["/tags/幻方/index.html","21306b20802a880b3581a428ecdb1457"],["/tags/感悟/index.html","862a1fa99ab15c9ebc55656aeaf0d27b"],["/tags/数学/index.html","4800a9875fe3bc58da604d9ff3e55ddd"],["/tags/测试/index.html","c33b87e00d7a4140fa7e47a11c869341"],["/tags/版本管理/index.html","f1e5750581fc99c67db325bb10bc3902"],["/tags/环境配置/index.html","ab9c1a55993d34dd4ea8af699087fbdb"],["/tags/算法/index.html","66d7953f3d7c9d48d19f86c829130fa2"],["/tags/经典/index.html","a437bf98221cdab0e0dcf7d4b41a3108"]];
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





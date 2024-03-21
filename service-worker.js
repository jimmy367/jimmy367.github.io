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

var precacheConfig = [["/2017/06/21/make-php5-dev/index.html","96aacc2f7f2f80824689163d2edea854"],["/2017/06/22/simulator-and-emulator/index.html","111efac68d4f1ef870267e9ee37b2d29"],["/2017/06/23/simple-git-command/index.html","bd5c16bb928034fd33fe903da4a5564c"],["/2017/07/07/odd-number-factor-magic-squar/index.html","ebbb3c413891b12d004f07e655db6df6"],["/2017/10/07/math-100c/index.html","6e1a9a70d64510c19cc5732cf320a1eb"],["/2019/04/11/api-mock/index.html","b499ad846ce7fde9297bffd092c32853"],["/2019/04/15/learn-angular-part1/index.html","15396abac9044cf688694418f5bced2c"],["/2019/04/16/learn-angular-part2/index.html","eec915f2e0c6eae677d6738cccdc83f5"],["/2019/04/18/classic-quotations/index.html","a3d805f0c9c9f1ee7757a4e83ca85eea"],["/2019/04/19/learn-angular-part3/index.html","054d0c70c61e1aabcb802842dd22ac52"],["/2019/05/22/learn-angular-part4/index.html","346c2e43779693b61a028cbfdeb0ff81"],["/2020/02/20/classic-quotations2/index.html","ce87d1383ff65dbc038c3c954bc1793a"],["/2020/03/22/Execution-Policies/index.html","2685b222f9df7af5e5446c4c6e893dac"],["/2020/03/22/hexo-github/index.html","8228fe686ee7fe3df3403c67f1cbeb2b"],["/2020/03/22/use-nvm/index.html","f4c3cd1d903d1ee885474222bf1aaac2"],["/2020/03/27/modify-post-data/index.html","2d2f9153828a1ba8a8e924ab230b9355"],["/2020/03/31/docker-install/index.html","40f7ca0659e80cd0195c3303d995de79"],["/2020/03/31/vmware-centos/index.html","1da07f5b4f23b18dc1ba09ba4a8d9ffe"],["/2020/04/01/gitlab-cicd/index.html","a799a65435c529e417c39dcfe6da6dce"],["/2020/06/11/classic-quotations3/index.html","25d8496641902ca2c7463b1a81bc5d33"],["/2020/07/07/it-quotations/index.html","ae2a0ac0ecb07e0193c8d37ebd139a97"],["/2020/10/14/classic-poems-md/index.html","90b875488a0b8beaaf08dd3efd3970d9"],["/2021/03/11/nginx-setup-intro/index.html","66c225feee2f155ad1742938da2348ca"],["/2021/07/29/classic-quotations5/index.html","7161f3590712e1c03f9ba8e67340eccd"],["/2021/10/22/vite-5173/index.html","aa61a479feeaf998bf0c1cd8f40010e3"],["/2021/11/22/yarn-command/index.html","89ca3ad50d8a4f87f975673073a77a95"],["/2022/01/11/classic-quotations6/index.html","28c398e610559e4c3185b4e105d57eef"],["/2022/09/28/make-nginx-tomcat-dev/index.html","2c05a912e6d606589ae824f26960caa6"],["/2022/10/11/classic-quotations7/index.html","8a7fa49a011392cae7e23126aaae2e0a"],["/2022/11/15/go2048/index.html","55c2705adadc1cbec98e3070cb5e6268"],["/2022/12/07/quasar/index.html","42388ca2dcf48bb6afdf64e2c978efaa"],["/2024/01/21/githubupdate/index.html","9e1d21ec8d2904df2e3e0ab0a67bcc3f"],["/archives/2017/06/index.html","0c279a73aa227725360aa70610a53f20"],["/archives/2017/07/index.html","1f03c86fea43dee4579f735b911f2cbb"],["/archives/2017/10/index.html","ffea6eb183399f01a7b2aa6a2ec3157a"],["/archives/2017/index.html","8c0c948095032b3f79ec1a9317943953"],["/archives/2019/04/index.html","ac20e9debeba9018b31e1e8213a2374c"],["/archives/2019/05/index.html","af6f98d8464bf136f4277a1fcd4c6697"],["/archives/2019/index.html","929619015b0bfff40450406bd2e096f1"],["/archives/2020/02/index.html","bdef6a786edb75e2513d114da8bbcd8d"],["/archives/2020/03/index.html","5edc33ea47d7015b0690941b8ee7ba4c"],["/archives/2020/04/index.html","4d476dcf2c214b9440f7423b8a0d05be"],["/archives/2020/06/index.html","dcb1258723897d0ca822be38abcf2ad6"],["/archives/2020/07/index.html","21019790a7ad60a78974d859bceaf1bc"],["/archives/2020/10/index.html","03969f94b325679521ec38098eac2be4"],["/archives/2020/index.html","22b91ea47b1dc9e8272fd7e1547ab66f"],["/archives/2020/page/2/index.html","3061ad479130f6e7c38b3c10af72ccd0"],["/archives/2021/03/index.html","75e66994eb26f1dfa7e706c0540cb2a6"],["/archives/2021/07/index.html","801a8b20653fdc53e7e0dedce2cbac78"],["/archives/2021/10/index.html","c6432c7426822556dc0c909f2d8282c2"],["/archives/2021/11/index.html","fc4d9a75d880fcc439a43b8fe0128785"],["/archives/2021/index.html","eac801866ecaa21d1daf01a08b1c3f69"],["/archives/2022/01/index.html","e91a69735146846960878ef3b1734eb8"],["/archives/2022/09/index.html","f9e91aa2b5cdf198738c5b731d8324b7"],["/archives/2022/10/index.html","503be8056654abad04e93205c3584bbe"],["/archives/2022/11/index.html","69efdf67d7844f7aa4261faccba39926"],["/archives/2022/12/index.html","88e47e9f8827e8468dd37e29752081ca"],["/archives/2022/index.html","53b4ede8cacb8294722897a7affe5d73"],["/archives/2024/01/index.html","c41017d4a44b0cc078727d6c6c6fc6d5"],["/archives/2024/index.html","39963bfe837c058cf84125c545f7c536"],["/archives/index.html","77f534a240f6a09049055eda1bc5feda"],["/archives/page/2/index.html","2065b22830bf22317fa14b67976f3c97"],["/archives/page/3/index.html","f1216040017e442a01f08e7a92080460"],["/archives/page/4/index.html","8e992c2ed1f774b66023bcf6fd7be2db"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/IT/index.html","0a3362e44a9d4611612aa6d96ce30035"],["/categories/Web/index.html","e4f0877fe617696e4eda75613e73c605"],["/categories/Web/page/2/index.html","174bdd353c091052ce4d4f8a63bcc0a5"],["/categories/Web/开发/index.html","58a3ce763e7363e3f8eb1b0a44458831"],["/categories/Web/开发/page/2/index.html","e09e6978013f400ffcb9851dd9a27996"],["/categories/index.html","a94e7874121e229044b1f5a191651c0f"],["/categories/只言片语/index.html","802dac9387eee5778f20e58e23ba5505"],["/categories/名言名句/index.html","c938e204e2cbd27fddd8aa0c5b10b86b"],["/categories/开发/GAME/index.html","88479c780c7c27b756887dad1b36d321"],["/categories/开发/index.html","90d67a44ef84606a815a4832a7dc22c8"],["/categories/开发/quasar/index.html","5722d2ed19eb3fb8e722618b64d1696b"],["/categories/开发/环境/index.html","b16088e08ab909cf5ed63be355e796a0"],["/categories/开发/项目管理/index.html","9187dad114b5da0f676a3b06f0fa91f6"],["/categories/开发环境/index.html","3f9263674e5a198a6d349c0c7d9de26e"],["/categories/搭建/index.html","347001292ccfb319397add2ee22299b4"],["/categories/搭建/个人博客/index.html","9999677bf2599437b6a2835d7c739759"],["/categories/数学/index.html","6ec49ca77bc8dc874e2e74536a8e61e8"],["/categories/数学/算法/index.html","737aeb57da3d22a8b7780bd62c6fc700"],["/categories/移动/index.html","427adbc262417c5a2064314db9fa2d52"],["/categories/移动/开发/index.html","7300559975acf0cf7c434fbfc5ebc503"],["/categories/系统/index.html","00edeabf411bc3805e434182c8b9a92c"],["/categories/系统/设定/index.html","fbb598a5f98f292c583573cfe382de0d"],["/categories/计算机基础/index.html","3a6ad96bd6c3972ab34e61c2245b64c1"],["/categories/计算机基础/算法/index.html","bfdf068a51f13cc04c56d41e487be872"],["/categories/资产管理/Git/index.html","7b5ba7bf8dbc166cbd38dfaa9d580e2e"],["/categories/资产管理/index.html","440bc295eb04166c97ab26a1b4fa5576"],["/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","28df3a7ccd41965be29886082a7bb807"],["/game/index.html","2e6d0dbb65d4ac1d11db2791e320a493"],["/images/pwaicons/144.png","efff21439c827d34d0cc72b2dfea6043"],["/images/pwaicons/192.png","8553936f00b640f2b64ede4ade6735c7"],["/images/pwaicons/36.png","cc5b0122a3428f892a764204492dea90"],["/images/pwaicons/48.png","1308d018c508749ca67b27e0e7da417f"],["/images/pwaicons/512.png","13745279d10098e794ce653fa753d606"],["/images/pwaicons/72.png","3bfa02fd2e0a6bec63b030d13ecffa83"],["/images/pwaicons/96.png","bc7b3a07927a9a1c2e1fd8529a79a50a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","e0c72ee4565fc311a19de6ac2e0e239f"],["/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","59181b648c7706b9199a66c38c23822e"],["/page/3/index.html","f8025726005b1508b42cdab8d018b22a"],["/page/4/index.html","08da8448da930ab24eb685bb080e474c"],["/page/5/index.html","b5ff03613fc6fdd4ab732d02f101cb38"],["/page/6/index.html","565f474b39e89dbf9370e025e04172e5"],["/page/7/index.html","915a7b56c0492434db56f21ff5878e9c"],["/tags/API/index.html","6a68ddc7f68e8f3c1cae5e77069bbc04"],["/tags/Android/index.html","e1cc277f7d6468a411d66e1f589bb69b"],["/tags/Apache/index.html","2e01d801fb44a59ac9b2f4dbd1aca2b5"],["/tags/Emulator/index.html","b2dccc47f3392ccf1b49275053bc1e5e"],["/tags/GAME/index.html","81de8da70a3c075df2a2b39605ce4dc7"],["/tags/Git/index.html","73cf70727e64f435256ddb63e60d4176"],["/tags/GitHub/index.html","852d2a0f76cbfc9178c13778a1e2241f"],["/tags/NGINX/index.html","ebaad826fcde62ed91df51b69c659a78"],["/tags/PHP5-6/index.html","f8acc638465f6a208621e755c44fbe25"],["/tags/Simulator/index.html","296400d304ae735bab403b8d86581a8f"],["/tags/TOMCAT/index.html","8ee503662cb1682eedd87c08aef52b30"],["/tags/VUE/index.html","73c41119e07c7701062539b8201126cd"],["/tags/angular/index.html","0338a7f06f5f724c8bdb85b7b0a1a5bd"],["/tags/blog/index.html","59137c9230415b80834d02f237f05a47"],["/tags/centos/index.html","91c458ba74b0a8ffad9b7c27373b7167"],["/tags/docker/index.html","b1b72e8a39bd6fbb452da1b4799e35f4"],["/tags/gitlab/index.html","05d2507c7334272fb16261ea18945908"],["/tags/hexo/index.html","c6a920e419363aba49d917b4b7778fe9"],["/tags/iPhone/index.html","66bea2181cd02f9443c24465a2ee1fa9"],["/tags/index.html","8919141d8610a51014d086733a46a651"],["/tags/javascript/index.html","fbd4803a960ba6bc9a607a0688acb24e"],["/tags/json-server/index.html","a7e9ce7165858491d9b5c935e16b835a"],["/tags/linux/index.html","0bfe49eef8785421409648f3e08ee7a6"],["/tags/npm/index.html","b931dd2a59c9a6e59202a94e046dae55"],["/tags/nrm/index.html","dc543c02b7072ca88719b3f55439992d"],["/tags/nvm/index.html","f6ab3105999902fff1529ae75f5bdb90"],["/tags/powershell/index.html","403647d0265d8f7db29a0d92e3d40133"],["/tags/quasar/index.html","afda936746de4b7b06d8dce9271cd415"],["/tags/runner/index.html","29074a7a2e7a574c11af861686b2099c"],["/tags/script/index.html","668b671ff523a45070eca691dd2ecc9f"],["/tags/sonarqube/index.html","97cd429929b57e4b18f20dcf7c631c90"],["/tags/vite/index.html","056717aea44aa7c04c99503b2c5a85a5"],["/tags/vmware/index.html","000657db185426911b33ef75f9d7268f"],["/tags/yarn/index.html","dc2d2e25cd2321f80b70151a93086a33"],["/tags/仓库/index.html","107411894811db69c30b633786238adf"],["/tags/分布式版本控制/index.html","89f3e2f61d1771cb18a65cb4cb9979b6"],["/tags/前端/index.html","2c4e48be1a77366ddaf3e11e79aa72e3"],["/tags/前端MOCK/index.html","788674a610e5abd6f9639745d1165de3"],["/tags/只言片语/index.html","4bbce17c7e8247089f5357b6a81db34c"],["/tags/名言名句/index.html","b0ef62ed204bc9defe6ccf45451af24d"],["/tags/唯美/index.html","ace93b6477f1934db9b905030f271505"],["/tags/幻方/index.html","af25cade155cb215a34f97c68b94f50a"],["/tags/感悟/index.html","041a07e0c9342b8308ac0876b9958474"],["/tags/数学/index.html","91ae41027f5146c6fbbba9f15115a7ae"],["/tags/测试/index.html","4f2fe164f39c098e1892098cfbc79116"],["/tags/版本管理/index.html","d48b351faf25653f76c38f89e4b6a3ce"],["/tags/环境配置/index.html","95242a0b7f85064ed67416980265e84e"],["/tags/算法/index.html","6f869f1c4e3501f590a2c7b4f4caef5b"],["/tags/经典/index.html","acace87b1065f9ac3229c8e792df293b"]];
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





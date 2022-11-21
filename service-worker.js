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

var precacheConfig = [["/2017/06/21/make-php5-dev/index.html","28e76d69917a9d037c8b546f4d3876a8"],["/2017/06/22/simulator-and-emulator/index.html","18572955459290c3000c80664b4d2382"],["/2017/06/23/simple-git-command/index.html","bef1715c3970863a7521cac346564199"],["/2017/07/07/odd-number-factor-magic-squar/index.html","c0f1307c0ff125b5b7e538fa2981a902"],["/2017/10/07/math-100c/index.html","de6c30c2200c11fda4533d6a9a85e99a"],["/2019/04/11/api-mock/index.html","c72505fde223bb407457066fa48e09e6"],["/2019/04/15/learn-angular-part1/index.html","bff4911675802a4f6cf19bf91b53a791"],["/2019/04/16/learn-angular-part2/index.html","77bb94d173bb6d5c991f3596b64c92a3"],["/2019/04/18/classic-quotations/index.html","878fd228d9b942b4438652c39920500c"],["/2019/04/19/learn-angular-part3/index.html","0b0dbfa83cbc3e0d96e9c25b70f53769"],["/2019/05/22/learn-angular-part4/index.html","711c023f443773849830e6e654882a66"],["/2020/02/20/classic-quotations2/index.html","a091d8c0bdff6f4a93e713395b92b429"],["/2020/03/22/Execution-Policies/index.html","134ea160ff8400f877135c7213987037"],["/2020/03/22/hexo-github/index.html","a0dea7ad0ab350a0a49e58634cad3fa9"],["/2020/03/22/use-nvm/index.html","6b60a386250a67eb3569ffa740831a3c"],["/2020/03/27/modify-post-data/index.html","d3bfa2b1b89496330be9b6693689acba"],["/2020/03/31/docker-install/index.html","4496268be9318a2b871c1a718beca099"],["/2020/03/31/vmware-centos/index.html","7da61f8f630b16ed6247d92e8439229e"],["/2020/04/01/gitlab-cicd/index.html","ccf3f916b6ef1055a9517411b56a1e5f"],["/2020/06/11/classic-quotations3/index.html","c8c293717be5c1d5b76ee1be9f3b84da"],["/2020/07/07/it-quotations/index.html","e0b02cd36118f17e21cdfe976028f601"],["/2020/10/14/classic-poems-md/index.html","eb3850ad657633a6431a9d4f957dfed8"],["/2021/03/11/nginx-setup-intro/index.html","d582022369271aa9e29657e088f5d944"],["/2021/07/29/classic-quotations5/index.html","bbb96b09104a49b1d2e92a320e324430"],["/2021/10/22/vite-5173/index.html","cf337668e9659723c0f99fc266c6a9a5"],["/2022/01/11/classic-quotations6/index.html","d593804ced8f8c0efe66be04bc8c07c4"],["/2022/09/28/make-nginx-tomcat-dev/index.html","6b2b64c31bb4d41e0465c4af508868cc"],["/2022/10/11/classic-quotations7/index.html","955d79231a25ba87a5feef97e257f925"],["/2022/11/15/go2048/index.html","226a8cf3ff26366172a463641d35032f"],["/archives/2017/06/index.html","3621fd728739e8ef5a7b8b363ba47473"],["/archives/2017/07/index.html","c1a7028d9173b69695fbb5eaad45a23e"],["/archives/2017/10/index.html","455859f27fb9b176ee88f1612d040747"],["/archives/2017/index.html","d74cb62f88cef8147644ae9a859272ac"],["/archives/2019/04/index.html","5ae09ec81e4bedbc7c79cb1bb70f49e7"],["/archives/2019/05/index.html","71935624bac3c5100dc24f7e0cf7d2e5"],["/archives/2019/index.html","41baac3d429b283cc9bfb56576843ab3"],["/archives/2020/02/index.html","c544e0cb89c1ce81738442a961e13ea5"],["/archives/2020/03/index.html","ec23e05acc975dca7a7d77225e5a6451"],["/archives/2020/04/index.html","c5b8cf8a016de1aa3e753051ff3b55a5"],["/archives/2020/06/index.html","1ffcfdeea51036bbb3ff9a303a008653"],["/archives/2020/07/index.html","809dc3be5dbbcb67be0854538042b251"],["/archives/2020/10/index.html","dbde709c1da3ab1a5f1925564726af8e"],["/archives/2020/index.html","538aefd941434d63a3311db6f2d90513"],["/archives/2020/page/2/index.html","8d81d4c10abc556e6edcd0b1cb9b9462"],["/archives/2021/03/index.html","4c3c0ef279592aff53baa56d09326260"],["/archives/2021/07/index.html","0f62ad0890322d8074abb452f78d3cde"],["/archives/2021/10/index.html","99b3a1d14fc6483bcbb5bb2f1a44b0e7"],["/archives/2021/index.html","f0f87496ed509d6ff2997c3346189366"],["/archives/2022/01/index.html","ce614992a6efb4ee1238f6117ede4f58"],["/archives/2022/09/index.html","24297bc87faeeaef14d117df8f1181e2"],["/archives/2022/10/index.html","5ff786e43c51330bcbe452c36f3bce12"],["/archives/2022/11/index.html","bba283133c4af7fe4c7c1b97044d7095"],["/archives/2022/index.html","bcf19062b9c8a4f2c34f3edc57833e48"],["/archives/index.html","467ad2da5f0b4f9d090077195b41b13e"],["/archives/page/2/index.html","cb306c05828ac67b7fb3d07f7dc50c9b"],["/archives/page/3/index.html","09a62c0d7ddc8c786a2c1d659b33fe4a"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/IT/index.html","e130497b7fd042dd6e78cbc13612c63a"],["/categories/Web/index.html","086d2be5f376e90dd9fbda4c02179cf6"],["/categories/Web/page/2/index.html","f67325e023bff4e838fff8baee721694"],["/categories/Web/开发/index.html","ee05e789646a581cde7341995b48cf7b"],["/categories/Web/开发/page/2/index.html","fbaa1d1d28e18d68a26bedc950157f26"],["/categories/index.html","3d268e3f730b0014005d2bc618ea47fa"],["/categories/只言片语/index.html","f28f25b89fb4b28deb1ef31bf5774983"],["/categories/名言名句/index.html","91893977c4989e422166f7a6954a6b37"],["/categories/开发/GAME/index.html","2ad82703b0ad89020e74d498256658a6"],["/categories/开发/index.html","633ca8b78a6345f3cf47f8a098c2a76f"],["/categories/开发/环境/index.html","07ab55cb9526702183552b82594d2324"],["/categories/开发/项目管理/index.html","d04bf8f720d9d831f9003ce2720cf3bc"],["/categories/搭建/index.html","6a9285ddbe732e4eee2b14f90bfb2e7e"],["/categories/搭建/个人博客/index.html","01c533ce50ce62d3522ca8e0eb77644c"],["/categories/数学/index.html","c70d048e495bd1499f240fe7849b4db5"],["/categories/数学/算法/index.html","a1b93d18c2c4d885a3699a55b6eef3e7"],["/categories/移动/index.html","c8e8f8ba21bc252bb0c0fb935d2f894b"],["/categories/移动/开发/index.html","95efe523a6b2444ab4a797532b3c9555"],["/categories/系统/index.html","a2b64afed5de21952421fefc2d9b75d9"],["/categories/系统/设定/index.html","3374827652503e7ed148697987fb28a7"],["/categories/计算机基础/index.html","d71fc89a21d1ae24931864d7f9e192dc"],["/categories/计算机基础/算法/index.html","fd45a301c8d5a392e4d0091a1cc89749"],["/categories/资产管理/Git/index.html","f124d0ceacdea31236917944d2bd97cf"],["/categories/资产管理/index.html","2e8c02043d708ad403ac92a4d6711e62"],["/css/index.css","9911b20a2e31dc1aa98c48e483335237"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","006cb124f08698d9a04bb61a4da5acca"],["/game/alegeb/assets/index.1fd69727.css","312469eebbdab4c482e7bb1e11715204"],["/game/alegeb/assets/index.4bd4fa98.js","76c8be9e73b7a6811a9035ac0aeb7d99"],["/game/alegeb/index.html","ff008e5712317312f927748a4879832d"],["/game/alegeb/vite.svg","8e3a10e157f75ada21ab742c022d5430"],["/game/index.html","43721482f86fac6a421a5196600e6f82"],["/game/sortnum/assets/index.70e223c2.css","642d6a3097b9e86dd2e2cddd3c3be7c7"],["/game/sortnum/assets/index.b149f31b.js","abf1a0c881f2b8c228a92ac05cb1a623"],["/game/sortnum/icon.svg","b6cbc75c21422cd9d2b07bd5c1fccb4b"],["/game/sortnum/index.html","22c31481b0fc2f5f951c22f06b43171d"],["/game/v2048/assets/index.20717d29.js","6646cc01e8c1482af75f442f7117f734"],["/game/v2048/assets/index.8b3013eb.css","a82811291a800112da80b379808db8a6"],["/game/v2048/index.html","25c06ed422ca5e24bc5e9c36d399cba3"],["/images/pwaicons/144.png","efff21439c827d34d0cc72b2dfea6043"],["/images/pwaicons/192.png","8553936f00b640f2b64ede4ade6735c7"],["/images/pwaicons/36.png","cc5b0122a3428f892a764204492dea90"],["/images/pwaicons/48.png","1308d018c508749ca67b27e0e7da417f"],["/images/pwaicons/512.png","13745279d10098e794ce653fa753d606"],["/images/pwaicons/72.png","3bfa02fd2e0a6bec63b030d13ecffa83"],["/images/pwaicons/96.png","bc7b3a07927a9a1c2e1fd8529a79a50a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","4ed5b89aeac175464426c7d136804f31"],["/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","701885292faab33ed8f1045e3955bd1e"],["/page/3/index.html","8002ddd621ff0763c577f9d6373667dc"],["/page/4/index.html","7028ec2beba5b93e96c59610c4e4105e"],["/page/5/index.html","49e9f004672c0ba27e3f8d657521f216"],["/page/6/index.html","3db91a588360e32ce7f9048f5f1b6bfc"],["/tags/API/index.html","78c28e587a6cd7263cc0689dd613beec"],["/tags/Android/index.html","0f294eac8862252df0ff2c27a28914b3"],["/tags/Apache/index.html","dc128076c20e89dc7ce742272e250d91"],["/tags/Emulator/index.html","5704b45591125cd6088a313bb5dbb8a3"],["/tags/GAME/index.html","17abc3150e32d250556a8fbccf0295f2"],["/tags/Git/index.html","1df356babc53bd3e2c599b00dedeb45d"],["/tags/GitHub/index.html","3f8c5cb99915f2fde31750c8a49b1247"],["/tags/NGINX/index.html","0c0e64df5f78adfbf2f9b17cfe365f50"],["/tags/PHP5-6/index.html","6bc192ec99c2ef697d9f2dff07c6737c"],["/tags/Simulator/index.html","19108964cb93739453c93b10196be675"],["/tags/TOMCAT/index.html","cc7b9ea1c580c0a8ee92e5eb8e995c7d"],["/tags/VUE/index.html","6490f87a84c45ed7b693405483c96ca6"],["/tags/angular/index.html","930e623c4f5342af030d56aec685ae9e"],["/tags/blog/index.html","fe7403f1f91b87ce0bdb6a590b16a590"],["/tags/centos/index.html","3f53bc07e8be6551e9205d62b39861b3"],["/tags/docker/index.html","23d852f1a8485bf40763a770ede72467"],["/tags/gitlab/index.html","3edeaa8339266077bf0b6f04e4d82d6d"],["/tags/hexo/index.html","e0ee8781d6286c9239f1eae7eaceee15"],["/tags/iPhone/index.html","d84e03446be9865c8aea7cc57ed59eeb"],["/tags/index.html","2d927763fff838c2219888fc082b798d"],["/tags/javascript/index.html","0fffa7c9c56dd27f396d558c88f8e97f"],["/tags/json-server/index.html","cfe89c816f11c25533d12dd1a489519a"],["/tags/linux/index.html","7e97d87e8349adaecfe3b034d56082e7"],["/tags/nvm/index.html","93189ad63761e9c3719e4321d4255995"],["/tags/powershell/index.html","2a6af38790c7289f8be20ff67c95db5e"],["/tags/runner/index.html","1908662267635a60e305a3e58692fe6d"],["/tags/script/index.html","1bbbf661e979d05f8b2efbdd6b7bbb07"],["/tags/sonarqube/index.html","ae6e424897cb69d397123293ac4fd7bc"],["/tags/vite/index.html","4298e8f9bcd324c19ec74fe852eda977"],["/tags/vmware/index.html","7f1a26ca0c4dd7d9a523065fd533a2b9"],["/tags/仓库/index.html","81dc712fac7a2366ebf7c8d6edf151d3"],["/tags/分布式版本控制/index.html","2549e76efb49c201e12b9a45255b750f"],["/tags/前端/index.html","d45adfc27a6289883389cd7106c3d6d0"],["/tags/前端MOCK/index.html","4a128a54d6cf513288b104c7babd3fdf"],["/tags/只言片语/index.html","ce9f1f2885d3f9dd477b7bae9b0c11f7"],["/tags/名言名句/index.html","278aec7dd1ad3a4cba622481ebba9ba6"],["/tags/唯美/index.html","e6d6015ff4b6a808ac5d7913fdcdfbdb"],["/tags/幻方/index.html","09d44e775f87a776e8e97feb0940d328"],["/tags/感悟/index.html","009462211098fb44de227779ca88edcd"],["/tags/数学/index.html","f58b3d81cc6b52f0a5c514e8bcd6eab8"],["/tags/测试/index.html","b4dd17b0ca1a15bbe888e71bc499fffe"],["/tags/版本管理/index.html","1dcd4e316a22259cde30bc9de372ce5e"],["/tags/环境配置/index.html","d48b8985cbb33475257c46f0580fb189"],["/tags/算法/index.html","b4ed8f5ba198c9fcd0d84de3c23a477d"],["/tags/经典/index.html","f2e5ae58c10dc80728653c0f4333ab66"]];
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





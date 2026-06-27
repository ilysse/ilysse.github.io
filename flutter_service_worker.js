'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c4a098cd22603bcffc50e2ee8dd76ab3",
"version.json": "802894322b4a167d8b34823f06aaede0",
"index.html": "0304f14da5cba72dc0f36fb4bad0eb90",
"/": "0304f14da5cba72dc0f36fb4bad0eb90",
"main.dart.js": "500ae6dc38d2fdd8a1eb3063b16465c7",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6f19fe1eb9ef0246b32059f75bebe195",
"assets/AssetManifest.json": "6330ebb29afa3a31e445884e2007e011",
"assets/NOTICES": "25f53276bb0b6e2942028ad292f0fe24",
"assets/FontManifest.json": "9309a407d912badc3b17a314ce37dc0e",
"assets/AssetManifest.bin.json": "7cb44f42bde559434417f78ab3dfaf8c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/l10n/untranslated.json": "3107d227dd9250a4d78d7450cbe69275",
"assets/AssetManifest.bin": "2b869698c90d30a498e3a98b959e8056",
"assets/fonts/MaterialIcons-Regular.otf": "412f38f71d94eb7065383890418b7ae8",
"assets/assets/images/products/ImageUrl_24.png": "0387e5aca609d25ba935d2d2ee8c2e18",
"assets/assets/images/products/ImageUrl_30.png": "fc5a20015d915c7222294768ecf379c5",
"assets/assets/images/products/ImageUrl_19.jpg": "d045cdc8ef2a29021f77dc9c4c96bdd9",
"assets/assets/images/products/ImageUrl_31.png": "e7d6c70250d4ebfad33a315e8d28e54b",
"assets/assets/images/products/ImageUrl_25.png": "c8e3bfb42983b3102144a02e038656f4",
"assets/assets/images/products/ImageUrl_33.png": "6eb7ad98eb29638c48ecc76ca8cefbbe",
"assets/assets/images/products/ImageUrl_27.jpg": "5021401efce8a8b5cb18f19c16d4062c",
"assets/assets/images/products/ImageUrl_22.png": "2d667f16d5be3fab2c7c999f241897b9",
"assets/assets/images/products/ImageUrl_37.jpg": "bfb7eb648861a52bed2c3d2f611d858a",
"assets/assets/images/products/ImageUrl_21.jpg": "1cc713fef31a7cf8ecd40fb379310fe7",
"assets/assets/images/products/ImageUrl_34.png": "a923675b74ae806667782d053f58e819",
"assets/assets/images/products/ImageUrl_115.jpg": "e26fde18f0762e63ca9f6f361c1faee3",
"assets/assets/images/products/ImageUrl_53.png": "603ddffd59129e069672ce84484a844e",
"assets/assets/images/products/ImageUrl_90.jpg": "db0bfb383e1d38a16dfa960ee8a852a7",
"assets/assets/images/products/ImageUrl_84.jpg": "aaf189494f876dc26a91a48f09f2b2c0",
"assets/assets/images/products/ImageUrl_52.jpg": "1d1054397dc909c9c113c35d2eb8713d",
"assets/assets/images/products/ImageUrl_91.jpg": "57d08f0cbb1b145f47d7625094561135",
"assets/assets/images/products/ImageUrl_46.png": "e7000ff5c0a2a5e7dac73212b6dd67b1",
"assets/assets/images/products/ImageUrl_128.jpg": "ef048996dde169ccab1ed883605eeb24",
"assets/assets/images/products/ImageUrl_100.png": "eba86689c741f46199c9db8ac03a59df",
"assets/assets/images/products/ImageUrl_116.jpg": "ef048996dde169ccab1ed883605eeb24",
"assets/assets/images/products/ImageUrl_44.png": "db3ffa599232a983b6227fd9d6327b1b",
"assets/assets/images/products/ImageUrl_87.jpg": "57d08f0cbb1b145f47d7625094561135",
"assets/assets/images/products/ImageUrl_93.jpg": "a1681a7fa8b235b2b8ebb0a1f01b7388",
"assets/assets/images/products/ImageUrl_51.jpg": "0445c0b5a93059572dccf011bf848b2c",
"assets/assets/images/products/ImageUrl_79.jpg": "b7a5c7db21552e63519c8e1760a907bc",
"assets/assets/images/products/ImageUrl_103.jpg": "ef048996dde169ccab1ed883605eeb24",
"assets/assets/images/products/ImageUrl_117.png": "e7d6c70250d4ebfad33a315e8d28e54b",
"assets/assets/images/products/ImageUrl_107.jpg": "a1681a7fa8b235b2b8ebb0a1f01b7388",
"assets/assets/images/products/ImageUrl_41.png": "db3ffa599232a983b6227fd9d6327b1b",
"assets/assets/images/products/ImageUrl_82.png": "5b9672329eab0d998a4bb005be8186aa",
"assets/assets/images/products/ImageUrl_97.jpg": "c0b73974170256d0a6c33b891622dac2",
"assets/assets/images/products/ImageUrl_68.png": "5b9672329eab0d998a4bb005be8186aa",
"assets/assets/images/products/ImageUrl_112.jpg": "ef048996dde169ccab1ed883605eeb24",
"assets/assets/images/products/ImageUrl_8.png": "943cc5d9e88df28e59ae9c7438b3d861",
"assets/assets/images/products/ImageUrl_42.jpg": "a1681a7fa8b235b2b8ebb0a1f01b7388",
"assets/assets/images/products/ImageUrl_9.jpg": "47d991f53513688ceec23d84ba8bfb5b",
"assets/assets/images/products/ImageUrl_43.jpg": "bfb7eb648861a52bed2c3d2f611d858a",
"assets/assets/images/products/ImageUrl_105.jpg": "0445c0b5a93059572dccf011bf848b2c",
"assets/assets/images/products/ImageUrl_134.jpg": "df78d8d8cac605806210444b065579f4",
"assets/assets/images/products/ImageUrl_72.png": "6efc30436c1b2663e191b67c7131ec37",
"assets/assets/images/products/ImageUrl_66.jpg": "d8fa4a9be0a3e3eff9d1789063f7a59f",
"assets/assets/images/products/ImageUrl_5.jpg": "d8fa4a9be0a3e3eff9d1789063f7a59f",
"assets/assets/images/products/ImageUrl_98.jpg": "eb7e4ed670042a6f7cb594d4ac70b358",
"assets/assets/images/products/ImageUrl_135.png": "eba86689c741f46199c9db8ac03a59df",
"assets/assets/images/products/ImageUrl_123.png": "d63f228e946f422a91a27994b400ca47",
"assets/assets/images/products/ImageUrl_71.png": "2d667f16d5be3fab2c7c999f241897b9",
"assets/assets/images/products/ImageUrl_7.jpg": "49dbf4af194c71dbd09d4d9ee1e77b2c",
"assets/assets/images/products/ImageUrl_6.jpg": "9e597a4ab37b95d60a6cfaf0c0938a1f",
"assets/assets/images/products/ImageUrl_122.png": "90403d80c6272881f91fb89cfd9df550",
"assets/assets/images/products/ImageUrl_48.png": "5b9672329eab0d998a4bb005be8186aa",
"assets/assets/images/products/ImageUrl_74.jpg": "d8fa4a9be0a3e3eff9d1789063f7a59f",
"assets/assets/images/products/ImageUrl_61.png": "90403d80c6272881f91fb89cfd9df550",
"assets/assets/images/products/ImageUrl_75.png": "d63f228e946f422a91a27994b400ca47",
"assets/assets/images/products/ImageUrl_119.jpg": "eb7e4ed670042a6f7cb594d4ac70b358",
"assets/assets/images/products/ImageUrl_63.png": "82461920d9358687c4af913eb5cba27e",
"assets/assets/images/products/ImageUrl_124.png": "acc48ffa294b8b2bf688e23366b2500e",
"assets/assets/images/products/ImageUrl_143.jpg": "8ebc82bd1021cc8f5cacab430c4adb84",
"assets/assets/images/products/ImageUrl_11.jpg": "8f2ec3be5cc8fbc43d2d22bafd72ddc4",
"assets/assets/images/products/ImageUrl_38.jpg": "8ebc82bd1021cc8f5cacab430c4adb84",
"assets/assets/images/products/ImageUrl_10.png": "6f8bf6070eec27ff240bf536d3d69b84",
"assets/assets/images/products/ImageUrl_140.jpg": "eb7e4ed670042a6f7cb594d4ac70b358",
"assets/assets/images/products/ImageUrl_13.png": "ef2b474a232e68ccff0bb4fd1626cebd",
"assets/assets/images/products/ImageUrl_17.jpg": "029c07cf6a670f8253ec5c5650bbd5e0",
"assets/assets/images/products/ImageUrl_16.jpg": "1e29bc315968691fa9c0fcc28f5f8dfd",
"assets/assets/images/products/ImageUrl_14.jpg": "49dbf4af194c71dbd09d4d9ee1e77b2c",
"assets/assets/images/products/ImageUrl_29.jpg": "9a785caf20961534d69fd806ccddeb2d",
"assets/assets/images/jus.jpeg": "e21474f3412d99be48270969d5a75c68",
"assets/assets/images/banner.jpg": "f7ae79bc348cb70b9db24b3437e84588",
"assets/assets/images/placeholder.png": "f224ff0160f67369756cd0a3d539cc0e",
"assets/assets/images/water.webp": "c8782e6359dd8e6bf891d0a241adf1a7",
"assets/assets/images/energydrink.jpg": "daac58b8c267bb49fa5c59a008c18cab",
"assets/assets/images/limonade.jpeg": "4f20bf069514193534f67027da877631",
"assets/assets/images/categories/placeholder.png": "303588ae525236319710c644fee7f557",
"assets/assets/fonts/Cairo-Regular.ttf": "45aaa2b5f9de1d61c2d3fe1f40107ac8",
"assets/assets/fonts/Cairo-Bold.ttf": "2bbe2088a8d666fa99b80554fdc6effd",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

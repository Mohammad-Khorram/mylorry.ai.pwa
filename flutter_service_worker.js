'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "94f0f39030b0c3c7d9f2abca51e7fc0e",
"assets/AssetManifest.bin.json": "7bce10d7f40c834c81e089015f1b8cda",
"assets/AssetManifest.json": "c84868e53c865a863bd52664944dd828",
"assets/assets/fonts/inter_black.ttf": "2392341284c30f5fffb9fe0ab0cd983e",
"assets/assets/fonts/inter_bold.ttf": "8b04b3bd9435341377d7f4b4d68b6ecc",
"assets/assets/fonts/inter_extra_bold.ttf": "995fb5ac38b90303c0cc1a0b21e2c9fe",
"assets/assets/fonts/inter_extra_light.ttf": "8da347e947a38e1262841f21fe7c893e",
"assets/assets/fonts/inter_light.ttf": "65ec965bd90e1a297cdb3be407420abc",
"assets/assets/fonts/inter_medium.ttf": "4591e900425d177e6ba268d165bf12e8",
"assets/assets/fonts/inter_regular.ttf": "e48c1217adab2a0e44f8df400d33c325",
"assets/assets/fonts/inter_semi_bold.ttf": "c77560a8441d664af3e65dd57026dff9",
"assets/assets/fonts/inter_thin.ttf": "1e9e30c74648950a240427636b6c1992",
"assets/assets/images/general/check_circle.svg": "a564a457df43f4e30c42fe96d505eea2",
"assets/assets/images/general/chevron_down.svg": "d535734063a1a85a31b6c192b4e1574e",
"assets/assets/images/general/clear_circle_filled.svg": "111ee6f9d594b2e4432aeda4105a7298",
"assets/assets/images/general/close_circle.svg": "1335a6cd3e8ad91bfd7dff68f5e052f2",
"assets/assets/images/general/connection_error.svg": "afe2b996a234d6b439f5ca2c746fa397",
"assets/assets/images/general/empty_error.svg": "62b973d0f1eae71530af7233dd3701c2",
"assets/assets/images/general/exception_error.svg": "0aa23d115027f47e8ce00da9df9ed8ee",
"assets/assets/images/logo_colorful.svg": "b666370fba5caf7e75afcd065d973118",
"assets/assets/images/logo_white.svg": "b0c0b822589eebd77f5b402d35c1571d",
"assets/assets/images/other/alert_circle_filled.svg": "8bd91e7e19ac76c8fbb092a3dba1989e",
"assets/assets/images/other/building_filled.svg": "fa76a8731ec91a0f15a7afc7bc1aa828",
"assets/assets/images/other/change_photo_filled.svg": "4ea9bab8d08ca45ea4f52f9539af3ae0",
"assets/assets/images/other/chauffer_outlined.svg": "ac8284cb243c9fda40ed20c0dbfefcdd",
"assets/assets/images/other/checkbox_circle.svg": "c17df634b395e197c34e17a1ad879b37",
"assets/assets/images/other/close_circle_filled.svg": "023acd448b8fce8a1d1987a1b305d16c",
"assets/assets/images/other/driver.png": "75d55779045c55e2dab20b22094f6c95",
"assets/assets/images/other/eye_filled.svg": "dfd315b97bba913e346172007dcb1bfb",
"assets/assets/images/other/eye_off_filled.svg": "ef3d76504be7ba7337b4a974618f53db",
"assets/assets/images/other/folder.png": "35d0125ff8083f342a56bd4787824ce9",
"assets/assets/images/other/fuel_dispenser.png": "e6ad88814c72799b04fa0b571813fce9",
"assets/assets/images/other/google_logo_colorful.svg": "8e34085ea090878a1d974afb2b6fe0ad",
"assets/assets/images/other/hand_shake.png": "40d1ca8782dba19aaad009722b2e7d6e",
"assets/assets/images/other/key_filled.svg": "fe5faa0d4ac86270c5c948da84790a2f",
"assets/assets/images/other/language.svg": "6b3487b2b8dcecb8b5f1dbcca4999af2",
"assets/assets/images/other/license_filled.svg": "a3159a8f809a1a6c9d26b2adfa9ad71b",
"assets/assets/images/other/manager_outlined.svg": "9b7cff2a8fe91aa5be617f56da80701d",
"assets/assets/images/other/notification_filled.svg": "da9906561966c53e6f5a8274474039c7",
"assets/assets/images/other/notification_outlined.svg": "4dfbcc92cd972413e6fffe44049d1dba",
"assets/assets/images/other/organisation.png": "89a839b90a9d82275cbfec4498ed6367",
"assets/assets/images/other/shield_lock_filled.svg": "3216a8a916b7502296fd3331f72236b6",
"assets/assets/images/other/splash_cover.png": "5dba78e228346251960067a28dfeeed0",
"assets/assets/images/other/trip.png": "dffe853b7f0235e489282214afb2b971",
"assets/assets/images/other/truck.png": "2e1e731a80f27de8e27a67943e26532c",
"assets/assets/images/other/turn_off.svg": "489b401f34ff4c51b00adf661484ab27",
"assets/assets/images/other/user_circle_outlined.svg": "1d16996474e6cec31471968e4793842a",
"assets/FontManifest.json": "580d8b66fa8f7204ab40b1ce5fbf305a",
"assets/fonts/MaterialIcons-Regular.otf": "bbf637115c9e88d5dae77594bc069291",
"assets/NOTICES": "59e59d0ed1dbd557b1661a415243d870",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "74aeadcdc7da91869146d155bc407083",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fc34b6b36c61b42fc9d654ebafddbc65",
"/": "fc34b6b36c61b42fc9d654ebafddbc65",
"main.dart.js": "e374156d1dea70d8f2cae6a949129f6b",
"manifest.json": "2f5183f34615c567253ac7f4a72080f7",
"version.json": "b7ea87e950cbf5984ed2d234e124e9c4"};
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

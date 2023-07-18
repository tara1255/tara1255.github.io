'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "08da7b9c3a1c49c5675717b54c174e43",
"index.html": "74c0d5ed83f25f9ad750bf68755bc65d",
"/": "74c0d5ed83f25f9ad750bf68755bc65d",
"main.dart.js": "36251a5d182e73ed66445b75c56feb3b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ad512175ee5477a87b0f3fa09ce72e83",
"assets/AssetManifest.json": "1ad6d62f9c2b69684e9953a501d8f7ef",
"assets/NOTICES": "d8da4159b2a128c8cc5e7b8edb234ec8",
"assets/FontManifest.json": "ac203f24c694a0ad79c2571c03adcb71",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/password_blocked_30.svg": "696cef702632027dd7745e5196ca4f82",
"assets/assets/images/badge_free_tf.svg": "66de86d4114b59ba09fa36940cf559d4",
"assets/assets/images/transfer_bottom_receipt.svg": "3edc0db318bec538e266e124125afef7",
"assets/assets/images/illustration_regis_verif_data.svg": "a0d5ca76e6636c2eb07e21b026951511",
"assets/assets/images/transfer_top_receipt.svg": "e9ad26f7b7d1f4733432fbbc477b58bf",
"assets/assets/images/logo_amar_bank.svg": "cf4b4083ddf540c38459dde6b8decd59",
"assets/assets/images/transfer_quota_info.svg": "fe2698cdd151678d97ab0ecdf8610083",
"assets/assets/images/icon_history.svg": "43d616a2f707baeae47d18210f827348",
"assets/assets/images/password_blocked_permanent.svg": "98024ca3d7ef0dca7ba8f2068ecdb58e",
"assets/assets/images/decorative_icon_konfirmasi_pin.svg": "ebb4baa46adffe52f81660499e918386",
"assets/assets/images/logo_amar_bank_v2.svg": "6811872f30f2c837adf04a7c9e91cc9f",
"assets/assets/images/illustration_not_found.svg": "a3c449b8d0869c42361088aee0298455",
"assets/assets/images/icon_slider.png": "bc2a0e598bcce2d7dbf73a2d263a5f01",
"assets/assets/images/illustration_failed_load.svg": "f1784a8787dde889c5cc5b27e3afd018",
"assets/assets/images/illustration_add_friend.svg": "7ea27802163d7a41fc454f34e5878ca7",
"assets/assets/images/register/dark.png": "3a1a6f6efe2e8e54c994d7dc2f4bd5be",
"assets/assets/images/register/reflection.png": "b325b329b16c529fa2a7bd3b7ea3786c",
"assets/assets/images/register/ektp_blur.png": "7b783a0e0ef1a5617a028800dcf28ca5",
"assets/assets/images/register/multi_face.png": "eafb63ce6ba4fab044f732f4eadd671a",
"assets/assets/images/register/ektp_reflection.png": "86c9bcd241ca354fbf5313c2cc5fb4a6",
"assets/assets/images/register/ektp_cut.png": "0343051f0b28ac7ef7624afc1ac0ec8d",
"assets/assets/images/register/ektp.png": "213d4da36b911164f2f8b84b874110a4",
"assets/assets/images/register/selfie.png": "5877fd806188ef2d4675832fc9739747",
"assets/assets/images/illustration_kyc_waiting.svg": "d6d227256bc85e57f66468d3a6dd3ac5",
"assets/assets/images/illustration_device_data.svg": "88eecbd94cae0d98388e1e7fa135d804",
"assets/assets/images/illustration_kyc_rejected.svg": "741b6ec7aaa51cc31ec6223dbed13319",
"assets/assets/images/logo_amar_bank_no_wording.svg": "80de8cf8f3065ac26ae944c20cdda8b4",
"assets/assets/images/icon_checklist_colorfull.svg": "5a8e6685d159a447181efdc1261bc43c",
"assets/assets/images/banks/bri.svg": "e5ed6817df436503728c49cb17f84fe6",
"assets/assets/images/banks/senyumku.svg": "3b1e1e37e4744af98dd8d26d0b7dbb8b",
"assets/assets/images/banks/bni.svg": "1ce4469005cdf2b1e01e77595d154fc9",
"assets/assets/images/banks/mandiri.svg": "c84d6202bd3fb59c8bbcb74e96b647f5",
"assets/assets/images/forgot_pin.svg": "14cd62ffc5a8d62185946a42d0429483",
"assets/assets/images/tunaiku_logo.svg": "a49e41ddd157cc848f29eb9492a844c9",
"assets/assets/fonts/IndieFlower-Regular.ttf": "8a33aae7305b37411d775d6617e80aca",
"assets/assets/fonts/Sora/Sora-Thin.ttf": "de27fa1ef46214cec3e4ce3c4551e008",
"assets/assets/fonts/Sora/Sora-ExtraBold.ttf": "855dfe2aa4471a9e95d756b2f7df7d8b",
"assets/assets/fonts/Sora/Sora-Bold.ttf": "115fa28765f762ccf87f8d9f4d095555",
"assets/assets/fonts/Sora/Sora-Light.ttf": "46f1688973c5f74dba6d828560deb804",
"assets/assets/fonts/Sora/Sora-Regular.ttf": "f91c4379d21d2b0df9f11b85338ddf99",
"assets/assets/fonts/Sora/Sora-Medium.ttf": "64e332141193aeb622230f501446c3dc",
"assets/assets/fonts/Sora/Sora-SemiBold.ttf": "544c1880bee56d8f75229c7bfbd631ec",
"assets/assets/fonts/Sora/Sora-ExtraLight.ttf": "bef2c11e40c91667869281729db4ad86",
"assets/assets/fonts/config.json": "559288a39b766c63cd2774efb0bc2129",
"assets/assets/fonts/Inter/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/Inter/Inter-Light.ttf": "d55f45d07cfe01e8797bd1566561f718",
"assets/assets/fonts/Inter/Inter-Thin.ttf": "2dce622147cace7b467d9929b7708430",
"assets/assets/fonts/Inter/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/assets/fonts/Inter/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/assets/fonts/Inter/Inter-ExtraBold.ttf": "c9709fb8e32755490795ce5bd226c3a0",
"assets/assets/fonts/Inter/Inter-ExtraLight.ttf": "0f3ac0692901f70f1ac32cf079355051",
"assets/assets/fonts/Inter/Inter-Black.ttf": "980c7e8757e741bb49c7c96513924c61",
"assets/assets/fonts/Inter/Inter-SemiBold.ttf": "07a48beb92b401297a76ff9f6aedd0ed",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Senyumku.ttf": "8535ba2e9ba7e80908c8a87d76974a98",
"assets/assets/fonts/Muli/Muli-BoldItalic.ttf": "baf5807fc8b155989b847ff300f73bda",
"assets/assets/fonts/Muli/Muli-Black.ttf": "a4eebe2ca9dd9beaaae8d63a5f4ffa90",
"assets/assets/fonts/Muli/Muli-Bold.ttf": "1e36ee6d50c037b1bb4bdd3effa7a28e",
"assets/assets/fonts/Muli/Muli-Italic.ttf": "c31be844e864d303f9cae2c19111cc34",
"assets/assets/fonts/Muli/Muli-SemiBold.ttf": "e74e966f227e49bb0f0d9cf3b8624064",
"assets/assets/fonts/Muli/Muli-SemiBoldItalic.ttf": "cf39d947cb83d4cbe7ae8ea1bfb1e911",
"assets/assets/fonts/Muli/Muli-BlackItalic.ttf": "251b9e202ce65824ad9648ed5cdef077",
"assets/assets/fonts/Muli/Muli.ttf": "df7330254513d2fa2f4c1e9ee98cc6c6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

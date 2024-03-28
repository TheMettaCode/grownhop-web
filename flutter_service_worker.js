'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "663886991a68b61f818794e72f04e888",
"assets/AssetManifest.bin.json": "371d52a483cc91c4611a9ad01dad8f32",
"assets/AssetManifest.json": "6cf03f8afa9e4413593f34913c7b87f1",
"assets/assets/android_apk_badge.png": "4e2c8eeda2efaa694b3283175ac9adfc",
"assets/assets/app_icon.png": "2d41682c6cf8cc1649dc21feb97cb1b8",
"assets/assets/artist_profile.png": "e9abbf09fcd7f65a7abbf153a8f7037a",
"assets/assets/bitcoin.png": "8227f2b9f0fcef8b588cecd9b1bcae7a",
"assets/assets/cashapp.png": "42dec4b15db727eedbb9a12c3f5169e2",
"assets/assets/ethereum.png": "e37e8eae3fc42945b7fd904d18ac54f2",
"assets/assets/fonts/FREESCPT.TTF": "b6b6c03d8e793abf717f01172b04f7e1",
"assets/assets/gh_icon.png": "230537fc10ca4f0ff715ba863be62a9a",
"assets/assets/google_play_badge.png": "1a9453063dc4ab95fc0cd62b9c1a095e",
"assets/assets/ios_app_store_badge.png": "362c61de9a60dcf6b1f2e9732c5d7205",
"assets/assets/kanga_with_text_icon.png": "0036ce80920c7566fde2d7d9504dce53",
"assets/assets/litecoin.png": "1752b6f6b63f71a75bd472dabad939d6",
"assets/assets/logo_orange_512.png": "106f399b391ff8578eceb65eeb25ecfa",
"assets/assets/lp_icon.png": "aeab522b408c09e0667a2b33929623a6",
"assets/assets/mettacode_application_brand.png": "678f5b20ff1e34d9bc2e7127dd2463f3",
"assets/assets/mettacode_application_brand_slim.png": "d853b4379aa309ca2eeb4bc740a6f684",
"assets/assets/photos/elixr_horizontal.jpg": "a7856f18fb40749930ae5ad22abe8f1e",
"assets/assets/photos/elixr_vertical.jpg": "5128cde62e355fd797ac459e4cf021d6",
"assets/assets/social_media/facebook.png": "3e541fe022037cb156e74270120236d2",
"assets/assets/social_media/instagram.png": "12965f33f5982686f6eb63d51073722b",
"assets/assets/social_media/rumble.png": "ac190ef9e408a63f854a7003ee8775b2",
"assets/assets/social_media/soundcloud.png": "9122303753ad079015ccaf0e0cb3a25a",
"assets/assets/social_media/tiktok.png": "a3352efadc94a5ab0d11173dcaa7d7a5",
"assets/assets/social_media/twitter.png": "69d4bd7aea0945ba7ff5e77d1752a5d1",
"assets/assets/social_media/youtube.png": "2b5270fc7e50270749881e91da72e984",
"assets/assets/splash_logo.png": "c2f95aa0f685684f27af293741d5d244",
"assets/assets/spotify_listen_600.png": "34edd648568473090de94112ded39bdc",
"assets/assets/venmo.png": "bdfa9632d227044c5cbbfcdf8f640f03",
"assets/assets/windows_store_badge.png": "486a0de58c132ee4a9e4b43dc7368857",
"assets/FontManifest.json": "456aaf729bfcdb5c833e7fc3ff4e1802",
"assets/fonts/MaterialIcons-Regular.otf": "a923abf0b7a5bb648cce809fa5dca408",
"assets/lib/env/env.g.dart": "60b125d2e8fa1520153a3c5fea4a9324",
"assets/NOTICES": "dfb8a7dab1638069b18ccee5995ef9df",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "aeab522b408c09e0667a2b33929623a6",
"firebase-messaging-sw.js": "7735c423cbd0cd7274ea61921b27472c",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/android-icon-144x144.png": "30379f5aace3d6843f1b59d5d3f74458",
"icons/android-icon-192x192.png": "305d624469e829cfa825ea32ac147c40",
"icons/android-icon-36x36.png": "163897c7fdc668a0bf9a590026d0e4ef",
"icons/android-icon-48x48.png": "089c2f2e9f37892ff9c64abe1368c3a3",
"icons/android-icon-72x72.png": "c4eacd4ee5fc85247853ae31639046d2",
"icons/android-icon-96x96.png": "de27f1e272ea244209f57d7ebe5f13a7",
"icons/apple-icon-114x114.png": "8cf9550879e796b8b4fb6b7ee63eafaf",
"icons/apple-icon-120x120.png": "1e682eeb21743abdd36ec873fd76201d",
"icons/apple-icon-144x144.png": "30379f5aace3d6843f1b59d5d3f74458",
"icons/apple-icon-152x152.png": "2113876ecc89f9981e17a8f6b804af30",
"icons/apple-icon-180x180.png": "ad9c73249d594263142b2af3f4fce588",
"icons/apple-icon-57x57.png": "41ff095e858dd1317c7b9bd0d8bf5ed6",
"icons/apple-icon-60x60.png": "077ecde00784eb42e17f3ba5b83882d9",
"icons/apple-icon-72x72.png": "c4eacd4ee5fc85247853ae31639046d2",
"icons/apple-icon-76x76.png": "deedf390bf61ed21c42dcd8ab1b479b6",
"icons/apple-icon-precomposed.png": "2594283fda5c800aecdea455cabf39cf",
"icons/apple-icon.png": "2594283fda5c800aecdea455cabf39cf",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "e0fddbd1934b59e59a4c40d2e8f58b65",
"icons/favicon-32x32.png": "b16eb48d7110ec4d2a848da527047939",
"icons/favicon-96x96.png": "de27f1e272ea244209f57d7ebe5f13a7",
"icons/favicon.ico": "b39609d0e0bc1218032a8d5a285e1096",
"icons/Icon-150.png": "b31c54bd299d6cac46c69a2d296be692",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "30379f5aace3d6843f1b59d5d3f74458",
"icons/ms-icon-150x150.png": "b31c54bd299d6cac46c69a2d296be692",
"icons/ms-icon-310x310.png": "7049a44a47e1cd02018830af308ed1f7",
"icons/ms-icon-70x70.png": "66a247cbacc3d8ebb47a928f53d6c517",
"index.html": "34c28cb2868c5841792538bd3551c05d",
"/": "34c28cb2868c5841792538bd3551c05d",
"main.dart.js": "ff921ba5c1fcff2498591b3985ec7428",
"manifest.json": "df4475918922b4919960d27b9a70c862",
"OneSignalSDKWorker.js": "ebb63ca15bba16b550232b0b0f66c726",
"robots.txt": "b8bfd6acacefecdcbc4e63c63f2ff814",
"splash/img/branding-1x.png": "82e1c8d503aea1bcc402598ddde539e3",
"splash/img/branding-2x.png": "38e6a29fee3f18a42c360f36d6c3c055",
"splash/img/branding-3x.png": "defe43e3262aab6d352c70bab4fc18d4",
"splash/img/branding-4x.png": "db9231b604ab4b29af0d25f70e4ed864",
"splash/img/branding-dark-1x.png": "82e1c8d503aea1bcc402598ddde539e3",
"splash/img/branding-dark-2x.png": "38e6a29fee3f18a42c360f36d6c3c055",
"splash/img/branding-dark-3x.png": "defe43e3262aab6d352c70bab4fc18d4",
"splash/img/branding-dark-4x.png": "db9231b604ab4b29af0d25f70e4ed864",
"splash/img/dark-1x.png": "2f15fc97fe67a92ae0aa6804dcf5b0f1",
"splash/img/dark-2x.png": "8c6a15911d0bb3736ca1417990e5a6f8",
"splash/img/dark-3x.png": "d224f620adac312d7143aa0f30592221",
"splash/img/dark-4x.png": "9777a621ced89fefb97f27105c19d970",
"splash/img/light-1x.png": "2f15fc97fe67a92ae0aa6804dcf5b0f1",
"splash/img/light-2x.png": "8c6a15911d0bb3736ca1417990e5a6f8",
"splash/img/light-3x.png": "d224f620adac312d7143aa0f30592221",
"splash/img/light-4x.png": "9777a621ced89fefb97f27105c19d970",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "962873915b7f18af608bfa3f86550405",
"spotify/index.html": "92a2ac8b09943654b8048c2d4a8eedc3",
"sw.js": "13381579d39b1995ef59006a763dbc9b",
"version.json": "e0d414b61b1e4a8630b249d23b75c0f4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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

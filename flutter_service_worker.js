'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "70c3c1cde0e75e1e770e84cd8be12950",
".git/config": "29465754e0376a718e48299cf8e1494d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "114625e4dae1a41c739f89802774688c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b5e36dd6aa6f572d6343f20c757787ab",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f1c9570391cc9c72b6655138a3026000",
".git/logs/refs/heads/master": "739f6a6ab885ca651ff6f6e8bc21439a",
".git/logs/refs/remotes/origin/HEAD": "d03666b113060e53dca2ecbee69f0783",
".git/logs/refs/remotes/origin/master": "c154abd21cf81b1af6cb551985fb7876",
".git/objects/01/6ec632b352b05db04c60dea5423d4afe5d3ae1": "f043235377c55e064995174998ab1f03",
".git/objects/04/a6699c39cee039e88a828926e2f073566751ae": "90c08ff88661cb6c1b5ddf3a7860154d",
".git/objects/05/8f9584be5db0478fb26892a4070a576f9cafe4": "30e831c542382aa253fdbaa7d829bd11",
".git/objects/07/79d8f10d2dab48943dbb65035dc62e12b31393": "b9c4168c55ec4a0d927037cf0797b9b1",
".git/objects/08/7f14e6e8424ba6e7503dc1ed82af008f6fcb42": "80ce646972d5af6951f611eec5e4b52f",
".git/objects/09/33fce9a8f115ab721f5799f652ec7187c84dfb": "626c69779c3be88d4d839c9312737f28",
".git/objects/0b/582c70a70736809fd074ccb0e4909662ec330c": "d2e7c5a86c72b99c789d98f509c4041d",
".git/objects/15/58c149113eaff0111b3a4bf78a00fde00ffb2f": "545c9afec66404f01101f9316bca261b",
".git/objects/15/7d685550e2511696d7628bb7ffa51fdb4ac3ff": "e0d65ecf65c6e07eb5f45a6d77138d8d",
".git/objects/17/7e56a1a4a395942390741cc115151cc0085ddb": "ab125257bec794c5aff07e2b3d348a36",
".git/objects/17/8575cdb195e8fadaa134639e84feea823724c0": "c9c44f94bb9d3c5dcf11bed41ef7e795",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1b/e4c606d173500a528b9506cc5383aabbe03c8e": "b4814f2cdbe92f52cdfbe8c49eac580b",
".git/objects/1d/b5f491cc444309c96f8eb3aa05db1531a4fcd2": "27d60945511901228fde9cb1b22392a3",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/33/0689d713b61b7e114d1efd5cf699e03a536594": "e3dcf73a2e31aac5c94b25fada2181ac",
".git/objects/37/0426d5399dfa9ff02ccf21beb76896d5c16926": "f25c1d8b5b12c491bc993f7fa76cf6ca",
".git/objects/3b/2c18ab5a4fa558326747d5ccb5a792bcc84303": "1c983474ef091d3c52f626fada84800f",
".git/objects/3f/0fba2ac74b6e9724b56ae1034e7556fb88c9f4": "0da59e2fc1bc1e14972e46cc5ef8d93b",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4f/66b97160539e3f034b94b7aafc0bb56085f452": "4fb1f9d33bc1c7a9057061448936b86e",
".git/objects/53/a61009b795f970b1c633e8110e40ebeadaa5f0": "00d7e9c3a72dd56cde740f60af0c83ac",
".git/objects/79/8d4030aa7f2553ae8a1bd187bed2b8706d3c03": "b22d2dbb9649d821812d70800568e8b5",
".git/objects/79/a406451623792fac854a8096c341cb2fcc3e96": "50e598da8dcb363937d9d5a671c98651",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/99/996fb8d6a14a2c28d6a3a07dd6fd9e5b6baff0": "9e1a6e39c6559e25835e571b92c9a311",
".git/objects/9a/89082a8754d91c6cc71f5eb39e595429ea2ae7": "ab7e7b145496e3abd2c90680911a4bcd",
".git/objects/9b/721b0d4b2e7b680476d00d65e9c812776e64da": "76040e58b85f43d019e4a5ee41dc8794",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3580458dcc6da9cef1b8f408631e96c6ae1cce": "3f8327947ed2aef55bd96cdaaacdfe77",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/aa/409a90de8d70aef0006e7f856a515f2881dcd2": "31c76c2fb25dd80da280cf04fd5107d0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b1/d94c9b241158ac57bd15cd17fdec20d6fe5824": "8cc164a88cbaabc3892bfd4e80bbcf15",
".git/objects/b2/2de8530b5db61a582e1b7d70bdb32fb588682a": "a64448535749da5e49fe6986e669ccf7",
".git/objects/b6/880d881f34c8764c0080b7f795f77fb92da8b5": "1cf6b68ad8a93aaf61b2b4195eac5eb4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/4ec70297401e8a0bc930bae7be489eef593fa9": "4cdddf1b5690f280dab08138741d7629",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/c0/59d844e1200e69d76c30343da2c8bc311fe2b6": "5024b3768d7a15b9d5924ce592ae1aac",
".git/objects/c4/bb1939e4e03943aece6a40f0316df08235e2a4": "9e9a3ee8241827b3bf3d80a80d219f94",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/cc669343ea3fad1d8a203ffa7a6bf9b77bffa7": "5348c5370e11bcddbe4f97aa0b466397",
".git/objects/d8/b556aab6537665ea22d977a87e6afa020ef04f": "de331cebfdf71b232ad455bd12b7b58b",
".git/objects/dc/84aa279e2dce6227c8f8854b9c4bd6f7a75d4f": "991be36343a777adcff48308e84e1eed",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e4/b6424cd6d44a22f5a6a1c704f0e75478495bc6": "b41bd88302aa7821fcc837ef0b3fe36e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/437ccb698a32b1f7c73f8593731fceaff0f669": "1b533df4f1bdc3a299f27f750b93c2aa",
".git/objects/ea/af20f4fecce47da7dce1c16774022bd7478d7a": "2a03ffea23f8e3c4743a3993f563faf3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/f0a15a8ede71b758a000d6769476d172ca201b": "1445dbcc979d5d6b933c5574d0d9651c",
".git/objects/f3/cbd5c14468a7935747fa103a97f0e8dfebad3e": "37d7fcdb8f85dc5ebf45f8216f84a9ef",
".git/objects/f9/2651dd715648a962e6c323f5237184da784e2b": "1915c5668c26b44f98f982a07f78fd86",
".git/refs/heads/master": "41b7853f0adbdb3ef7fd494301aa343d",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "41b7853f0adbdb3ef7fd494301aa343d",
"assets/AssetManifest.json": "3e53f2e5fa4271c9d0835824b1c8b14e",
"assets/assets/audios/chat-sound.mp3": "a35d0e73315be5a3cb361288a6e6946e",
"assets/assets/new_notification_here!.riv": "e6a85dfb6b890988825dbbce66cbd64d",
"assets/assets/tap.riv": "43c78ec1f89a472f8343576db24be4e8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/new_notification_here!.riv": "e6a85dfb6b890988825dbbce66cbd64d",
"assets/NOTICES": "a30d5ec6ae37592b8ad5851e9bcc1394",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"assets/tap.riv": "43c78ec1f89a472f8343576db24be4e8",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e82c6210c37ce6bceb3138b34880835c",
"/": "e82c6210c37ce6bceb3138b34880835c",
"main.dart.js": "4f4e50c85ffbc8e1068e526bb2ef8ace",
"manifest.json": "a909521069e8af824650da54d66d9fb7",
"version.json": "3825ae1da6d74c87c0ac7729cbe0dc63"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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

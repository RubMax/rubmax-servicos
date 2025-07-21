self.addEventListener('install', function(e) { 
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});

const CACHE_NAME = "rubmax-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js"
  // ajoute d'autres fichiers si nécessaire
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

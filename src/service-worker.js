const CACHE_NAME = 'bolaku-v1';
const urlsToCache = [
  '/',
  '/main.js',
  '/index.html',
  '/site.webmanifest',
  '/img/favicon.ico',
  '/img/maskable-icon.png',
  '/img/favicon-16x16.png',
  '/img/favicon-32x32.png',
  '/img/apple-touch-icon.png',
  '/img/android-chrome-192x192.png',
  '/img/android-chrome-512x512.png',
];

// Add Cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)),
  );
});

self.addEventListener('fetch', (ev) => {
  const apiURL = 'https://api.football-data.org/';

  if (ev.request.url.indexOf(apiURL) > -1) {
    ev.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        fetch(ev.request).then((response) => {
          cache.put(ev.request.url, response.clone());
          return response;
        }),
      ),
    );
  } else {
    ev.respondWith(
      caches
        .match(ev.request, { ignoreSearch: true })
        .then((response) => response || fetch(ev.request)),
    );
  }
});
// Cek rosouce on cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request, { cacheName: CACHE_NAME }).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    }),
  );
});

// Delete Old Cache
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log(`cache ${cacheName} dihapus`);
            return caches.delete(cacheName);
          }
        }),
      ),
    ),
  );
});

const CACHE_NAME = 'bolaku-v1';
const urlsToCache = [
  '/',
  '/main.js',
  '/index.html',
  '/manifest.json',
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

// Mengecek Data jika ada di cache maka data akan diarahkan ke CACHE
self.addEventListener('fetch', (event) => {
  const baseUrl = 'https://api.football-data.org/';

  if (event.request.url.indexOf(baseUrl) > -1) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        fetch(event.request).then((response) => {
          cache.put(event.request.url, response.clone());
          return response;
        }),
      ),
    );
  } else {
    event.respondWith(
      caches
        .match(event.request)
        .then((response) => response || fetch(event.request)),
    );
  }
});

// Menghapus CACHE lama
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log(`ServiceWorker: cache ${cacheName} dihapus`);
            return caches.delete(cacheName);
          }
        }),
      ),
    ),
  );
});

self.addEventListener('push', (event) => {
  let body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no Payload';
  }

  const options = {
    body,
    icon: './img/icon-96x96.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
  };

  event.waitUntil(
    self.registration.showNotification('Push Notification', options),
  );
});

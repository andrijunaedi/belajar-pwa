const CACHE_NAME = 'sumedangpwa-v2';
const urlsToCache = [
  '/',
  '/nav.html',
  '/index.html',
  '/pages/about.html',
  '/pages/home.html',
  '/pages/makanan.html',
  '/pages/pariwisata.html',
  '/css/materialize.min.css',
  '/js/materialize.min.js',
  '/js/nav.js',
  '/img/alun.jpg',
  '/img/binokasih.jpg',
  '/img/jatigede.jpg',
  '/img/panyindangan.jpg',
  '/img/tahu.jpg',
  '/img/ubi.jpg',
  '/img/icon/favicon.ico',
  '/img/icon/favicon-16x16.png',
  '/img/icon/favicon-32x32.png',
  '/img/icon/apple-touch-icon.png',
  '/img/icon/android-chrome-192x192.png',
  '/img/icon/android-chrome-512x512.png',
];

// Menambahkan CACHE
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)),
  );
});

// Mengecek Data jika ada di cache maka data akan diarahkan ke CACHE
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

// Menghapus CACHE lama
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
          return null;
        }),
      ),
    ),
  );
});

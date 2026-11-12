const CACHE_NAME = 'material-player-v11';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://googleapis.com',
  'https://googleapis.com',
  'https://cloudflare.com'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
const cacheName = 'moscord-newsonline';
const staticAssets = [
  './',
  './index.html',
  './css/app.2b1a8e69.css',
  './js/app.7572c5a0.js', 
  './js/chunk-2d0c4856.d5a2b47f.js',
  './img/load.68affa03.gif',
  './img/news.4dccd62d.png',
  './img/newspaper.c238b230.png',
  './manifest.json',
  './img/icons/favicon-32x32.png',
  './img/icons/favicon-16x16.png',
  './img/icons/favicon-192x192.png'
];

self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

self.addEventListener('activate', e => {
  self.clients.claim();
});

self.addEventListener('fetch', async e => {
  const req = e.request;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    e.respondWith(cacheFirst(req));
  } else {
    e.respondWith(networkAndCache(req));
  }
});

async function cacheFirst(req) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  return cached || fetch(req);
}

async function networkAndCache(req) {
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(req);
    await cache.put(req, fresh.clone());
    return fresh;
  } catch (e) {
    const cached = await cache.match(req);
    return cached;
  }
}
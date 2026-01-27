self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  self.clients.claim();
});

// fetch vazio só pra manter ativo
self.addEventListener('fetch', event => {});
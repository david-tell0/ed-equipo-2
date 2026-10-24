// Service worker mínimo: guarda la app para que abra sin conexión.
// Primero intenta la red (para ver siempre la última versión publicada) y, si falla, usa la copia guardada.
const CACHE = 'foodmatch-v1';
const ARCHIVOS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ARCHIVOS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((claves) => Promise.all(claves.filter((c) => c !== CACHE).map((c) => caches.delete(c))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const peticion = event.request;
  if (peticion.method !== 'GET' || new URL(peticion.url).origin !== self.location.origin) return;
  event.respondWith(
    fetch(peticion)
      .then((respuesta) => {
        const copia = respuesta.clone();
        caches.open(CACHE).then((cache) => cache.put(peticion, copia));
        return respuesta;
      })
      .catch(() => caches.match(peticion).then((guardada) => guardada || caches.match('./index.html')))
  );
});

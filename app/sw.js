// Service worker mínimo en modo «red primero»:
// siempre descarga la última versión publicada y solo usa la copia guardada si no hay conexión.
const CACHE = 'foodmatch-v15';
const ARCHIVOS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './logo.png'];

self.addEventListener('install', (event) => {
  // La versión nueva se activa en cuanto se instala, sin esperar a que se cierre la app.
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ARCHIVOS.map((a) => new Request(a, { cache: 'reload' }))))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((claves) => Promise.all(claves.filter((c) => c !== CACHE).map((c) => caches.delete(c))))
      .then(() => self.clients.claim()) // toma el control de las pestañas abiertas
  );
});

self.addEventListener('fetch', (event) => {
  const peticion = event.request;
  if (peticion.method !== 'GET' || new URL(peticion.url).origin !== self.location.origin) return;
  event.respondWith(
    // cache: 'no-cache' obliga a preguntar al servidor, aunque el navegador tenga una copia reciente.
    fetch(peticion, { cache: 'no-cache' })
      .then((respuesta) => {
        if (respuesta.ok) {
          const copia = respuesta.clone();
          caches.open(CACHE).then((cache) => cache.put(peticion, copia));
        }
        return respuesta;
      })
      .catch(() =>
        caches.match(peticion, { ignoreSearch: true })
          .then((guardada) => guardada || (peticion.mode === 'navigate' ? caches.match('./index.html') : undefined))
          .then((guardada) => guardada || Response.error())
      )
  );
});

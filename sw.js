// Este archivo permite que Android reconozca la web como una app instalable
self.addEventListener('fetch', function(event) {
    // No guarda caché para que puedas cambiar fotos cuando quieras
    event.respondWith(fetch(event.request));
});
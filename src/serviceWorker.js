const CACHE_VERSION = 'v2';

self.addEventListener('install', event => {
	caches.open(CACHE_VERSION).then(cache => {
		return cache.addAll([
			'/dist/index.js',
			'/index.html'
		]);
	});
});

//Clean up old caches.
self.addEventListener('activate', event => {
});

//Serve resources...
self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(resp => {
			//Return default resource if undefined in the cache.
			return resp || fetch(event.request).then(fetchResp => {
				//Resource not in cache yet. Return it, but cache as well.
				return caches.open(CACHE_VERSION).then(cache => {
					cache.put(event.request, fetchResp.clone());
					return fetchResp;
				});
			});
		})
	);
});
self.addEventListener('fetch', event => {
  // Always fetch HTML from the network to avoid cache issues
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' }).catch(() => caches.match(event.request))
    );
  }
});

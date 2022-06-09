/* eslint-disable no-restricted-globals */

const statics = self.__WB_MANIFEST;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("slutproject-cash")
      .then((cache) =>
        cache.addAll([
          ...statics.map((obj) => obj.url),
          ...[
            "/",
            "favicon.ico",
            "logo192.png",
            "logo512.png",
            "manifest.json",
          ],
        ])
      )
  );
  self.skipWaiting();
  console.log("Installing");
});

self.addEventListener("activate", (event) => {
  console.log("SW Activating");
});

self.addEventListener("fetch", (event) => {
  console.log("You are requesting ", event.request.url);
  if (navigator.onLine) {
    return fetch(event.request);
  } else if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }
      })
    );
  }
});

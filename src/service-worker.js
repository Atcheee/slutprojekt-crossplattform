/* eslint-disable no-restricted-globals */

const statics = self.__WB_MANIFEST;

console.log(statics);

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("slutproject-cash")
      .then((cache) =>
        cache.addAll([
          "/",
          "index.html",
          "favicon.ico",
          "manifest.json",
          "/static/js/main.1a4f71e6.js",
          "/static/css/main.4fadaa36.css",
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

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
          "/static/js/main.cf617aab.js",
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
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

self.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    const markup = "<h1>Seems you are offline!.</h1>";
    const headers = { "Content-Type": "text/html" };
    const response = new Response(markup, { headers });
    event.respondWith(response);
  } else {
    event.respondWith(fetch(event.request));
  }
});

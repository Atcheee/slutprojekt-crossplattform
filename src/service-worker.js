/* eslint-disable no-restricted-globals */

const statics = self.__WB_MANIFEST

console.log(statics);

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("slutproject-cash")
      .then((cache) =>
        cache.addAll(["/", "index.html", "/static/js/main.4c6dce90.js", "/static/css/main.1f7ac60c.css"])
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

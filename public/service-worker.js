const CACHE_NAME = "v1";
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/offline.html",
];

// INSTALL
self.addEventListener("install", (event) => {
  console.log("[SW] Installed");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting(); // Activate immediately
});

// ACTIVATE
self.addEventListener("activate", (event) => {
  console.log("[SW] Activated");
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  return self.clients.claim();
});

// FETCH
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.match(event.request).then((res) => res || caches.match("/offline.html"))
    )
  );
});

// SYNC
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-data") {
    console.log("[SW] Sync event received");
    event.waitUntil(syncDataToServer());
  }
});

function syncDataToServer() {
  // Simulate data sync
  console.log("[SW] Simulating data sync to server...");
  return Promise.resolve();
}

// PUSH
// Push Notification handler
self.addEventListener('push', function(event) {
    let notificationData = {};
  
    // Try to parse JSON
    try {
      notificationData = event.data?.json();
    } catch (e) {
      // If JSON parsing fails, use the plain text
      notificationData.body = event.data?.text() || 'No message';
    }
  
    const title = 'Push Notification';
    const options = {
      body: notificationData.body || 'Default message',
      icon: '/icons/favicon.ico'
    };
  
    event.waitUntil(
      self.registration.showNotification(title, options)
    );
  });
  
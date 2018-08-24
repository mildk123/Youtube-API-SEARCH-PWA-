// Service Worker

// ServiceWorker is a progressive technology. Ignore unsupported browsers
if ('serviceWorker' in navigator) {
  console.log('SERVICE WORKER: Service Worker supported by browser .');
  navigator.serviceWorker.register('sw.js').then(function() {
    console.log('SERVICE WORKER: Service worker registered.');
  }, function(err) {
    console.log('Service Worker: Service Worker registration failed.', err);
  });
} else {
  console.log('Service Worker: Service Worker not supported by browser.');
}

function startVibrate() {
  navigator.vibrate(1000);
  alert(`Button Under Construction`)
}
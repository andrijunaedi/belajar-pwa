// Register service worker
function registerServiceWorker() {
  return navigator.serviceWorker
    .register('service-worker.js')
    .then((registration) => {
      console.log('Registrasi service worker berhasil.');
      return registration;
    })
    .catch((err) => {
      console.error('Registrasi service worker gagal.', err);
    });
}

export default registerServiceWorker;

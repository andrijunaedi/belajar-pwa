function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

function requestPermission() {
  if ('Notification' in window) {
    Notification.requestPermission().then((result) => {
      if (result === 'denied') {
        console.log('Fitur notifikasi tidak diijinkan.');
        return;
      }
      if (result === 'default') {
        console.error('Pengguna menutup kotak dialog permintaan ijin.');
      }

      if ('PushManager' in window) {
        navigator.serviceWorker.getRegistration().then((registration) => {
          registration.pushManager
            .subscribe({
              userVisibleOnly: true,
              applicationServerKey: urlBase64ToUint8Array(
                'BICm0vCmpwpqZW7-vxqY2mTx2_gQktNryglV1Yhy2rupNV0qMWURxZ67OlWwDZBpnaTvhALEQkGyoTgx9g7nMLI',
              ),
            })
            .then((subscribe) => {
              console.log(
                'Berhasil melakukan subscribe dengan endpoint: ',
                subscribe.endpoint,
              );
              console.log(
                'Berhasil melakukan subscribe dengan p256dh key: ',
                btoa(
                  String.fromCharCode.apply(
                    null,
                    new Uint8Array(subscribe.getKey('p256dh')),
                  ),
                ),
              );
              console.log(
                'Berhasil melakukan subscribe dengan auth key: ',
                btoa(
                  String.fromCharCode.apply(
                    null,
                    new Uint8Array(subscribe.getKey('auth')),
                  ),
                ),
              );
            })
            .catch((e) => {
              console.error('Tidak dapat melakukan subscribe ', e.message);
            });
        });
      }
    });
  }
}

export default requestPermission;

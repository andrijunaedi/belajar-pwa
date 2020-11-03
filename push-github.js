const webPush = require('web-push');
const { vapidKeys, senderId } = require('./data.json');

webPush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey,
);

const pushSubscription = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/fi-Y5wRnZSo:APA91bGBsXm0GcnEiTOx4Z-fNjUv66X6dtklCEpgn-SHk7rjssP_8fQSNrvjJOgxuyHuIU3ZXjiiWkRb-y0PuYuNZUoTv6uwA_CtGQwZAza4FUISucLSAGpGLX3uZSOgPqsm_hIuY29A',
  keys: {
    p256dh:
      'BKPSsSvfdsL5ASS4WGuu/tAVxDGRnC/hPeAaY7U372Gg7z8aiXl8XnRVmKuaOlOr4wa7AMKEaI4RArhyxRff1ys=',
    auth: 'PHbP7KyBNfpHDXjonwpcaQ==',
  },
};

const payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

const options = {
  gcmAPIKey: senderId,
  TTL: 60,
};

webPush.sendNotification(pushSubscription, payload, options);

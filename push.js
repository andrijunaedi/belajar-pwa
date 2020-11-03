const webPush = require('web-push');
const { vapidKeys, senderId, endpoint, p256dh, auth } = require('./data.json');

webPush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey,
);

const pushSubscription = {
  endpoint,
  keys: {
    p256dh,
    auth,
  },
};

const payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

const options = {
  gcmAPIKey: senderId,
  TTL: 60,
};

webPush.sendNotification(pushSubscription, payload, options);

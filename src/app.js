import { Sidenav } from 'materialize-css';

import registerServiceWorker from './script/register';
import loadNav from './components/nav';
import parseUrl from './pages/route';
import requestPermission from './script/notif';

if (!('serviceWorker' in navigator)) {
  console.log('Service worker tidak didukung browser ini.');
} else {
  registerServiceWorker();
}

requestPermission();

const pages = window.location.hash.substr(1);

const loadPage = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const sidenav = document.querySelector('.sidenav');
    Sidenav.init(sidenav);
    loadNav();

    document.querySelectorAll('.sidenav a, .topnav a').forEach((elm) => {
      elm.addEventListener('click', (event) => {
        Sidenav.getInstance(sidenav).close();

        const page = event.target.getAttribute('href').substr(1);
        parseUrl(page);
      });
    });
  });
};

parseUrl(pages);
loadPage();

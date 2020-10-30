import { Sidenav } from 'materialize-css';

import registerServiceWorker from './script/register';
import loadNav from './components/nav';
import Home from './pages/Home';
import DetailTeam from './pages/DetailTeam';

if (!('serviceWorker' in navigator)) {
  console.log('Service worker tidak didukung browser ini.');
} else {
  registerServiceWorker();
}

const loadPage = (page, id) => {
  switch (page) {
    case 'teamDetail':
      DetailTeam(id);
      break;
    case 'favorit':
      console.log('favorit');
      break;
    case 'home':
      Home();
      break;
    default:
      Home();
  }

  document.addEventListener('DOMContentLoaded', () => {
    const sidenav = document.querySelector('.sidenav');
    Sidenav.init(sidenav);
    loadNav();

    document.querySelectorAll('.sidenav a, .topnav a').forEach((elm) => {
      elm.addEventListener('click', (event) => {
        Sidenav.getInstance(sidenav).close();

        const pagelink = event.target.getAttribute('href').substr(2);
        loadPage(pagelink);
      });
    });
  });
};

const urlParams = new URLSearchParams(window.location.search);
const idTeam = urlParams.get('teamId');
let pages = window.location.hash.substr(2);

if (pages === '') pages = 'home';
if (idTeam) pages = 'teamDetail';

loadPage(pages, idTeam);

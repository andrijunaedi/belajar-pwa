import { Sidenav } from 'materialize-css';
import loadNav from './components/nav';
import registerServiceWorker from './script/register';

if (!('serviceWorker' in navigator)) {
  console.log('Service worker tidak didukung browser ini.');
} else {
  registerServiceWorker();
}

document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('.sidenav');
  Sidenav.init(element);
  loadNav();
});

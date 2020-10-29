import { Sidenav } from 'materialize-css';
import { get } from 'axios';
import registerServiceWorker from './script/register';
import loadNav from './components/nav';
import { formatYmd, futureDate } from './script/date';

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

const baseUrl = 'http://api.football-data.org/v2';

const getMatches = async () => {
  try {
    const dateNow = formatYmd(new Date());
    const dateAgo = formatYmd(futureDate(2));
    const response = await get(`${baseUrl}/matches`, {
      headers: { 'X-Auth-Token': '0fb5b15aaa624ab28734d37f94f2a1ca' },
      params: {
        competitions: '2001,2021',
        dateFrom: dateNow,
        dateTo: dateAgo,
      },
    });
    const { matches } = response.data;
    const data = matches.map((match) => match);
    const main = document.querySelector('.main');
    console.log(main);
  } catch (error) {
    console.error(error);
  }
};

const getCompetitions = async () => {
  try {
    const response = await get(`${baseUrl}/competitions`, {
      headers: { 'X-Auth-Token': '0fb5b15aaa624ab28734d37f94f2a1ca' },
      params: {},
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

getMatches();
// getCompetitions();

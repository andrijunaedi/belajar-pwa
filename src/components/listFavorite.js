import { deteleFavorite } from '../script/db';
import parseUrl from '../pages/route';

const listFavorite = (favorite) => {
  const main = document.querySelector('.main');
  const div = document.createElement('div');

  div.setAttribute('class', 'row');
  div.innerHTML = `
    <div class="container">
    <div class="col s12 m12">
    <h4>Team Favorite</h4>
      <ul class="collection with-header" id="list-favorite">
      </ul>
    </div>
  </div>
    `;

  main.appendChild(div);

  favorite.forEach((team) => {
    const listCard = document.getElementById('list-favorite');
    const li = document.createElement('li');

    li.setAttribute('class', 'collection-item');
    li.innerHTML = `
        <div>
            <a href="#favorite?id=${team.id}" class="detail-favorite">${team.name}</a>
            <a href="#favorite" class="secondary-content delete-team"><i data="${team.id}" page="#favorite" class="material-icons">delete</i></a>
        </div>
      `;
    listCard.appendChild(li);
  });

  document.querySelectorAll('.detail-favorite').forEach((elm) => {
    elm.addEventListener('click', async (event) => {
      const page = event.target.getAttribute('href').substr(1);
      parseUrl(page);
    });
  });

  document.querySelectorAll('.delete-team').forEach((elm) => {
    elm.addEventListener('click', async (event) => {
      const page = event.target.getAttribute('page').substr(1);
      const id = event.target.getAttribute('data');
      deteleFavorite(id);
      parseUrl(page);
    });
  });
};

export default listFavorite;

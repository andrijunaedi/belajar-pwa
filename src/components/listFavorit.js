import { deteleFavorit } from '../script/db';

const listFavorit = (favorit) => {
  const main = document.querySelector('.main');
  const div = document.createElement('div');

  div.setAttribute('class', 'row');
  div.innerHTML = `
    <div class="container">
    <div class="col s12 m12">
    <h4>Team Favorit</h4>
      <ul class="collection with-header" id="list-favorit">
      </ul>
    </div>
  </div>
    `;

  main.appendChild(div);

  favorit.forEach((team) => {
    const listCard = document.getElementById('list-favorit');
    const li = document.createElement('li');

    li.setAttribute('class', 'collection-item');
    li.innerHTML = `
        <div>
            ${team.name}
            <a href="#favorit" class="secondary-content delete-team"><i data="${team.id}" class="material-icons">delete</i></a>
        </div>
      `;
    listCard.appendChild(li);
  });

  document.querySelectorAll('.delete-team').forEach((elm) => {
    elm.addEventListener('click', async (event) => {
      const id = event.target.getAttribute('data');
      deteleFavorit(id);
    });
  });
};

export default listFavorit;

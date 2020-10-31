import getDetailTeams from '../api/teams';
import tabTeam from '../components/tabTeam';
import tronTeams from '../components/tronTeams';
import { saveForFavorit } from '../script/db';

const DetailTeam = async (id) => {
  const main = document.querySelector('.main');
  const div = document.createElement('div');
  const value = await getDetailTeams(id);

  const tronData = {
    name: value.name,
    img: value.crestUrl,
  };

  main.innerHTML = '';
  tronTeams(tronData);
  tabTeam(value);

  div.setAttribute('class', 'fixed-action-btn');
  div.innerHTML = `
    <a class="btn-floating btn-large red" id="save">
    <i class="large material-icons">save</i>
    </a>
  `;
  main.appendChild(div);

  const btnSave = document.getElementById('save');
  btnSave.addEventListener('click', async () => {
    const idTeam = window.location.hash.substr(9);
    const data = await getDetailTeams(idTeam);
    saveForFavorit(data);
  });
};

export default DetailTeam;

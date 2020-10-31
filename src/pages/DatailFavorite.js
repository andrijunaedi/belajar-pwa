import tabTeam from '../components/tabTeam';
import tronTeams from '../components/tronTeams';
import { getFavoriteById } from '../script/db';

const DetailFavorite = async (id) => {
  const main = document.querySelector('.main');
  const div = document.createElement('div');
  const data = await getFavoriteById(id);

  const tronData = {
    name: data.name,
    img: data.crestUrl,
  };

  main.innerHTML = '';
  tronTeams(tronData);
  tabTeam(data);

  main.appendChild(div);
};

export default DetailFavorite;

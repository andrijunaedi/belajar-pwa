import getDetailTeams from '../api/teams';
import tabTeam from '../components/tabTeam';
import tronTeams from '../components/tronTeams';

const DetailTeam = async (id) => {
  document.querySelector('.main').innerHTML = '';
  const value = await getDetailTeams(id);

  const tronData = {
    name: value.name,
    img: value.crestUrl,
  };

  tronTeams(tronData);
  tabTeam(value);
};

export default DetailTeam;

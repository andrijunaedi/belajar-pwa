import { getTeams } from '../api/competitions';
import teamsSection from '../components/teams';

const Teams = async () => {
  document.querySelector('.main').innerHTML = '';
  const teamsComp = await getTeams(2021);

  const { teams } = teamsComp;

  teamsSection(teams);
  document.getElementById('loading').style.display = 'none';
};

export default Teams;

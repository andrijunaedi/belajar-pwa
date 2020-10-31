import { getCompetitions, getTeams } from '../api/competitions';
import jumbotron from '../components/jumbotron';
import teamsSection from '../components/teams';

const Home = async () => {
  document.querySelector('.main').innerHTML = '';
  const competition = await getCompetitions(2021);
  const teamsComp = await getTeams(2021);

  const dataJumbo = {
    id: competition.id,
    name: competition.name,
    startDate: competition.currentSeason.startDate,
    endDate: competition.currentSeason.endDate,
    currentMatchday: competition.currentSeason.currentMatchday,
  };

  const { teams } = teamsComp;

  jumbotron(dataJumbo);
  teamsSection(teams);
};

export default Home;

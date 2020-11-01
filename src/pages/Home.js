import { getCompetitions } from '../api/competitions';
import jumbotron from '../components/jumbotron';

const Home = async () => {
  document.querySelector('.main').innerHTML = '';
  const competition = await getCompetitions(2021);

  const dataJumbo = {
    id: competition.id,
    name: competition.name,
    startDate: competition.currentSeason.startDate,
    endDate: competition.currentSeason.endDate,
    currentMatchday: competition.currentSeason.currentMatchday,
  };

  jumbotron(dataJumbo);
  document.getElementById('loading').style.display = 'none';
};

export default Home;

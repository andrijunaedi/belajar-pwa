import listFavorite from '../components/listFavorite';
import { getAllFavorite } from '../script/db';

const Favorite = async (id) => {
  document.querySelector('.main').innerHTML = '';
  const allFavorite = await getAllFavorite();
  listFavorite(allFavorite);
  document.getElementById('loading').style.display = 'none';
};

export default Favorite;

import listFavorite from '../components/listFavorite';
import { getAllFavorite } from '../script/db';

const Favorite = async (id) => {
  document.querySelector('.main').innerHTML = '';
  const allFavorite = await getAllFavorite();
  listFavorite(allFavorite);
};

export default Favorite;

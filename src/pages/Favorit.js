import listFavorit from '../components/listFavorit';
import { getAllFavorit } from '../script/db';

const Favorit = async (id) => {
  document.querySelector('.main').innerHTML = '';
  const allFavorit = await getAllFavorit();
  listFavorit(allFavorit);
};

export default Favorit;

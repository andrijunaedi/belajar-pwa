import { getFavoriteById } from '../script/db';

const DetailFavorite = async (id) => {
  document.querySelector('.main').innerHTML = '';
  const data = await getFavoriteById(id);
  console.log(data);
};

export default DetailFavorite;

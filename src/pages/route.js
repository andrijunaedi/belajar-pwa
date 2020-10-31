// * routing
import Home from './Home';
import DetailTeam from './DetailTeam';
import Favorite from './Favorite';
import DetailFavorite from './DatailFavorite';

function parseUrl(pages) {
  const page = pages.split('?');

  if (page.length <= 1) {
    switch (page[0]) {
      case 'favorite':
        Favorite();
        break;
      case 'home':
        Home();
        break;
      default:
        Home();
        break;
    }
  } else {
    const id = page[1].substr(3);
    switch (page[0]) {
      case 'team':
        DetailTeam(id);
        break;
      case 'favorite':
        DetailFavorite(id);
        break;
      default:
        Home();
    }
  }
}

export default parseUrl;

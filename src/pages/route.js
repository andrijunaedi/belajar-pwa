// * routing
import Home from './Home';
import DetailTeam from './DetailTeam';
import Favorit from './Favorit';

function parseUrl(pages) {
  const page = pages.split('?');

  if (page.length <= 1) {
    switch (page[0]) {
      case 'favorit':
        Favorit();
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
      default:
        Home();
    }
  }
}

export default parseUrl;

import { Sidenav } from 'materialize-css';

const loadNav = () => {
  const sideNav = document.querySelector('.sidenav');
  const topNav = document.querySelector('.topnav');
  const nav = `
    <li><a class="waves-effect" href="#home">Home</a></li>
    <li><a class="waves-effect" href="#mathes">Pertandingan</a></li>
    <li><a class="waves-effect" href="#competition">Kompetisi</a></li>
    <li><a class="waves-effect" href="#team">Team</a></li>
    <li><a class="waves-effect" href="#favorit">Team Favorit</a></li>
    `;
  let userView = `<li>
    <div class="user-view">
        <div class="background color-4">
        </div>
        <a href="#home"><img class="circle" src="img/android-chrome-192x192.png"/></a>
        <a href="#home" class="title"><span class="white-text">Bolaku</span></a>
    </div>
  </li>`;

  userView += nav;

  topNav.innerHTML = nav;
  sideNav.innerHTML = userView;

  document.querySelectorAll('.sidenav a, .topnav a').forEach((elm) => {
    elm.addEventListener('click', (event) => {
      const sidenav = document.querySelector('.sidenav');
      Sidenav.getInstance(sidenav).close();

      const page = event.target.getAttribute('href').substr(1);
      console.log(page);
    });
  });
};

export default loadNav;

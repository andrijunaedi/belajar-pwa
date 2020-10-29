import { Sidenav } from 'materialize-css';

const loadNav = () => {
  const sideNav = document.querySelector('.sidenav');
  const topNav = document.querySelector('.topnav');
  const nav = `
    <li><a class="waves-effect" href="#home">Home</a></li>
    <li><a class="waves-effect" href="#about">About</a></li>
    <li><a class="waves-effect" href="#contact">Contact</a></li>
    <li><a class="waves-effect" href="#saved">Saved</a></li>
    `;
  let userView = `<li>
    <div class="user-view">
        <div class="background"></div>
        <a href="#user"><img class="circle" src="img/android-chrome-512x512.png"/></a>
        <a href="#name"><span class="white-text name">John Doe</span></a>
        <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>  
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

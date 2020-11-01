const loadNav = () => {
  const sideNav = document.querySelector('.sidenav');
  const topNav = document.querySelector('.topnav');
  const nav = `
    <li><a class="waves-effect" href="#home">Home</a></li>
    <li><a class="waves-effect" href="#team">Team</a></li>
    <li><a class="waves-effect" href="#favorite">Favorite</a></li>
    `;
  let userView = `<li>
    <div class="user-view">
        <div class="background color-4">
        </div>
        <a href="#home"><img class="circle" src="img/android-chrome-192x192.png"/></a>
        <a href="#home" class="title ml-2"><span class="white-text">Bolaku</span></a>
    </div>
  </li>`;

  userView += nav;

  topNav.innerHTML = nav;
  sideNav.innerHTML = userView;
};

export default loadNav;

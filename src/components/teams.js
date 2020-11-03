import parseUrl from '../pages/route';

const teamsSection = (data) => {
  const main = document.querySelector('.main');
  const row = document.createElement('div');

  row.setAttribute('class', 'row color-3');
  row.innerHTML = `
    <div class="container teams">
      <div class="col s12 m12">
        <p class="title text-center">Teams</p>
        <div class="teams-card"></div>
      </div>
    </div>
  `;
  main.appendChild(row);

  function cardTeam(id, name, img) {
    const teamR = document.querySelector('.teams-card');
    const div = document.createElement('div');
    div.setAttribute('class', 'col s6 m3 l3');
    div.innerHTML = `

      <div class="team">
      <a href="./#team?id=${id}"><img src="${img}" alt="${name}" href="#team?id=${id}" /></a>
      <div class="name"><a href="#team?id=${id}" >${name}</a></div>
      </div>

        `;
    teamR.appendChild(div);
  }
  data.forEach((team) => {
    const { name, crestUrl, id } = team;
    cardTeam(id, name, crestUrl);
  });
  document.querySelectorAll('.team a').forEach((elm) => {
    elm.addEventListener('click', (event) => {
      const page = event.target.getAttribute('href').substr(1);
      parseUrl(page);
    });
  });
};

export default teamsSection;

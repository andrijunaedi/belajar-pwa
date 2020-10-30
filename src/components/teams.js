// import Route from '../pages/route';

const teamsSection = (data) => {
  const main = document.querySelector('.main');
  const row = document.createElement('div');

  row.setAttribute('class', 'row color-2');
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
      <a href="./?teamId=${id}"><img src="${img}" alt="${name}" /></a>
      <div class="name"><a href="./?teamId=${id}" >${name}</a></div>
      </div>

        `;
    teamR.appendChild(div);
  }
  data.forEach((team) => {
    const { name, crestUrl, id } = team;
    cardTeam(id, name, crestUrl);
  });
};

export default teamsSection;

const tronTeams = (data) => {
  const main = document.querySelector('.main');
  const div = document.createElement('div');

  const { img, name } = data;
  div.setAttribute('class', 'row');
  div.innerHTML = `
    <div class="container">
    <div class="col s4 m4"></div>
      <div class="col s4 m3">
        <h2></h2>
        <img class="logo" src="${img}" alt="${name}" width="150px" />
      </div>
    <div class="col s4 m4"></div>
      <div class="col s12 m12">
        <div class="season text-center">
            <div class="title">${name}</div>
            <h2></h2>
        </div>
        </div>
    </div>
    `;
  main.appendChild(div);
};

export default tronTeams;

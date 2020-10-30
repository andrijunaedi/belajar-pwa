const tronTeams = (data) => {
  const main = document.querySelector('.main');
  const div = document.createElement('div');

  const { img, name } = data;
  div.setAttribute('class', 'jumbotron color-3');
  div.innerHTML = `
    <div class="row">
    <div class="col s4 m4"></div>
      <div class="s3 m3">
        <img class="logo" src="${img}" alt="${name}" width="150px" />
      </div>
      <div class="col s12 m12">
        <div class="season text-center">
            <div class="title">${name}</div>
        </div>
        </div>
    </div>
    `;
  main.appendChild(div);
};

export default tronTeams;

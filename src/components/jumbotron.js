const jumbotron = (data) => {
  const main = document.querySelector('.main');
  const div = document.createElement('div');

  const { name, startDate, endDate, currentMatchday } = data;

  div.setAttribute('class', 'jumbotron color-3');
  div.innerHTML = `
        <div class="row">
        <div class="s12 m12">
        <div class="title text-center">${name}</div>
        </div>
        <div class="col s12 m12">
        <div class="season text-center">
            <div class="title-2">Season</div>
            <div class="date">${startDate} - ${endDate}</div>
            <div class="match-day">Matchday ${currentMatchday}</div>
        </div>
        </div>
    </div>
    `;
  main.appendChild(div);
};

export default jumbotron;

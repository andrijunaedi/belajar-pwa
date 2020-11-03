import { Tabs } from 'materialize-css';

const tabTeam = (data) => {
  const main = document.querySelector('.main');
  const div = document.createElement('div');

  const {
    name,
    shortName,
    email,
    phone,
    founded,
    venue,
    clubColors,
    address,
    website,
  } = data;
  const { squad } = data;
  div.setAttribute('class', 'row');
  div.innerHTML = `
        <div class="container">
        <ul id="tabs-team" class="tabs color-4">
            <li class="tab col s2 m2">
            <a class="active" href="#members">Members</a>
            </li>
            <li class="tab col s2 m2">
            <a href="#about">About</a>
            </li>
            <li class="tab col s2 m2">
            <a href="#contact">Contact</a>
            </li>
        </ul>
        <div id="members" class="col s12">
            <table class="responsive-table highlight">
            <thead>
                <tr>
                <th>Name</th>
                <th>Nationality</th>
                <th>Position</th>
                <th>Role</th>
                </tr>
            </thead>
            <tbody class="squad-data"></tbody>
            </table>
        </div>
        </div>
        `;

  div.innerHTML += `
        <div class="container">
        <div id="about" class="col s12">
        <table class="responsive-table highlight">
            <thead>
            <tr>
                <th>Name</th>
                <th>Short Name</th>
                <th>Founded</th>
                <th>Venue</th>
                <th>Club Color</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td>${name}</td>
                <td>${shortName}</td>
                <td>${founded}</td>
                <td>${venue}</td>
                <td>${clubColors}</td>
            </tr>
            <tr></tr>
            </tbody>
        </table>
        </div>
        <div id="contact" class="col s12">
        <table class="responsive-table highlight">
            <thead>
            <tr>
                <th>Address</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td>${address}</td>
                <td>${email}</td>
                <td>${phone}</td>
                <td>${website}</td>
            </tr>
            <tr></tr>
            </tbody>
        </table>
        </div>
        </div>
      `;
  main.appendChild(div);
  const tabs = document.getElementById('tabs-team');
  squad.forEach((player) => {
    const squadData = document.querySelector('.squad-data');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <tr>
        <td>${player.name}</td>
        <td>${player.nationality}</td>
        <td>${player.position}</td>
        <td>${player.role}</td>
    </tr>
    `;
    squadData.appendChild(tr);
  });
  Tabs.init(tabs);
};

export default tabTeam;

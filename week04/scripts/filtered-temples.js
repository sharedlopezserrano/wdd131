document.getElementById("modification-date").textContent = document.lastModified;
document.getElementById("year").textContent = new Date().getFullYear();
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

function toogleActive(element) {
  const active = document.querySelector('.active');
  active.classList.remove('active');
  element.classList.add('active');
}

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "week04/images/aba-nigeria-temple.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "week04/images/manti-temple.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "week04/images/payson-utah-temple.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "week04/images/yigo_guam_temple.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "week04/images/washington_dc_temple-exterior.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "week04/images/lima-peru-temple.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "week04/images/mexico-city-temple.jpg"
  },
  {
    templeName: "Antofagasta Chile Temple",
    location: "Antofagasta, Chile",
    dedicated: "2025, June, 15",
    area: 26163,
    imageUrl: "week04/images/antofagasta-chile-temple.jpg"
  },
  {
    templeName: "Brasilia Brazil Temple",
    location: "Brasilia-DF, Brasil",
    dedicated: "2023, September, 17",
    area: 25000,
    imageUrl: "week04/images/brasilia-brazil-temple.jpg"
  },
  {
    templeName: "Kansas City Temple",
    location: "Kansas City, Missouri",
    dedicated: "2012, May, 6",
    area: 32000,
    imageUrl: "week04/images/kansas-city-missouri-temple.jpg"
  },
];

document.getElementById('home').addEventListener('click', (e) => {
  setActive(e.target);
  document.querySelector('.main-title').textContent = 'Home';
  createTempleCard(temples);
});

document.getElementById('brazil').addEventListener('click', (e) => {
  setActive(e.target);
  document.querySelector('.main-title').textContent = 'Brazil';
  createTempleCard(temples.filter(temple => temple.location.includes('Brasil')));
});

document.getElementById('new').addEventListener('click', (e) => {
  setActive(e.target);
  document.querySelector('.main-title').textContent = 'New';
  createTempleCard(temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(',')[0]);
    return year > 2000;
  }));
});

document.getElementById('large').addEventListener('click', (e) => {
  setActive(e.target);
  document.querySelector('.main-title').textContent = 'Large';
  createTempleCard(temples.filter(temple => temple.area > 90000));
});

document.getElementById('small').addEventListener('click', (e) => {
  setActive(e.target);
  document.querySelector('.main-title').textContent = 'Small';
  createTempleCard(temples.filter(temple => temple.area < 10000));
});

document.getElementById('old').addEventListener('click', (e) => {
  setActive(e.target);
  document.querySelector('.main-title').textContent = 'Old';
  createTempleCard(temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(',')[0]);
    return year < 1900;
  }));
});

function setActive(element) {
  document.querySelectorAll('.navigation a').forEach(link => link.classList.remove('active'));
  element.classList.add('active');
}

createTempleCard(temples);

function createTempleCard(filteredTemples) {
  document.querySelector('.res-grid').innerHTML = '';
  filteredTemples.forEach(temple => {
    let card = document.createElement('section');
    let name = document.createElement('h3');
    let location = document.createElement('p');
    let dedication = document.createElement('p');
    let area = document.createElement('p');
    let img = document.createElement('img');

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq. ft.`;
    img.setAttribute('src', temple.imageUrl);
    img.setAttribute('alt', `${temple.templeName} Temple`);
    img.setAttribute('loading', 'lazy');

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector('.res-grid').appendChild(card);
  });
}

let currentLanguage = 'en';
const map = L.map('map').setView([21.9162, 95.9560], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © OpenStreetMap contributors'
}).addTo(map);

// Dummy data
const heritageSites = [
  {
    name_en: "Shwedagon Pagoda",
    name_mm: "ရွှေတိဂုံစေတီတော်",
    lat: 16.7983,
    lng: 96.1490,
    description_en: "Famous golden pagoda in Yangon.",
    description_mm: "ရန်ကုန်ရှိနာမည်ကြီးရွှေစေတီတော်။"
  }
];

heritageSites.forEach(site => {
  const marker = L.marker([site.lat, site.lng]).addTo(map);
  marker.bindPopup(`<b>${site.name_en}</b><br>${site.description_en}`);
});

function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'mm' : 'en';
  renderHeritageList();
}

function renderHeritageList() {
  const container = document.getElementById('heritageList');
  container.innerHTML = '';
  heritageSites.forEach(site => {
    const name = currentLanguage === 'en' ? site.name_en : site.name_mm;
    const desc = currentLanguage === 'en' ? site.description_en : site.description_mm;
    const card = `<div class="card"><h2>${name}</h2><p>${desc}</p></div>`;
    container.innerHTML += card;
  });
}

renderHeritageList();

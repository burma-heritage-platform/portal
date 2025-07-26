
const searchInput = document.getElementById("search-input");
const listContainer = document.getElementById("heritage-list");
const toggleLangBtn = document.getElementById("toggle-lang");

// Sample data
const heritageSites = [
  {
    name_en: "Shwedagon Pagoda",
    name_mm: "ရွှေတိဂုံစေတီတော်",
    lat: 16.7983,
    lng: 96.1490,
    location: "Yangon",
    description_en: "Famous golden pagoda in Yangon.",
    description_mm: "ရန်ကုန်ရှိနာမည်ကြီးရွှေစေတီတော်။"
  },
  {
    name_en: "Bagan",
    name_mm: "ပုဂံ",
    location: "Mandalay Region",
    description_en: "Ancient city of temples.",
    description_mm: "ဘုရားများစွာရှိသော ပုဂံမြို့။",
  },
];

let currentLang = "en";

const map = L.map('map').setView([21.9162, 95.9560], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © OpenStreetMap contributors'
}).addTo(map);

function renderSites() {
  listContainer.innerHTML = "";
  const query = searchInput.value.toLowerCase();

  const filtered = heritageSites.filter(site =>
    site[`name_${currentLang}`].toLowerCase().includes(query)
  );

  filtered.forEach(site => {
    const card = document.createElement("div");
    card.className = "border p-4 bg-white rounded shadow";
    card.innerHTML = `
      <h2 class="text-xl font-semibold">${site[`name_${currentLang}`]}</h2>
      <p class="text-sm text-gray-600">${site[`location`]}</p>
      <p class="mt-2">${site[`description_${currentLang}`]}</p>
    `;
    listContainer.appendChild(card);
  });
}

searchInput.addEventListener("input", renderSites);
document.querySelector("button").addEventListener("click", renderSites);

toggleLangBtn.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "mm" : "en";
  toggleLangBtn.textContent = currentLang === "en" ? "မြန်မာဘာသာ" : "English";
  renderSites();
});

// Initial render
renderSites();



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

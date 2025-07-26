
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

const map = L.map("map").setView([20.5937, 96.8561], 6);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Add pins for sites (use real coordinates in real app)
heritageSites.forEach(site => {
  L.marker([20.9 + Math.random(), 96.1 + Math.random()])
    .addTo(map)
    .bindPopup(site[`name_${currentLang}`]);
});


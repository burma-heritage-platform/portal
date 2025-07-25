
const map = L.map('map').setView([21.9162, 95.9560], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
fetch('data/heritage.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(site => {
      L.marker([site.lat, site.lng]).addTo(map)
        .bindPopup(`<strong>${site.name}</strong><br>${site.description}`);
    });
  });

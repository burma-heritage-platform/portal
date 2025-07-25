import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const HeritageMap = ({ sites, language }) => {
  return (
    <MapContainer center={[21.9162, 95.9560]} zoom={6} className="h-[400px] w-full rounded-xl shadow-md">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      {sites.map(site => (
        <Marker key={site.id} position={[site.lat, site.lng]}>
          <Popup>
            <strong>{language === 'en' ? site.name_en : site.name_mm}</strong><br />
            {language === 'en' ? site.type_en : site.type_mm}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default HeritageMap;

import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const shegolLocation = { lat: 59.941858, lng: 30.363398 }
const saintPLocation = { lat: 59.939099 , lng: 30.315877 }

const Map = () => {
  const [geoData, setGeoData] = useState(saintPLocation);

  return (
    <MapContainer
      center={geoData}
      zoom={12}
      style={{ height: 'calc(100vh - 52px)' }}
    >
      <TileLayer
        attribution='<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />
      <Marker position={[geoData.lat, geoData.lng]}>
        <Popup>Лерчик хеллоуу</Popup>
      </Marker>
      <Marker position={shegolLocation}>
        <Popup>А ну иди сюда, Щегол</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
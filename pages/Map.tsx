import { useState, FC } from 'react';
import {icon} from 'leaflet';
import { MapContainer, TileLayer, Marker, useMap, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const shegolLocation = { lat: 59.941858, lng: 30.363398 }
const MarkerIcon = icon({
  iconUrl: '/marker-icon.png',
  iconRetinaUrl: '/marker-icon.png-2x',
  shadowUrl: '/marker-shadow.png'
})

const ChangeView: FC<{ coords: L.LatLngExpression}> = ({ coords }) => {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}

const Map = () => {
  const [geoData, setGeoData] = useState({ lat: 59.9433, lng: 30.3235 });

  return (
    <MapContainer center={geoData} zoom={12} style={{ height: '100vh' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[geoData.lat, geoData.lng]} icon={MarkerIcon}>
        <Popup>Лерчик хеллоуу</Popup>
      </Marker>
      <Marker position={shegolLocation} icon={MarkerIcon}>
        <Popup>А ну иди сюда, Щегол</Popup>
      </Marker>
      <ChangeView coords={geoData} />
    </MapContainer>
  );
}

export default Map;
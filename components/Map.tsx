import { FC } from 'react';
import { Map, Marker, ZoomControl, Point } from 'pigeon-maps';
import { saintPLocation, shegolLocation } from '../constants';

const PigeonMap: FC = () => (
  <Map height={600} defaultCenter={saintPLocation} defaultZoom={11}>
    <Marker width={40} anchor={shegolLocation} />
  </Map>
)

export default PigeonMap;
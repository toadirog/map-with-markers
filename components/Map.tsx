import { FC } from 'react';
import { Map, Overlay } from 'pigeon-maps';
import { HeartFilled } from '@ant-design/icons'
import { saintPLocation, shegolLocation } from '../constants';

const PigeonMap: FC = () => (
  <Map height={600} defaultCenter={saintPLocation} defaultZoom={11}>
    <Overlay anchor={shegolLocation}>
      <HeartFilled style={{color: '#eb2f96', fontSize: '32px'}} />
    </Overlay>
  </Map>
)

export default PigeonMap;
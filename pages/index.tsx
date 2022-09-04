import type { NextPage } from 'next'
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css'

const MapWithNoSSR = dynamic(() => import('../components/Map'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4>Лера подумала о местах</h4>
      </div>
     <MapWithNoSSR />
    </div>
  )
}

export default Home

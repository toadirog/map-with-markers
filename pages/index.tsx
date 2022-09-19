import type { NextPage } from 'next';
import { Layout } from 'antd';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.scss';

const { Header, Content } = Layout;
const MapWithNoSSR = dynamic(() => import('../components/Map'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <Layout>
      <Header className={styles.header}>Лера подумала о местах</Header>
      <Content className={styles.content}>
        <MapWithNoSSR />
      </Content>
    </Layout>
  );
};

export default Home;

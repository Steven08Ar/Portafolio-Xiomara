import React from 'react';
import styles from './Home.module.css';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import PartnerLogos from '../../components/PartnerLogos/PartnerLogos';

const Home: React.FC = () => {
  return (
    <div className={styles.homeFrame}>
      <div className={styles.overlay}></div>
      <div className={styles.contentContainer}>
        <Header />
        <Hero />
        <PartnerLogos />
      </div>
    </div>
  );
};

export default Home;

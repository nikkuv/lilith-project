import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <img src="/heroImage.png" alt="Hero Image" className={styles.heroImage} />
      <h1 className={styles.heroText}>urshitaxo</h1>
    </div>
  );
};

export default Hero;


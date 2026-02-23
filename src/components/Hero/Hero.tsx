import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <div className={styles.heroContainer}>
      {/* Left Column: Intro Text */}
      <div className={styles.introWrapper}>
        <span className={styles.greetingBadge}>Hola, soy Xiomara. Marketing Digital</span>
        <h3 className={styles.introTitle}>Where strategy meets<br/>storytelling.</h3>
        <p className={styles.introDescription}>
          Xiomara is a Social Communication student at UNAB, Bucaramanga, specializing in digital marketing. She transforms ideas into meaningful experiences — blending analytical thinking with creative vision.
        </p>
        <div className={styles.keywordTags}>
          <span className={styles.tag}>Digital Marketing</span>
          <span className={styles.tag}>Content Strategy</span>
          <span className={styles.tag}>Brand Storytelling</span>
          <span className={styles.tag}>Creative Direction</span>
        </div>
      </div>

      {/* Right Column: Main Hero Name */}
      <div className={styles.textWrapper}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.mainTitle}></h1>
          <h2 className={styles.subTitle}></h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;

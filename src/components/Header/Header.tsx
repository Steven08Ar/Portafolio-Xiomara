import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      {/* Left Pill */}
      <div className={styles.logoPill}>
        <span className={styles.logoText}>Xiomara</span>
      </div>
      
      {/* Center Nav Pill */}
      <nav className={styles.navPill}>
        <a href="#" className={styles.navLink}>Work</a>
        <a href="#" className={styles.navLink}>About</a>
        <a href="#" className={styles.navLink}>Blog</a>
        <a href="#" className={styles.navLink}>Contact</a>
      </nav>

      {/* Right CTA Pill */}
      <div className={styles.ctaPillWrapper}>
        <button className={styles.ctaButton}>
          Start Project
        </button>
      </div>
    </header>
  );
};

export default Header;

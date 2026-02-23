import React from 'react';
import styles from './PartnerLogos.module.css';
import figmaLogo from '../../assets/Figma-logo.svg';
import photoshopLogo from '../../assets/Adobe_Photoshop_CC_icon.svg';
import illustratorLogo from '../../assets/Adobe_Illustrator_CC_icon.svg';
import canvaLogo from '../../assets/canva-icon.svg';
import capcutLogo from '../../assets/capcut-icon.svg';

const tools = [
  { name: 'Figma', icon: figmaLogo },
  { name: 'Photoshop', icon: photoshopLogo },
  { name: 'Illustrator', icon: illustratorLogo },
  { name: 'Canva', icon: canvaLogo },
  { name: 'Capcut', icon: capcutLogo },
];

const PartnerLogos: React.FC = () => {
  return (
    <div className={styles.toolsContainer}>
      <div className={styles.toolsTrack}>
        {/* Original Set */}
        {tools.map((tool, index) => (
          <div key={`original-${index}`} className={styles.toolCard}>
            <div className={styles.cardLeft}>
              <div className={styles.iconCircle}>
                <img src={tool.icon} alt={tool.name} className={styles.iconImage} />
              </div>
              <span className={styles.toolName}>{tool.name}</span>
            </div>
          </div>
        ))}
        {/* Duplicate Set for Mobile Marquee */}
        {tools.map((tool, index) => (
          <div key={`duplicate-${index}`} className={`${styles.toolCard} ${styles.duplicate}`}>
            <div className={styles.cardLeft}>
              <div className={styles.iconCircle}>
                <img src={tool.icon} alt={tool.name} className={styles.iconImage} />
              </div>
              <span className={styles.toolName}>{tool.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerLogos;

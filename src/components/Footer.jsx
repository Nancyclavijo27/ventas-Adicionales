import React from 'react';
import styles from './Footer.module.css'; // Importa los estilos del archivo CSS

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>Copyright (c) 2023</div>
        <div className={styles.divider}></div>
        <div className={styles.text}>Clarifionsupport@clarifion.com</div>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.icon}>
          <div className={styles.iconPart1}></div>
          <div className={styles.iconPart2}></div>
        </div>
        <div className={styles.text}>Secure 256-bit SSL encryption.</div>
      </div>
    </div>
  );
};

export default Footer;

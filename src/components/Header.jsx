import React from 'react';
import styles from './Header.module.css'; // Importa los estilos de módulos

import Logo1 from '../assets/Logo1.png';
import Logo2 from '../assets/Logo2.png';
import Logo3 from '../assets/Logo3.png';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img className={styles.logo} src={Logo1} alt="Logo1" />
        <div className={styles.logoContainer}>
          <img className={styles.logoone} src={Logo2} alt="Logo2" />
          <img className={styles.logotwo} src={Logo3} alt="Logo3" />
        </div>
      </div>
    </div>
  );
}

export default Header;

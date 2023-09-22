import React from "react";
import styles from './Narvar.module.css'; // Importa los estilos de módulos

import chulo1 from "../assets/chulo1.png";
import chulo2 from "../assets/chulo2.png";
import heart from "../assets/heart.png";
import truck from "../assets/truck.png";

const Narvar = () => {
  return (
    <div className={styles.box}>
      <div className={styles.primero}>
        <div className={styles.image}>
          <img src={chulo1} alt="chulo1" />
        </div>
        <div className={styles.text}>30-DAY SATISFACTION GUARANTEE</div>
      </div>
      <div className={styles.primero}>
        <div className={styles.image}>
          <img src={truck} alt="truck" />
        </div>
        <div className={styles.text}>Free delivery on orders over $40.00</div>
      </div>
      <div className={styles.primero}>
        <div className={styles.image}>
          <img src={heart} alt="heart" />
        </div>
        <div className={styles.text}>50.000+ HAPPY CUSTOMERS</div>
      </div>
      <div className={styles.primero}>
        <div className={styles.image}>
          <img src={chulo2} alt="chulo2" />
        </div>
        <div className={styles.text}>100% Money Back Guarantee</div>
      </div>
    </div>
  );
}

export default Narvar;

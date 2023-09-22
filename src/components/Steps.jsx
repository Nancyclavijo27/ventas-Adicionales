import React from "react";
import styles from './Steps.module.css'; // Importa los estilos del módulo CSS
import circulover from "../assets/circulover.png";
import tree from "../assets/tree.webp";
import number from "../assets/number.png";




const Steps = () => {
    return (
     
        <div className={styles.stepIndicator}>
        <div className={styles.step}>
          <img className={styles.logo} src={circulover} alt="circulover" />
          <div className={styles.stepText}>Step 1 : Cart Review</div>
        </div>
        <div className={styles.step}>
        <img className={styles.logo} src={circulover} alt="circulover" />
          
          <div className={styles.stepText}>Step 2 : Checkout</div>
        </div>
        <div className={styles.step}>
        <img className={styles.logo} src={tree} alt="tree" />
          <div className={styles.stepText}>Step 3 : Special Offer</div>
        </div>
        <div className={styles.step}>
        <img className={styles.logo} src={number} alt="number" />
          <div className={styles.stepText}>Step 4 : Confirmation</div>
        </div>
        
      </div>
     
    );
  }
  
  export default Steps;
  
import React from 'react';
import styles from './SatisfactionGuarantee.module.css';
import celu from "../../assets/celu.png";
import Star from "../../assets/Star.png";



const SatisfactionGuarantee = () => {
    return (
      <div  className={styles.productCard}>
      <div className={styles.imageContainer}>
        <div className={styles.imageBackground} />
        <img className={styles.productImage} src={celu} alt="celu" />
      </div>
      <div className={styles.productInfo}>
      <div className={styles.productInfos}>
        <div className={styles.productTitle}>Clarifion Air Ionizer</div>
        <div className={styles.productPriceContainer}>
          <div className={styles.originalPrice}>$180</div>
          <div className={styles.discountedPrice}>$84</div>
        </div>
      </div>
        <div className={styles.progressContainer}>
      <div className={styles.progressDot} style={{ left: '0px', top: '0px' }}>
        
        <img className={styles.productImage} src={Star} alt="Star" />
        
      </div>
      <div className={styles.progressDot} style={{ left: '20px', top: '0px' }}>
      <img className={styles.productImage} src={Star} alt="Star" />
      </div>
      <div className={styles.progressDot} style={{ left: '40px', top: '0px' }}>
      <img className={styles.productImage} src={Star} alt="Star" />
      </div>
      <div className={styles.progressDot} style={{ left: '60px', top: '0px' }}>
      <img className={styles.productImage} src={Star} alt="Star" /> 
      </div>
      <div className={styles.progressDot} style={{ left: '80px', top: '0px' }}>
      <img className={styles.productImage} src={Star} alt="Star" /> 
      </div>
    </div>
    <div className={styles.stockInfoContainer}>
      <div className={styles.stockDotContainer}>
        <div className={styles.stockDotOuter}></div>
        <div className={styles.stockDotInner}></div>
      </div>
      <div className={styles.stockText}>12 left in Stock</div>
    </div>
    <div className={styles.textInfo}>
      Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
    </div>
        
       
      </div>
    </div>
    );
  };

  export default SatisfactionGuarantee;  
import React from 'react';
import styles from './ProductDetails.module.css';

const ProductDetails = () => {
    return (
      <div className={styles.container}>
      <span className={styles.oneTimeOnly}>ONE TIME ONLY </span>
      <span className={styles.specialPrice}>special price for 6 extra Clarifion for only </span>
      <span className={styles.oneTimeOnly}> $14 each  </span>
      <span className={styles.specialPrice}> ($84.00 total! )</span>
    </div>
    );
  };

  export default ProductDetails; 
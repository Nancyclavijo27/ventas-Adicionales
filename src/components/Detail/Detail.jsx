import React from 'react';
import styles from "./Detail.module.css";
import DiscountAndCTA from './DiscountAndCTA';
import MainImage from './MainImage';
import ProductDetails from './ProductDetails';
import ProductFeatures from './ProductFeatures';
import SatisfactionGuarantee from './SatisfactionGuarantee';
import ReviewItem from './ReviewItem'; // Importa el componente

const Detail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <MainImage />
        <ReviewItem />
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.productDetailsContainer}>
          <ProductDetails />
        </div>
        <div style={{ height: '32px' }} /> {/* Espacio de 32px */}
        <SatisfactionGuarantee />
        <ProductFeatures />
        <DiscountAndCTA /> 
      </div>
    </div>
  );
};

export default Detail;

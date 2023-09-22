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
        {/* Coloca ReviewItem aquí para que esté debajo de MainImage */}
        <ReviewItem />
      </div>
      <div className={styles.rightColumn}>
        <ProductDetails />
        <SatisfactionGuarantee />
        <DiscountAndCTA />
        
        <ProductFeatures />
        
      </div>
    </div>
  );
};

export default Detail;

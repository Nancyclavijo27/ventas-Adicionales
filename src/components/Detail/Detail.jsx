import React from 'react';
import styles from "./Detail.module.css";
import DiscountAndCTA from './DiscountAndCTA';
import MainImage from './MainImage';
import ProductDetails from './ProductDetails';
import ProductFeatures from './ProductFeatures';
import SatisfactionGuarantee from './SatisfactionGuarantee';




const Detail = () => {
  return (
    <div className={styles.container}>
     <MainImage />
     <DiscountAndCTA />
     <ProductDetails />
     <ProductFeatures />
     <SatisfactionGuarantee />
    </div>
  );
};

export default Detail;
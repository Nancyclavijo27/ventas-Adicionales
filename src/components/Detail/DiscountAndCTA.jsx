import React from "react";
import imagese from "../../assets/imagese.png";
import styles from "./DiscountAndCTA.module.css";

const DiscountAndCTA = () => {
  return (
    <div className={`${styles.container} ${styles.responsiveContainer}`}>
      <img src={imagese} alt="imagese" className={styles.image} />
      <div className={`${styles.textContainer} ${styles.responsiveTextContainer}`}>
        <span className={styles.text}>
          If you are not completely thrilled with your Clarifion - We have a
        </span>
        <span className={styles.guarantee}>30 day satisfaction guarantee</span>
        <span className={styles.text}>
          . Please refer to our return policy at the bottom of the page for
          more details. Happy Shopping!
        </span>
      </div>
    </div>
  );
};

export default DiscountAndCTA;

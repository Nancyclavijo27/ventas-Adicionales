// MainImage.js
import React from "react";
import cel from "../../assets/cel.png";
import styles from "./MainImage.module.css";

const MainImage = () => {
  return (
    <div className={styles.container}>
      <img
        src={cel}
        alt="cel"
        className={styles.image}
      />
    </div>
  );
};

export default MainImage;

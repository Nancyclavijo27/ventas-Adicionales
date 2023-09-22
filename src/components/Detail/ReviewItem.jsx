import React from 'react';
import verify from "../../assets/verify.png";
import foto from "../../assets/foto.png";
import Stars from "../../assets/Stars.png";
import styles from './ReviewItem.module.css'; // Asegúrate de que estás importando el módulo CSS correcto.

const ReviewItem = () => {
  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <img
          className={styles.img}
          src={foto}
          alt="foto"
        />
        <div className={styles.rating}>
          <img
            className={styles.star}
            src={Stars}
            alt="Stars"
          />
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.username}>Ken T.</div>
        <img
          className={styles.imge}
          src={verify}
          alt="verify"
        />
        <div className={styles.verified}>Verified Customer</div>
      </div>
      <div className={styles.reviewText}>
        “As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”
      </div>
    </div>
  );
};

export default ReviewItem;

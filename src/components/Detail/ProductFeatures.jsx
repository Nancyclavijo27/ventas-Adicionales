import React, { useState } from "react";
import azulch from "../../assets/azulch.png";
import porcen from "../../assets/porcen.png";
import amex from "../../assets/amex.png";
import apple from "../../assets/apple.png";
import gpay from "../../assets/gpay.png";
import candado from "../../assets/candado.png";
import paypal from "../../assets/paypal.png";
import shop from "../../assets/shop.png";
import mastercard from "../../assets/mastercard.png";
import visa from "../../assets/visa.png";
import styles from "./ProductFeatures.module.css";

const ProductFeatures = () => {
  const [buttonHovered, setButtonHovered] = useState(false);

  const handleButtonHover = () => {
    setButtonHovered(true);
  };

  const handleButtonLeave = () => {
    setButtonHovered(false);
  };

  return (
    <div className={`${styles.container} ${styles.mobileContainer}`}>
      <div className={styles.containerone}>
        <div className={styles.segundo}>
          <img
            src={azulch}
            alt="azulch"
            className={styles.image}
          />
          <div className={styles.text}>
            <span className={styles.ntext}>Negative Ion Technology may </span>
            <span className={styles.btext}>help with allergens</span>
          </div>
        </div>

        <div className={styles.segundo}>
          <img
            src={azulch}
            alt="azulch"
            className={styles.image}
          />
          <div className={styles.text}>
            <span className={styles.ntext}>Designed for air rejuvenation</span>
          </div>
        </div>

        <div className={styles.segundo}>
          <img
            src={azulch}
            alt="azulch"
            className={styles.image}
          />
          <div className={styles.text}>
            <span className={styles.ntext}>Perfect for every room </span>
            <span className={styles.btext}>in all types of places.</span>
          </div>
        </div>

        <div className={styles.stayl}>
          <div className={styles.icon}>
            <img
              src={porcen}
              alt="porcen"
              className={styles.image}
            />
          </div>
          <span className={styles.stext}>Save </span>
          <span className={styles.petext}>53%</span>
          <span className={styles.stext}> and get </span>
          <span className={styles.petext}>6 extra Clarifision</span>
          <span className={styles.stext}> for only </span>
          <span className={styles.petext}>$14 Each</span>
          <span className={styles.stext}>.</span>
        </div>
      </div>

      <div className={styles.discount}>
        <div
          className={`${styles.discountBox} ${buttonHovered ? styles.buttonHovered : ''}`}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          <div className={styles.discountHeader}>
            <div className={styles.discountText}>Yes - Claim my discount</div>
            <div className={styles.divider}></div>
          </div>
        </div>
        <div className={styles.shipping}>
          <div className={styles.shippingText}>Free shipping</div>
          <div className={styles.arrow}></div>
          <div className={styles.shippingInfo}>
            <img src={candado} alt="candado" className={styles.iconico} />
            Secure 256-bit SSL encryption.
          </div>
          <div className={styles.arrow}></div>
          <div className={styles.supliicons}>
            <img src={visa} alt="visa" />
            <img src={shop} alt="shop" />
            <img src={paypal} alt="paypal" />
            <img src={mastercard} alt="mastercard" />
            <img src={apple} alt="apple" />
            <img src={gpay} alt="gpay" />
            <img src={amex} alt="amex" />
          </div>
        </div>
      </div>

      <div className={styles.noThanks}>
        <div className={styles.noThanksText}>
          No thanks, I don't want this.
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;

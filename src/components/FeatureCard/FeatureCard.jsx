import React from 'react'
import styles from "./FeatureCard.module.css";
import rightArrow from "../../assets/rightArrow.png";

function FeatureCard({item}) {
  return (
    <div className={styles.eachCardContainer}>
        <div className={styles.featureImg}>
            <img src={item.img} alt=""/>
        </div>
        <div className={styles.featureTitle}>
            {item.title}
        </div>
        <div className={styles.featureDesc}>
            {item.desc}
        </div>
        <div className={styles.FeatureCardFooter}>
            See Explained&nbsp;&nbsp;&nbsp;<img src={rightArrow} alt=""/>
        </div>
    </div>
  )
}

export default FeatureCard
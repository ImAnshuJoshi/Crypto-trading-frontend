import React from 'react'
import styles from "./SideCard.module.css";

function SideCard({item}) {
  return (
    <div className={styles.eachSideCard}>
        <div className={styles.cardImg}>
            <img src={item.img} alt=""/>
        </div>
        <div className={styles.steps}>
            <div className={styles.Cardheading}>
                {item.heading}
            </div>
            <div className={styles.CardDesc}>
                {item.desc}
            </div>
        </div>
    </div>
  )
}

export default SideCard
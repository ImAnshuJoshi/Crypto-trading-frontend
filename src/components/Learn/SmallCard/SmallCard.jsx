import React from 'react'
import image2 from "../../../assets/image2.png"
import styles from "./SmallCard.module.css"

function SmallCard({data}) {
  return (
    <div className={styles.smallCardContainer}>
        <img src={data.image} alt="image1" className={styles.cardImage}/>
        <div className={styles.smallCardLowerContainer}>
            <div className={styles.tag}>
            {data.tag}
            </div>
            <div className={styles.heading}>
            {data.heading}
            </div>
            <div className={styles.article}>
            {data.article}
            </div>
        </div>
    </div>
  )
}

export default SmallCard
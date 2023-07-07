import React from 'react'
import image1 from "../../../assets/image1.png"
import styles from "./BigCard.module.css"

function BigCard() {
  return (
    <div className={styles.cardContainer}>
        <div className={styles.heading}>
        All about Investing in NFTs and related risks
        </div>
        <div className={styles.tag}>CRYPTO BASIC</div>
    </div>
  )
}

export default BigCard
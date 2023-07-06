import React from 'react'
import styles from "./Explore.module.css"

function Explore() {
  return (
    <div className={styles.exploreContainer}>
        <div>
        <div className={styles.containerLeft}>
            <div className={styles.heading}>
                New In Cryptocurrency?
            </div>
            <div className={styles.subHeading}>
            We'll tell you what cryptocurrencies are, how they work and why<br/> you should own one right now. So let's do it.
            </div>
        </div>
        <button className={styles.learnBtn}>
            Learn and Explore Now
        </button>
        </div>
    </div>
  )
}

export default Explore
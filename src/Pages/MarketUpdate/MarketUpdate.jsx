import React from 'react'
import styles from "./MarketUpdate.module.css"
import Updatenav from '../../components/MarketUpdate/UpdateNav.jsx/Updatenav'
import Table from '../../components/MarketUpdate/Table/Table'

function MarketUpdate() {
  return (
    <div className={styles.MarketUpdateContainer}>
        <div className={styles.contentContainer}>
        <div className={styles.heading}>Market Update</div>
        <div className={styles.lowerContent}>
            <div className={styles.subHeading}>
            Cryptocurrency Categories
            </div>
            <div>
                <Updatenav/>
            </div>
            <div>
                <Table/>
            </div>
        </div>
        <div className={styles.hyperLink}>
          See All Coins
        </div>
        </div>
    </div>
  )
}

export default MarketUpdate
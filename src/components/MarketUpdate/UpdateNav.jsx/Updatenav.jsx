import React from 'react'
import styles from "./Updatenav.module.css"
import search from "../../../assets/search.png"

const navItems = [
  "Popular",
  "Metaverse",
  "Entertainment",
  "Energy",
  "Gaming",
  "Music",
  "See All 12+"
]

function Updatenav() {
  return (
    <div className={styles.updateNavContainer}>
      <div className={styles.navItems}>
        {
          navItems.map((item, index) => {
            return (
              <div className={`${styles.navItem} ${index === 0 ? styles.firstNavItem : ""}`} key={index}>
                {item}
              </div>
            )
          })
        }
      </div>
      <div>
        <input type="text" id="searchInput" className={styles.InputSearch} placeholder='Search Coin'/>
      </div>
    </div>
  )
}

export default Updatenav
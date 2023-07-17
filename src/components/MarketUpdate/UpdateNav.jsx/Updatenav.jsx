import React, { useState } from 'react'
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
  const [highlighted , setHighlighted] = useState(0);

  const handleItemClick = (index) =>{
    setHighlighted(index)
  }
  return (
    <div className={styles.updateNavContainer}>
      <div className={styles.navItems}>
        {
          navItems.map((item, index) => {
            return (
              <div className={`${styles.navItem} ${index==highlighted ? styles.highlightedItem : ""}`} key={index}
              onClick={()=>{
                handleItemClick(index)
              }}
              >
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
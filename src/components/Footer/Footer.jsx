import React from 'react'
import styles from "./Footer.module.css"
import insta from "../../assets/insta.png"
import twitter from "../../assets/twitter.png"
import facebook from "../../assets/facebook.png"
import youtube from "../../assets/youtube.png"

const footerData = [
    {
        title:"About Us",
        links:[
            "About",
            "Carrers",
            "Blog",
            "Legal & privacy"
        ]
    },
    {
        title:"Services",
        links:[
            "Applications",
            "Buy Crypto",
            "Affilliate",
            "Institutional Services"
        ]
    },
    {
        title:"Learn",
        links:[
            "What is Cryptocurency?",
            "Crypto Basic",
            "Tips and Tutorials",
            "Market Update"
        ]
    },
]

function Footer() {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.leftContainer}>
            <div className={styles.footerHeader}>
                Crypto<span>Cap</span>
            </div>
            <div className={styles.footerSubHeader}>
                <div>
                    <img src={insta} alt=""/>
                    <img src={twitter} alt=""/>
                    <img src={facebook} alt=""/>
                    <img src={youtube} alt=""/>
                </div>
                <div className={styles.footerfooter}>
                2021 CoinMarketCap. All rights reserved
                </div>
            </div>
        </div>
        <div className={styles.rightContainer}>
            {/* <div className={styles.eachLinkColumn}> */}
                {
                    footerData.map((item, index) => {
                        return (
                            <div className={styles.eachColumn} key={index}>
                                <div className={styles.columnHeader}>{item.title}</div>
                                {
                                    item.links.map((link, index) => {
                                        return (
                                            <div className={styles.eachLink} key={index}>
                                                {link}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            {/* </div> */}
        </div>
    </div>
  )
}

export default Footer
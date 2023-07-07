import React from 'react'
import styles from "./Learn.module.css"
import BigCard from '../../components/Learn/BigCard/BigCard'
import SmallCard from '../../components/Learn/SmallCard/SmallCard'
import m2 from "../../assets/image2.png"
import m3 from "../../assets/image3.png"
import m4 from "../../assets/image4.png"
import m5 from "../../assets/image5.png"
import m6 from "../../assets/image6.png"
import m7 from "../../assets/image7.png"

const data = [
    {
        tag:"CRYPTO BASIC",
        heading:"What is cryptocurrency? all you need to know",
        article:"Cryptocurrencies are basically digital assets. It is secured by cryptography..",
        image : m2
    },
    {
        tag:"CRYPTO BASIC",
        heading:"Can crypto really replace your bank account?",
        article:"From direct deposit to earning yield, key ways crypto can help you take control..",
        image : m3
    },
    {
        tag:"TIPS & TRICKS",
        heading:"How to setup crypto wallet in your account",
        article:"A crypto wallet is a place where you can securely keep your crypto.. ",
        image : m4
    },
    {
        tag:"CRYPTO BASIC",
        heading:"The fact about bitcoin must you know",
        article:"Bitcoin is the world's first widely adopted cryptocurrency, it allows for secure.. ",
        image : m5
    },
    {
        tag:"TIPS & TRICKS",
        heading:"When is the best time to invest in crypto?",
        article:"When prices are fluctuating, how do you know when to buy?",
        image : m6
    },
    {
        tag:"TIPS & TRICKS",
        heading:"What Is DeFi? Inside the Wild West of Cryptocurrency.",
        article:"Welcome to decentralized finance or DeFi, the new frontier of crypto that will..",
        image : m7
    },
]

function Learn() {
  return (
    <div className={styles.learnContainer}>
         <div className={styles.learnHeading}>
         Learn About Cryptocurrency
        </div>
        <div className={styles.learnSubHeading}>
        Learn all about cryptocurrency to start investing
        </div>
        <div className={styles.learnCards}>
            <BigCard/>
            {
                data.map((item,index)=>{
                    return (
                        <SmallCard key={index} data={item}/>
                    )
                })
            }
        <div className={styles.hyperLink}>
          See All Coins
        </div>
        </div>
    </div>
  )
}

export default Learn
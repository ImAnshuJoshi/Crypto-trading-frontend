import React from 'react'
import styles from "./Features.module.css";
import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";
import feature3 from "../../assets/feature3.png";
import feature4 from "../../assets/feature4.png";
import FeatureCard from '../../components/FeatureCard/FeatureCard';

const data = [
    {
        img: feature1,
        title: "Manage Portfolio",
        desc:"Buy and sell popular digital currencies, keep track of them in the one place.",
    },
    {
        img: feature2,
        title: "Protected Securely",
        desc:"All cash balances are covered by FDIC insurance, up to a maximum of $250,000.",
    },
    {
        img: feature3,
        title: "Cryptocurrency Variety",
        desc:"Supports a variety of the most popular digital currencies and always uptodate.",
    },
    {
        img: feature4,
        title: "Learn Best Practice",
        desc:"Easy to know how to cryptocurrency works and friendly to newbie.",
    }
]

function Features() {
  return (
    <div className={styles.featureContainer}>
        <div className={styles.featuresHeading}>
        CryptoCap Amazing Features
        </div>
        <div className={styles.featuresSubHeading}>
        Explore sensational features to prepare your best investment in cryptocurrency
        </div>
        <div className={styles.featureCards}>
            {data.map((item, index) => (
            <FeatureCard item={item} />
            ))}
        </div>
    </div>
  )
}

export default Features
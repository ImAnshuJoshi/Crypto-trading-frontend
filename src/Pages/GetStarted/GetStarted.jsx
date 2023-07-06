import React from "react";
import styles from "./GetStarted.module.css";
import side1 from "../../assets/side1.png";
import side2 from "../../assets/side2.png";
import side3 from "../../assets/side3.png";
import SideCard from "../../components/SideCard/SideCard";

const data = [
    {
        img: side1,
        heading: "Create an Account",
        desc: "Your account and personal identity are guaranteed safe."
    },
    {
        img: side2,
        heading: "Connect Bank Account",
        desc: "Connect the bank account to start transactions."
    },
    {
        img: side3,
        heading: "Start Build Portfolio",
        desc: "Buy and sell popular currencies and keep track of them."
    },
]
function GetStarted() {
  return (
    <div className={styles.getStartedContainer}>
    <div className={styles.InnerContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.heading}>How to Get Started</div>
        <div className={styles.subHeading}>Simple and easy way to start your investment in cryptocurrency
        </div>
        <button className={styles.getStartedBtn}>
            Get Started
        </button>
      </div>
      <div className={styles.rightContainer}>
      {data.map((item, index) => (
            <SideCard item={item} />
            ))}
      </div>
        </div>
    </div>
  );
}

export default GetStarted;

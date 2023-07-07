import React from "react";
import styles from "./Main.module.css";
import main from "../../assets/main.png"

function Main() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainRight}>
        <div className={styles.heading}>Start and Build Your Crypto Portfolio Here</div>
        <div className={styles.subHeading}>
          Only at CryptoCap, you can build a good portfolio and learn best
          practices about cryptocurrency.
        </div>
        <button>Get Started</button>
      </div>
      <img className={styles.mainImg} src={main}/>
    </div>
  );
}

export default Main;

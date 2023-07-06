import React, { useState } from 'react';
import navItems from '../../data';
import globe from '../../assets/globe.png';
import downarrow from "../../assets/downarrow.png";
import hamburger from "../../assets/hamburger.png";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navContainer}>
      <div className={styles.name}>
        Crypto<span>Cap</span>
      </div>

      <div className={`${styles.navItems} ${isOpen ? styles.open : ''}`}>
        {navItems.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
         {/* <img
          src={hamburger}
          alt="menu"
          className={styles.hamburger}
          onClick={handleToggle}
        /> */}
      </div>

      <div className={styles.navRight}>
        <div className={styles.navRightItems}>
          <img src={globe} alt="profile" />
          EN
          <img src={downarrow} alt="arrow" />
        </div>

        <button className={styles.loginButton}>Login</button>
      </div>
    </div>
  );
}

export default Navbar;

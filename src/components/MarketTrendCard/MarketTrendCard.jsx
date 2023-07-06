import React from 'react';
import styles from './MarketTrendCard.module.css';

import arrowtilt from '../../assets/arrowtilt.png';

function MarketTrendCard({item}) {
  return (
    <div className={styles.MarketTrendCardContainer}>
      {/* {data.map((item, index) => {
        return (
            <div className={styles.EachCardContainer}> */}
          <div className={styles.cardHeader}>
            <div>
              <div>
                <img src={item.img} alt={item.name} />
              </div>
              <div>{item.name}</div>
              <div className={styles.cardHeaderCategory}>{item.category}</div>
            </div>
            <img src={arrowtilt} alt="" />
          </div>
          <div className={styles.divider}></div>
          <div className={styles.cardFooter}>
            <div>
              <div className={styles.cardFooterHeader}>{item.price}</div>
              <div className={styles.cardFooterFooter}>{item.percentage}</div>
            </div>
            <img src={item.graph} alt="" />
          </div>
            {/* </div>
        );
      })} */}
    </div>
  );
}

export default MarketTrendCard;

import React from "react";
import styles from "./MarketTrend.module.css";
import BTC from "../../assets/bitcoin.png";
import ETH from "../../assets/eth.png";
import bnb from "../../assets/bnb.png";
import usdt from "../../assets/usdt.png";
import graph1 from "../../assets/graph1.png";
import graph2 from "../../assets/graph2.png";
import graph3 from "../../assets/graph3.png";
import graph4 from "../../assets/graph4.png";

import MarketTrendCard from "../../components/MarketTrendCard/MarketTrendCard";
const data = [
  {
    img: BTC,
    name: "BTC",
    category: "BITCOIN",
    price: "$56,623.54",
    percentage: "1.41%",
    graph: graph1,
  },
  {
    img: ETH,
    name: "ETH",
    category: "ETHEREUM",
    price: "$4,267.90",
    percentage: "2.22%",
    graph: graph2,
  },
  {
    img: bnb,
    name: "BNB",
    category: "BINANCE",
    price: "$587.74",
    percentage: "0.82%",
    graph: graph3,
  },
  {
    img: usdt,
    name: "USDT",
    category: "TETHER",
    price: "$0.9998",
    percentage: "0.03%",
    graph: graph4,
  },
];

function MarketTrend() {
  return (
    <div className={styles.MarketTrend}>
      <div className={styles.marketTrendContainerHeading}>Market Trend</div>
      <div className={styles.cards}>
        {data.map((item, index) => (
          <MarketTrendCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default MarketTrend;

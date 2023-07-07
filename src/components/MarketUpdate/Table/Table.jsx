import React from "react";
import styles from "./Table.module.css";
import BTC from "../../../assets/bitcoin.png";
import ETH from "../../../assets/eth.png";
import bnb from "../../../assets/bnb.png";
import usdt from "../../../assets/usdt.png";
import solana from "../../../assets/solana.png";
import maskGroup from "../../../assets/maskGroup.png";
import usd from "../../../assets/usd.png";
import graph1 from "../../../assets/graph11.png";
import graph2 from "../../../assets/graph22.png";
import graph3 from "../../../assets/graph33.png";
import graph4 from "../../../assets/graph44.png";
import graph5 from "../../../assets/graph5.png";
import graph6 from "../../../assets/graph6.png";
import graph7 from "../../../assets/graph7.png";

const data = [
  {
    name: "Bitcoin",
    img: BTC,
    code: "BTC",
    LastPrice: "$56,623.54",
    Change: "1.41%",
    marketStats: graph1,
  },
  {
    name: "Ethereum",
    img: ETH,
    code: "ETH",
    LastPrice: "$4,267.90",
    Change: "2.22%",
    marketStats: graph2,
  },
  {
    name: "Binance Coin",
    img: bnb,
    code: "BNB",
    LastPrice: "$587.74",
    Change: "-0.82%",
    marketStats: graph3,
  },
  {
    name: "Tether",
    img: usdt,
    code: "USDT",
    LastPrice: "$0.9998",
    Change: "-0.03%",
    marketStats: graph4,
  },
  {
    name: "Solana",
    img: solana,
    code: "SOL",
    LastPrice: "$213.67",
    Change: "-0.53%",
    marketStats: graph5,
  },
  {
    name: "XRP",
    img: maskGroup,
    code: "XRP",
    LastPrice: "$1.08",
    Change: "-0.53%",
    marketStats: graph6,
  },
  {
    name: "USD Coin",
    img: usd,
    code: "USDC",
    LastPrice: "$1.00",
    Change: "-0.03%",
    marketStats: graph7,
  },
];

function Table() {
  return (
    <div className={styles.tableContainer}>
      <table>
        <thead className={styles.tableHeader}>
          <tr>
            <td className={styles.tableHeading}>NO</td>
            <td className={styles.tableHeading}>NAME</td>
            <td className={styles.tableHeading}>LAST PRICE</td>
            <td className={styles.tableHeading}>CHANGE</td>
            <td className={styles.tableHeading}>MARKET STATS</td>
            <td className={styles.tableHeading}>TRADE</td>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {data.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <tr>
                  <td>{index + 1}</td>
                  <td className={styles.coinName}>
                    <div className={styles.currencyNames}>
                      <img src={item.img} alt={item.name} />
                      <div className={styles.coinNameText}>{item.name}</div>
                      <div className={styles.verticalDivider}></div>
                      <div className={styles.coinCode}>{item.code}</div>
                    </div>
                  </td>
                  <td>{item.LastPrice}</td>
                  <td className={styles.change}>{item.Change}</td>
                  <td className={styles.marketStats}>
                    <img src={item.marketStats} alt={item.name} />
                  </td>
                  <td className={styles.trade}>
                    <button className={styles.tradeButton}>TRADE</button>
                  </td>
                </tr>
                {index !== data.length - 1 && (
                  <tr>
                    <td colSpan="6">
                      <div className={styles.horizontalDivider}></div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

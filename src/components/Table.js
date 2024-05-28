import React from 'react';
import { useState, useEffect } from 'react';
const data = [
    {
        "Rank": 1,
        "Name": "Selling with re entr",
        "Calmar Ratio": 3.96,
        "Overall Profit": 381845,
        "Avg. Daily Profit": 319.54,
        "Win %(Day)": 0.65,
        "Price (Rs)": "-",
        "Action": "View"
    },
    {
        "Rank": 2,
        "Name": "strategy_name",
        "Calmar Ratio": 3.62,
        "Overall Profit": 268872.5,
        "Avg. Daily Profit": 216.31,
        "Win %(Day)": 0.64,
        "Price (Rs)": 500,
        "Action": "Buy"
    },
    {
        "Rank": 3,
        "Name": "Based on premium and",
        "Calmar Ratio": 3.42,
        "Overall Profit": 255425,
        "Avg. Daily Profit": 208.51,
        "Win %(Day)": 0.64,
        "Price (Rs)": "-",
        "Action": "View"
    },
    {
        "Rank": 4,
        "Name": "strategy_name",
        "Calmar Ratio": 3.22,
        "Overall Profit": 370845,
        "Avg. Daily Profit": 303.47,
        "Win %(Day)": 0.65,
        "Price (Rs)": "-",
        "Action": "View"
    },
    {
        "Rank": 5,
        "Name": "strategy_name",
        "Calmar Ratio": 3.22,
        "Overall Profit": 370845,
        "Avg. Daily Profit": 303.47,
        "Win %(Day)": 0.65,
        "Price (Rs)": "-",
        "Action": "View"
    },
    {
        "Rank": 6,
        "Name": "Based on premium wit",
        "Calmar Ratio": 3.01,
        "Overall Profit": 135980,
        "Avg. Daily Profit": 185.77,
        "Win %(Day)": 0.49,
        "Price (Rs)": "-",
        "Action": "View"
    },
    {
        "Rank": 7,
        "Name": "strategy_name",
        "Calmar Ratio": 2.76,
        "Overall Profit": 267867.5,
        "Avg. Daily Profit": 218.49,
        "Win %(Day)": 0.6,
        "Price (Rs)": "-",
        "Action": "View"
    },
    {
        "Rank": 8,
        "Name": "Wait and trade_Save",
        "Calmar Ratio": 2.62,
        "Overall Profit": 178252.5,
        "Avg. Daily Profit": 161.9,
        "Win %(Day)": 0.63,
        "Price (Rs)": "-",
        "Action": "View"
    },
    {
        "Rank": 9,
        "Name": "iron condor",
        "Calmar Ratio": 2.44,
        "Overall Profit": 176420,
        "Avg. Daily Profit": 137.51,
        "Win %(Day)": 0.65,
        "Price (Rs)": "-",
        "Action": "View"
    },
    {
        "Rank": 10,
        "Name": "strategy_name",
        "Calmar Ratio": 2.04,
        "Overall Profit": 244555,
        "Avg. Daily Profit": 198.66,
        "Win %(Day)": 0.62,
        "Price (Rs)": "-",
        "Action": "View"
    }
];



const Table = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const styles = {
    tableContainer: {
        backgroundColor: '#3b3b47',
        padding : windowWidth > 960 ? "20px" : windowWidth > 520 ? "13px" : "3px" ,
        paddingBottom : "20px",
        borderRadius: '10px',
        display : "flex", 
        flexDirection : "column",
        alignItems : "center"
    },
    table: {
        width: windowWidth > 545 ? "100%" : "100%",
        borderCollapse: 'collapse',
        borderRadius : windowWidth > 545 ? null : "15px",
    },
    th: {
        padding:windowWidth > 545 ? "10px" : "5px",
        border: '1px solid #4b4b57',
        backgroundColor: '#4b4b57',
        fontSize : windowWidth > 960 ? null : windowWidth > 720 ? "14px" : windowWidth > 390 ? "11px" : "7.5px",
    },
    td: {
        padding: windowWidth > 545 ? "10px" : null,
        border: '1px solid #4b4b57',
        fontSize : windowWidth > 960 ? null : windowWidth > 720 ? "12px" : windowWidth > 390 ? "10px" : "9.5px",
    },
    tableRow: {
        transition: 'transform 0.3s',
        cursor: 'pointer',
        width : "auto",
        height : windowWidth > 545 ? null : "35px",
    },
};

    return (
        <div style={styles.tableContainer}>
            <h2 style={{fontSize : windowWidth > 960 ? null : "20px"}}>Strategy Performance</h2>
            <table style={styles.table}>
                <thead>
                    <tr style={{width : "auto"}}>
                        <th style={styles.th}>Rank</th>
                        <th style={styles.th}>Name</th>
                        <th style={styles.th}>Calmar Ratio</th>
                        <th style={styles.th}>Overall Profit</th>
                        <th style={styles.th}>Avg. Daily Profit</th>
                        <th style={styles.th}>Win %(Day)</th>
                        <th style={styles.th}>Price (Rs)</th>
                        <th style={styles.th}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr
                            key={index}
                            style={styles.tableRow}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                                e.currentTarget.style.fontWeight = 'bold';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.fontWeight = 'normal';
                            }}
                        >
                            <td style={styles.td}>{row.Rank}</td>
                            <td style={styles.td}>{row.Name}</td>
                            <td style={styles.td}>{row["Calmar Ratio"]}</td>
                            <td style={styles.td}>{row["Overall Profit"]}</td>
                            <td style={styles.td}>{row["Avg. Daily Profit"]}</td>
                            <td style={styles.td}>{row["Win %(Day)"]}</td>
                            <td style={styles.td}>{row["Price (Rs)"]}</td>
                            <td style={styles.td}>{row.Action}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default Table;

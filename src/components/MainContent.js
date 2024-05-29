import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import Table from './Table';
import { useEffect, useState } from 'react';

// Original data
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

// Function to transform data for chart
const transformDataForChart = (key) => {
    return data.map((item) => ({
        name: `Rank ${item.Rank}`,
        value: item[key]
    }));
}

const CustomLineChart = ({ title, dataKey, color, windowWidth  }) => (
    <motion.div 
        className="crypto-card" 
        whileHover={{ scale: 1.05 }} 
        transition={{ duration: 0.3 }} 
        style={{
            background: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            flex: 1,
            minWidth: windowWidth > 500 ? "300px" : "250px",
            width : "auto"  // Ensuring a minimum width for each chart
        }}
    >
        <h3 style = {{color : "black" }}>{title}</h3>
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={transformDataForChart(dataKey)} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke={color} activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    </motion.div>
);

const MainContent = () => {
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

    return (
        <div style={{ padding: windowWidth > 560 ? "20px" : windowWidth > 510 ? "10px" : "4px" }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '30px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    <CustomLineChart title="Overall Profit" dataKey="Overall Profit" color="#8884d8" windowWidth={windowWidth} />
                    <CustomLineChart title="Calmar Ratio" dataKey="Calmar Ratio" color="#057A31" windowWidth={windowWidth}  />
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    <CustomLineChart title="Avg. Daily Profit" dataKey="Avg. Daily Profit" color="#FEBC3A" windowWidth={windowWidth}  />
                    <CustomLineChart title="Win % (Day)" dataKey="Win %(Day)" color="#ff7300" windowWidth={windowWidth}  />
                </div>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <Table />
            </div>
        </div>
    );
}

export default MainContent;

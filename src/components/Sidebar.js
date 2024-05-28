import React, { useState } from 'react';
import image from "./imageunfluke.jpeg"
const Sidebar = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isImageHovered, setIsImageHovered] = useState(false);

    const handleMouseEnter = (index) => {
        setHoveredItem(index);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };
    const handleImageMouseEnter = () => {
        setIsImageHovered(true);
    };

    const handleImageMouseLeave = () => {
        setIsImageHovered(false);
    };

    const items = [
        'Dashboard',
        'Exchange',
        'Prices',
        'Wallets',
        'Promotions',
        'Activities',
        'Notifications',
        'Settings'
    ];

    return (
        <div className="sidebar" style={styles.sidebar}>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <img style={{
                    ...styles.heading,
                    transform: isImageHovered ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.3s'
                }} src={image} alt='' onMouseEnter={handleImageMouseEnter}
                    onMouseLeave={handleImageMouseLeave}></img>
            </div>
            <ul style={styles.list}>
                {items.map((item, index) => (
                    <li
                        key={index}
                        style={{
                            ...styles.listItem,
                            color: hoveredItem === index ? '#85FE61' : 'white',
                            backgroundColor: hoveredItem === index ? '#3a3a4f' : 'transparent',
                            transform: hoveredItem === index ? 'scale(1.01)' : 'scale(1)',
                            transition: 'transform 0.3s, color 0.3s, background-color 0.3s',

                        }}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

const styles = {
    sidebar: {
        width: '250px',
        backgroundColor: '#060430',
        color: 'white',
        paddingTop: "70px",
    },
    heading: {
        height: "50px",
        borderRadius: "7px",
        marginBottom: "20px"
    },
    list: {
        listStyle: 'none',
        padding: 0,
    },
    listItem: {
        padding: '10px 0',
        paddingLeft: "20px",
        cursor: 'pointer',
        transition: 'color 0.3s, background-color 0.3s',
        fontSize: "17px",
        height: "35px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
};

export default Sidebar;

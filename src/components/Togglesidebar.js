import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import image from "./imageunfluke.jpeg";

const Togglesidebar = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMouseEnter = (index) => {
        setHoveredItem(index);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
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
        <>
            <FaBars
                style={{
                    color: 'white',
                    fontSize: '1.5rem',
                    display: !sidebarOpen ? 'block' : 'none',
                    position: 'absolute',
                    top: windowWidth > 700 ? "38.5px" : windowWidth > 420 ? "33.5px" : "23px",
                    left: '30px',
                    cursor: 'pointer',
                }}
                onClick={toggleSidebar}
            />

            <div
                className="sidebar"
                style={{
                    width: '250px',
                    backgroundColor: '#060430',
                    color: 'white',
                    paddingTop: '90px',
                    position: 'fixed',
                    height: '100%',
                    left: sidebarOpen ? '0' : '-250px',
                    transition: 'left 0.3s ease',
                    zIndex: '4'
                }}
            >
                <FaBars
                    style={{
                        color: 'white',
                        fontSize: '1.5rem',
                        display: sidebarOpen ? 'block' : 'none',
                        position: 'absolute',
                        top: windowWidth > 700 ? "38.5px" : windowWidth > 420 ? "33.5px" : "23px",
                        right: '20px',
                        cursor: 'pointer',
                    }}
                    onClick={toggleSidebar}
                />
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <img style={{
                        height: "50px",
                        borderRadius: "7px",
                        marginBottom: "20px"
                    }} src={image} alt=''></img>
                </div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {items.map((item, index) => (
                        <li
                            key={index}
                            style={{
                                padding: '10px 0',
                                paddingLeft: "20px",
                                cursor: 'pointer',
                                transition: 'color 0.3s, background-color 0.3s',
                                fontSize: "17px",
                                height: "35px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                color: hoveredItem === index ? '#85FE61' : 'white',
                                backgroundColor: hoveredItem === index ? '#3a3a4f' : 'transparent',
                                transform: hoveredItem === index ? 'scale(1.01)' : 'scale(1)',
                            }}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Togglesidebar;

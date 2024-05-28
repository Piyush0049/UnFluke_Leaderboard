import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
const Header = () => {
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
        <div style={{
            display: 'flex',
            justifyContent: windowWidth > 700 ? 'space-between' : "end",
            alignItems: 'center',
            paddingTop : '10px',
            paddingBottom: '10px',
            paddingLeft : windowWidth > 1040 ? "10px" : "70px",
            paddingRight : "20px",
            background: 'linear-gradient(to right, #00B2FF, #82E88D)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            marginBottom: '20px'}}>
            {windowWidth > 700 &&
            (
                <motion.input 
                type="text" 
                placeholder="Search here..." 
                style={styles.searchInput}
                whileFocus={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            />
            )}
            
            <motion.div 
                style={styles.profile} 
                whileHover={{ scale: 1.12 }} 
                transition={{ duration: 0.2 }}
            >
                <i className="fa-solid fa-user" style={{fontSize: '16px', fontWeight: 'bold', color: '#333', padding : "7px"}}></i>
                <span style={styles.profileName}>Piyush Joshi</span>
            </motion.div>
        </div>
    );
}

const styles = {
    searchInput: {
        width: '25%',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ced4da',
        outline: 'none',
        fontSize: '16px',
        transition: 'all 0.3s ease',
    },
    profile: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
    },
    profilePic: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        marginRight: '10px',
        objectFit: 'cover',
    },
    profileName: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#333',
    },
};

export default Header;

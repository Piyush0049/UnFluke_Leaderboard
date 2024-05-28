import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Togglesidebar from './components/Togglesidebar';

function App() {
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
    <Router>
      {windowWidth < 1040 && <Togglesidebar />}
      <div className="main-wrapper" style={{display: "flex"}}>
        {windowWidth > 1040 && <Sidebar />}
        <div className="content-wrapper" style={{flex: 1, padding : windowWidth > 420 ? "20px" : "8px"}}>
          <Header />
          <Routes>
            <Route path="/" element={<MainContent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

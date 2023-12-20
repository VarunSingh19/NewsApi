import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeslaNewsComponent from './News/TeslaNewsComponent';
import HomePage from './component/homepage/Homepage';
import NewsNavbar from './component/navbar/Navbar';
import AppleNewsComponent from './News/AppleNewsComponent';
import TechNewsComponent from './News/TechNewsComponent';
import BusinessNewsComponent from './News/BusinessNewsComponent';

function App() {
    return (
        <Router>
            <>
                <NewsNavbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/tesla-news" element={<TeslaNewsComponent />} />
            <Route path="/apple-news" element={<AppleNewsComponent />} />
            <Route path="/tech-news" element={<TechNewsComponent />} />
            <Route path="/business-news" element={<BusinessNewsComponent/>} />
                </Routes>
            </>
        </Router>
    );
}

export default App;

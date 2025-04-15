import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import Cookies from './components/Cookies';
// import Help from './pages/Help';
// import CookieConsent from './components/CookieConsent';

function App() {
  const [showCookieConsent, setShowCookieConsent] = React.useState(true);
  
  React.useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent) {
      setShowCookieConsent(false);
    }
  }, []);
  
  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieConsent(false);
  };
  
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/cookies" element={<Cookies />} />
              {/* <Route path="/help" element={<Help />} /> */}
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        {/* {showCookieConsent && <CookieConsent onAccept={handleAcceptCookies} />} */}
      </div>
    </Router>
  );
}

export default App;
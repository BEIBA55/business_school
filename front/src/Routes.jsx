import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';

// Import page components
import Homepage from './pages/Homepage';
import MainPage from './pages/MainPage';
import Schedule from './pages/Schedule';
import ExecutiveMBA from './pages/ProgramPage/ExecutiveMBA';
import MBA from './pages/ProgramPage/MBA';
import Accreditations from './pages/Accreditations';
import Partners from './pages/Partners';

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<MainPage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/programs/executive-mba" element={<ExecutiveMBA />} />
        <Route path="/programs/mba" element={<MBA />} />
        <Route path="/accreditations" element={<Accreditations />} />
        <Route path="/partners" element={<Partners />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
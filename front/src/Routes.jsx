import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import Homepage from './pages/Homepage';
import MainPage from './pages/MainPage';
import Schedule from './pages/Schedule';
import ExecutiveMBA from './pages/ProgramPage/ExecutiveMBA';
import MBA from './pages/ProgramPage/MBA';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<MainPage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/programs/executive-mba" element={<ExecutiveMBA />} />
        <Route path="/programs/mba" element={<MBA />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
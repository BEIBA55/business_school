import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';

// Import page components
import Homepage from './pages/Homepage';
import MainPage from './pages/MainPage';
import Schedule from './pages/Schedule';
import ExecutiveMBA from './pages/ProgramPage/ExecutiveMBA';
import MBA from './pages/ProgramPage/MBA';
import DBA from './pages/ProgramPage/DBA';
import Magistracy from './pages/ProgramPage/Magistracy';
import ExecutiveEducation from './pages/ProgramPage/ExecutiveEducation';
import Accreditations from './pages/Accreditations';
import Partners from './pages/Partners';
import Faculty from './pages/Faculty';
import Administration from './pages/Administration';
import SupportNBS from './pages/SupportNBS';
import News from './pages/News';
import Graduates from './pages/Graduates';

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
        <Route path="/programs/dba" element={<DBA />} />
        <Route path="/programs/magistracy" element={<Magistracy />} />
        <Route path="/programs/executive-education" element={<ExecutiveEducation />} />
        <Route path="/accreditations" element={<Accreditations />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="/support" element={<SupportNBS />} />
        <Route path="/news" element={<News />} />
        <Route path="/graduates" element={<Graduates />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
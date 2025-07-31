import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';

// Import page components
import Homepage from './pages/Homepage';
import MainPage from './pages/MainPage';
import Schedule from './pages/Schedule';
import EventRegistration from './pages/EventRegistration';
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
import NewsDetail from './pages/News/NewsDetail';
import Graduates from './pages/Graduates';
import Library from './pages/Library';
import SearchResults from './pages/SearchResults';

// Import new program pages
import MBAFinance from './pages/ProgramPage/MBAFinance';
import MBASustainability from './pages/ProgramPage/MBASustainability';
import MBAAI from './pages/ProgramPage/MBAAI';
import MBACreative from './pages/ProgramPage/MBACreative';
import MBAFinTech from './pages/ProgramPage/MBAFinTech';
import ExecutiveMBANGO from './pages/ProgramPage/ExecutiveMBANGO';
import ExecutiveMBACIO from './pages/ProgramPage/ExecutiveMBACIO';
import MScFinance from './pages/ProgramPage/MScFinance';
import CorporateClients from './pages/CorporateClients';

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<MainPage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/events/register/:eventId" element={<EventRegistration />} />
        <Route path="/programs/executive-mba" element={<ExecutiveMBA />} />
        <Route path="/programs/mba" element={<MBA />} />
        <Route path="/programs/dba" element={<DBA />} />
        <Route path="/programs/magistracy" element={<Magistracy />} />
        <Route path="/programs/executive-education" element={<ExecutiveEducation />} />
        
        {/* New program routes */}
        <Route path="/programs/mba-finance" element={<MBAFinance />} />
        <Route path="/programs/mba-sustainability" element={<MBASustainability />} />
        <Route path="/programs/mba-ai" element={<MBAAI />} />
        <Route path="/programs/mba-creative" element={<MBACreative />} />
        <Route path="/programs/mba-fintech" element={<MBAFinTech />} />
        <Route path="/programs/executive-mba-ngo" element={<ExecutiveMBANGO />} />
        <Route path="/programs/executive-mba-cio" element={<ExecutiveMBACIO />} />
        <Route path="/programs/msc-finance" element={<MScFinance />} />
        <Route path="/accreditations" element={<Accreditations />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="/support" element={<SupportNBS />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/graduates" element={<Graduates />} />
        <Route path="/library" element={<Library />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/corporate-clients" element={<CorporateClients />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

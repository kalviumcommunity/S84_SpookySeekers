import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import GhostSightingPage from './pages/GhostSightingPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path="/ghost-sighting" element={<GhostSightingPage />} />
    </Routes>
);
}

export default App;
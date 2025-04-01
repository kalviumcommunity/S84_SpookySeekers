import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import EntitiesListPage from './pages/EntitiesListPage';
import GhostSightingPage from './pages/GhostSightingPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path="/posts" element={<GhostSightingPage />} />
      <Route path="/entities" element={<EntitiesListPage />} />
    </Routes>
);
}

export default App;
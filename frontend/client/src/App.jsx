import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import EntitiesListPage from './pages/EntitiesListPage';
import GhostSightingPage from './pages/GhostSightingPage';
import AddEntityPage from './pages/AddEntityPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import SignupPage from './pages/SignUpPage';
import GhostDetector from './pages/GhostDetector';

function handleEntityAdded() {
  console.log("Entity added successfully!");
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/home' element={<HomePage/>} />
      <Route path="/posts" element={<GhostSightingPage />} />
      <Route path="/entities" element={<EntitiesListPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/detector" element={<GhostDetector />} />
      <Route path='/add-entity' element={<AddEntityPage onEntityAdded={handleEntityAdded}/>}/>
    </Routes>
);
}

export default App;
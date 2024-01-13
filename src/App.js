import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import contentData from './contents.json';
import Header from './components/Header.react';
import Footer from './components/Footer.react';
import HeroSection from './components/HeroSection.react';
import Playground from './components/Playground.react'; // Import your Playground component
import SplitSection from './components/sections/SplitSection.react';
import InteractiveCanvas from './components/InteractiveCanvas.react';
import EPKSection from './components/sections/EPKSection.react';
import ShaderComponent from './components/ShaderComponent.react';
import TeamPage from './components/TeamPage.react';
import { useState } from 'react';
import './App.css';

function App() {
  const { homePage } = contentData;

  // For Energy Beam
  const [startPos, setStartPos] = useState({ x: 100, y: 100 }); // Example positions
  const [endPos, setEndPos] = useState({ x: 300, y: 300 });

  return (
    <Router>
      <InteractiveCanvas />
      <div style={{ position: 'relative' }}>
        <Header logoText={homePage.header.logoText} navigation={homePage.header.navigation} />
        <Routes>
          <Route path="/" element={
          <>
          <HeroSection 
            bannerText={homePage.heroSection.text} 
            aboutTitle={homePage.heroSection.title} 
            aboutText={homePage.heroSection.text} 
          />
          <SplitSection 
            leftContent={<TeamPage/>}
            rightContent={<img src="https://static.vecteezy.com/system/resources/previews/013/446/248/original/digital-technology-music-note-melody-song-sheet-banner-blue-pink-background-sound-sing-media-key-abstract-tech-innovation-future-orange-color-big-data-ai-network-connection-illustration-vector.jpg" alt="Descriptive Alt Text" />}
          />  
          </>
          } 
          />
          <Route path="/playground" element={<Playground />} />
          <Route path='/about' element={
            <EPKSection />
          } />
          <Route path='/services' element={
            <ShaderComponent />
          } />
          <Route path='/team' element={
            <TeamPage />
          } />
          {/* Add more Routes for other pages as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import './App.css';
import Header from './components/Header/Header.react';
import GoodAtStuff from './components/GoodAtStuff/GoodAtStuff.react';
import ProjectPage from './components/ProjectPage/ProjectPage.react';
import Hero from './components/Hero/Hero.react';

function App() {

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="app">
      <Header />
      <Hero />
        <div className="main-content">
          <GoodAtStuff />
          <ProjectPage />
        </div>
        {/* Other components */}
    </div>
);
}

export default App;
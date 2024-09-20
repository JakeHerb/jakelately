import React from 'react';
import './App.css';
import Header from './components/Header/Header.react';
import GoodAtStuff from './components/GoodAtStuff/GoodAtStuff.react';
import About from './pages/About/About.react';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage.react';
import Contact from './pages/Contact/Contact.react';
import Hero from './components/Hero/Hero.react';
import Footer from './components/Footer/Footer.react';
import ProjectDetail from './pages/ProjectsPage/ProjectDetail.react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch

// import OpenAI from 'openai';
import ThreeJSProject from './pages/ProjectsPage/ProjectCard/ThreeJSProject/ThreeJSProject.react';
import SpotiFindProject from './pages/ProjectsPage/ProjectCard/SpotiFindProject/SpotiFindProject';


// const openai = new OpenAI({
//   apiKey: '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',
//   dangerouslyAllowBrowser: true,
// });


// async function chatGPT() {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: "system", content: "You are a helpful assistant. Please write me a song" }],
//     model: "gpt-3.5-turbo",
//   });

//   console.log(completion);
// }

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes> {/* Use Routes here */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/ThreeJS" element={<ThreeJSProject />} /> 
          <Route path="/projects/SpotiFind" element={<SpotiFindProject />} /> 
          <Route path="/projects/:projectId" element={<ProjectDetail />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<>
            <Hero />
            <GoodAtStuff />
            {/* Include any other components that make up your main landing page */}
          </>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
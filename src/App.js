import React from 'react';
import './App.css';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Header from './components/Header/Header.react';
import Hero from './components/Hero/Hero.react';
import Signal from './components/Signal/Signal.react';
import Stack from './components/Stack/Stack.react';
import FeaturedWork from './components/FeaturedWork/FeaturedWork.react';
import LatestPosts from './components/LatestPosts/LatestPosts.react';
import CallToAction from './components/CallToAction/CallToAction.react';
import Footer from './components/Footer/Footer.react';
import About from './pages/About/About.react';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage.react';
import Contact from './pages/Contact/Contact.react';
import ProjectDetail from './pages/ProjectsPage/ProjectDetail.react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TesseractPlayground from './pages/ProjectsPage/TesseractPlayground/TesseractPlayground.react';
import ActivationDetail from './pages/ProjectsPage/ActivationDetail/ActivationDetail.react';
import ComponentShowcase from './pages/ComponentShowcase/ComponentShowcase.react';
import NowPage from './pages/NowPage/NowPage.react';
import UsesPage from './pages/UsesPage/UsesPage.react';
import BlogPage from './pages/BlogPage/BlogPage.react';
import BlogPost from './pages/BlogPost/BlogPost.react';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/component-showcase" element={<ComponentShowcase />} />
          <Route path="/projects/3D" element={<TesseractPlayground />} />
          <Route path="/projects/f1-trackside" element={<ActivationDetail />} />
          <Route path="/projects/ufc-barbershop" element={<ActivationDetail />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/now" element={<NowPage />} />
          <Route path="/uses" element={<UsesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          <Route path="/" element={
            <>
              <Hero />
              <Signal />
              <Stack />
              <FeaturedWork />
              <LatestPosts />
              <CallToAction />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

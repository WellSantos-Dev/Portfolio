import React from 'react';
import './global.styles.css'

// Import components
import { Header } from './components/Header';
import { Home } from './components/Home'
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
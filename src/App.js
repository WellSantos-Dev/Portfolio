import React from 'react';
import './global.styles.css'

// Import components
import { Header } from './components/Header';
import { Home } from './components/Home'
import { Experience } from './components/Experience';
import { Formacao } from './components/Formacao'
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="experiencia">
        <Experience />
      </div>
      <div id="formacao">
        <Formacao />
      </div>
      <Footer />
    </>
  );
}

export default App;
import React from 'react';
import './global.styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import components
import { Main } from './components/Main';
import { Projetos } from './components/Projetos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
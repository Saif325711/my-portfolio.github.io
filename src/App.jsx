import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SummarySection from './components/SummarySection';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SummarySection />
    </div>
  );
}

export default App;

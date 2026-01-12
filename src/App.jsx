import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SummarySection from './components/SummarySection';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SummarySection />
      <Footer />
    </div>
  );
}

export default App;

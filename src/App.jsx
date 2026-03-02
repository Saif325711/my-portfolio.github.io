import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SummarySection from './components/SummarySection';
import About from './components/About';
import Blogs from './components/Blogs';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
// AdminDashboard removed
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <SummarySection />
              <Footer />
            </>
          } />
          <Route path="/blogs" element={
            <>
              <Navbar />
              <Blogs />
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Navbar />
              <ContactPage />
              <Footer />
            </>
          } />
          {/* Admin route removed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


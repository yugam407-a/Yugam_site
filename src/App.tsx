import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { WhatsAppFloat } from './components/WhatsAppFloat';

// Pages
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Ventures } from './pages/Ventures';
import { About } from './pages/About';
import { Reviews } from './pages/Reviews';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';

export const App: React.FC = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans antialiased selection:bg-indigo-500 selection:text-white">
        {/* Automatic scroll reset on route change */}
        <ScrollToTop />

        {/* Global Sticky Glassmorphic Navbar */}
        <Navbar />

        {/* Page Content Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ventures" element={<Ventures />} />
            <Route path="/about" element={<About />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            {/* Catch-all fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Persistent Floating WhatsApp Quick-Connect */}
        <WhatsAppFloat />
      </div>
    </Router>
  );
};

export default App;

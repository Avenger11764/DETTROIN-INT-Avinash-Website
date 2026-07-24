import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Gallery from './pages/Gallery';
import SchoolLife from './pages/SchoolLife';
import Contact from './pages/Contact';

// Ultra-Reliable Scroll Observer Component
const ScrollObserver = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const observerOptions = {
      threshold: 0.02, // Trigger immediately when even 2% is visible
      rootMargin: '50px 0px 100px 0px', // Pre-trigger 50px before entering viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const initObserver = () => {
      const selectors = '.reveal, .reveal-drop, .reveal-left, .reveal-right, .reveal-fade, .reveal-zoom';
      const elements = document.querySelectorAll(selectors);
      elements.forEach((el) => {
        // If element is near top or top of page, activate immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('active');
        }
        observer.observe(el);
      });
    };

    // Run init immediately and after small delay for React DOM mount completion
    initObserver();
    const timer = setTimeout(initObserver, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [location.pathname]);

  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <ScrollObserver>
        <div className="min-h-screen flex flex-col bg-background text-on-background relative">
          {/* Global Cursor Responsive Constellation Network */}
          <ParticleBackground />

          <Navbar />
          <main className="flex-grow w-full relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/school-life" element={<SchoolLife />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ScrollObserver>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PrizesSection from './components/PrizesSection';
import JudgesSection from './components/JudgesSection';
import SponsorsSection from './components/SponsorsSection';
import TimelineSection from './components/TimelineSection';
import FooterSection from './components/FooterSection';

// Menu items
const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'Judges', href: '#judges' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'Timeline', href: '#timeline' },
];

// Variants for mobile menu animation
const mobileMenuVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: '100%', transition: { duration: 0.3 } },
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-darkBg">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-darkBg/80 backdrop-blur-md p-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-neonPink">HACKATHON.DEV</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-neonBlue hover:text-neonPink transition"
              >
                {item.label}
              </a>
            ))}
            {/* <button className="bg-neonPink text-darkBg px-4 py-2 rounded-full hover:bg-neonBlue transition">
              Contact Us
            </button> */}
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-neonBlue">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-darkBg/95 z-40 flex flex-col items-center justify-center md:hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={toggleMenu}
                  className="text-neonBlue hover:text-neonPink transition text-2xl py-4"
                >
                  {item.label}
                </a>
              ))}
              {/* <button
                onClick={toggleMenu}
                className="bg-neonPink text-darkBg px-6 py-3 rounded-full text-lg font-semibold hover:bg-neonBlue transition mt-4"
              >
                Contact Us
              </button> */}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Page Content */}
        <div className="pt-16">
          <section id="home"><HeroSection /></section>
          <section id="about"><AboutSection /></section>
          <section id="prizes"><PrizesSection /></section>
          <section id="judges"><JudgesSection /></section>
          <section id="sponsors"><SponsorsSection /></section>
          <section id="timeline"><TimelineSection /></section>
          <FooterSection />
        </div>
      </div>
    </Router>
  );
}

export default App;

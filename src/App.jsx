import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PrizesSection from './components/PrizesSection';
import JudgesSection from './components/JudgesSection';
import SponsorsSection from './components/SponsorsSection';
import TimelineSection from './components/TimelineSection';
import FooterSection from './components/FooterSection';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <div className="min-h-screen bg-darkBg">
          <nav className="fixed top-0 w-full z-50 bg-darkBg/80 backdrop-blur-md p-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-neonPink">HACKATHON.DEV</div>
            <div className="space-x-6 text-neonBlue">
              <a href="#home" className="hover:text-neonPink transition">Home</a>
              <a href="#about" className="hover:text-neonPink transition">About</a>
              <a href="#prizes" className="hover:text-neonPink transition">Prizes</a>
              <a href="#judges" className="hover:text-neonPink transition">Judges</a>
              <a href="#sponsors" className="hover:text-neonPink transition">Sponsors</a>
              <a href="#timeline" className="hover:text-neonPink transition">Timeline</a>
            </div>
          </nav>

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
    </ParallaxProvider>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Hackathons from './pages/Hackathons';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <>
      <div className="fixed inset-0 -z-30 bg-bg-primary">
         <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(123, 66, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 85% 30%, rgba(0, 210, 255, 0.1) 0%, transparent 50%)' }}></div>
      </div>
      
      {/* <CustomCursor /> */}
      {/* Interactive Particle Animation */}
      <ParticlesBackground />

      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-2]">
        <div className="absolute top-[0%] left-[-10%] w-[600px] h-[600px] bg-accent-primary/10 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent-secondary/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Hackathons />
        <Certificates />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => setLoading(false), 2000);

    // Scroll progress tracking
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="h-screen bg-gray-900 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-blue-400 text-4xl font-mono"
        >
          LOADING...
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Balaji R | Full Stack Developer, Linux Enthusiast, Open Source | Portfolio</title>
        <meta name="description" content="Balaji R - Full Stack Developer, Linux Enthusiast, and Open Source Contributor. Explore my projects, skills, and professional journey. Available for collaboration and opportunities." />
        <meta name="keywords" content="Balaji R, Full Stack Developer, Linux, MERN, React, Node.js, Open Source, Portfolio, Web Developer, Software Engineer, GSSoC, Kalvium, Mysore" />
        <meta name="author" content="Balaji R" />
        <meta property="og:title" content="Balaji R | Full Stack Developer Portfolio" />
        <meta property="og:description" content="Portfolio of Balaji R - Full Stack Developer, Linux Enthusiast, and Open Source Contributor." />
        <meta property="og:image" content="https://balajirkb.me/b.svg" />
        <meta property="og:url" content="https://balajirkb.me/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Balaji R | Full Stack Developer Portfolio" />
        <meta name="twitter:description" content="Portfolio of Balaji R - Full Stack Developer, Linux Enthusiast, and Open Source Contributor." />
        <meta name="twitter:image" content="https://balajirkb.me/b.svg" />
        <link rel="icon" type="image/svg" href="/b.svg" />
      </Helmet>
      
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress">
        <motion.div 
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="min-h-screen bg-gray-900">
        <Navigation />
        <main>
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;

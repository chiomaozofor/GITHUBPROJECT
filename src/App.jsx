import React, { useEffect, useRef } from 'react';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import FooterBottom from './Components/Footerbottom/Footerbottom';






function App() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sectionsRef.current.forEach(section => {
      observer.observe(section);
    });

    return () => {
      if (sectionsRef.current) {
        sectionsRef.current.forEach(section => observer.unobserve(section));
      }
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <section ref={el => sectionsRef.current[0] = el}>
        <Hero />
      </section>
      <section ref={el => sectionsRef.current[1] = el}>
        <Features />
      </section>
    <Footer/>
    <FooterBottom/>
      
    </div>
  );
}

export default App;
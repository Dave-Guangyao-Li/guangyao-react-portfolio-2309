import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
// import Services from './components/Services';
// import Tours from './components/Tours';
import ResumePDF from './components/ResumePDF'; // Import the ResumePDF component
import Projects from './components/Projects';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      {/* <Services /> */}
      <ResumePDF />
      {/* <Tours /> */}
      <Projects projectsPerPage={3} />
      <Footer />
    </React.Fragment>
  );
}

export default App;

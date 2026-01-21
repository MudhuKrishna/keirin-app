import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseKeirin from './components/WhyChooseKeirin';
import Industries from './components/Industries';
import Gaming from './components/Gaming';
import Insights from './components/Insights';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseKeirin />
      <Industries />
      <Gaming />
      <Insights />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

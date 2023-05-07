import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Thesis from './components/Thesis';

const styles = {
  background: '#B6C454',
  color: '#465775',
  fontSize: '2rem'
}

function App() {
  return (
    <Router>
      <div className="App" style={styles}>
        <Header />
        <Routes>
          <Route exact path="/" component={AboutMe} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/thesis" element={<Thesis />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
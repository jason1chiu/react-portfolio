import React from "react";
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
    </div>
  );
}

export default App;
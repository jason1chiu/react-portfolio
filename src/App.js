import React from "react";
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Portfolio />
    </div>
  );
}

export default App;
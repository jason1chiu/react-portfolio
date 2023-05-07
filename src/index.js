// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Import the App component from the App.js file
import App from './App';

// Import the Bootstrap CSS stylesheet and JavaScript bundle
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Render the App component to the DOM
ReactDOM.render(<App />, document.getElementById('root'));
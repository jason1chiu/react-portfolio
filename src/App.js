// Import React and useState hook
import React, { useState } from 'react';

// Import the BrowserRouter component from React Router
import { BrowserRouter as Router } from 'react-router-dom';

// Import custom components
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

// Define a styles object for inline styles
const styles = {
  background: '#D8D174',
  color: '#465775',
  fontSize: '2rem',
};

// Define the App component
function App() {
  // Use state to keep track of the current page
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // Define a function to handle page changes
  const handlePageChange = (page) => setCurrentPage(page);

  // Define a function to render the appropriate page based on the current state
  const renderPage = () => {
    switch (currentPage) {
      case 'AboutMe':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  // Render the App component with React Router
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App" style={styles}>
        <Header handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
      </div>
    </Router>
  );
}

// Export the App component as the default export
export default App;
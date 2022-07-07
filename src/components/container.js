import React, { useState } from 'react';
import NavTabs from './navtabs';
import Home from './pages/home';
import Hof from './pages/hof';
import Rotations from './pages/rotations';
import Services from './pages/services';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Hof') {
      return <Hof />;
    }
    if (currentPage === 'Rotations') {
      return <Rotations />;
    }
    return <Services />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}

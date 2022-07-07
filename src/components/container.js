import React, { useState } from 'react';
import NavTabs from './navtabs';
import Home from './pages/home';
import Hof from './pages/hof';
import Rotations from './pages/rotations';
import Services from './pages/services';

export default function Container() {
  const [currentPage, setCurrentPage] = useState('Home');

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
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

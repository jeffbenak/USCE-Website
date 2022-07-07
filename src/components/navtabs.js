import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#hof"
          onClick={() => handlePageChange('Hof')}
          className={currentPage === 'Hof' ? 'nav-link active' : 'nav-link'}
        >
          Hall of Fame
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#rotations"
          onClick={() => handlePageChange('Rotations')}
          className={currentPage === 'Rotations' ? 'nav-link active' : 'nav-link'}
        >
          Rotations
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#services"
          onClick={() => handlePageChange('Services')}
          className={currentPage === 'Services' ? 'nav-link active' : 'nav-link'}
        >
          Services
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link className='navbar-brand' to='/'>
        Pagination Handler
      </Link>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/handle-frontend'>
              FE Handler
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/handle-backend'>
              BE Handler
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

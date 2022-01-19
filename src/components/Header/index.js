import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <div className='header'>
      <a
        className="header__title"
        href="https://www.facebook.com/profile.php?id=100008428411040"
        target="_blank"
        rel="noopener noreferrer"
      >
        Photo App
      </a>
      <NavLink
        exact="true"
        className="header__link"
        to="/sign-in"
        activeclassname="header__link--active"
      >
        Sign In
      </NavLink>
    </div>
  );
}

export default Header;
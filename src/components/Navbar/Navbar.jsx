import React, { useState, useEffect } from 'react';

import { FaLaptopCode } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import Socials from '../Socials/Socials';
import { links } from './links';

import './Navbar.css';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    if (mobileMenu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [mobileMenu]);

  return (
    <>
      <nav className='navbar bg-color-1'>
        <a href='/' className='navbar-logo text-color'>
          <FaLaptopCode />
          <span>JR</span>
        </a>

        <ul className='navbar-links'>
          {links.map((link, index, external) => {
            return (
              <li key={index}>
                {external && (
                  <a className='text-color' href={link.url} target='_blank' rel='noreferrer'>
                    {link.text}
                  </a>
                )}

                {!external && (
                  <a className='text-color' href={link.url}>
                    {link.text}
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        <div className='navbar-socials text-color'>
          <Socials />
        </div>

        <button className='navbar-toggle text-color' onClick={toggleMobileMenu}>
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      <div className={`mobile-menu bg-color-1 ${mobileMenu && 'active'}`}>
        <ul className='mobile-menu-links'>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <a href={link.url} className='text-color'>
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;

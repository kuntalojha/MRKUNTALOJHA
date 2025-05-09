// Header.jsx
// Name: KUNTAL OJHA
// Date: 13-02-2025

// Node modules
import React, { useState } from 'react';

// Component
import Navbar from './Navbar';

// React Icons
import { IoMenu, IoClose } from 'react-icons/io5';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div>
      <header className='fixed top-0 left-0 w-full h-20 flex items-center  z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
        <div className='max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]'>
          <h1>
            <a href='/' className='logo'>
              <img src='./images/logo.png' width={40} height={40} alt='logo' />
            </a>
          </h1>

          <div className='relative md:justify-self-center'>
            <button
              className='menu-btn md:hidden'
              onClick={() => setNavOpen((prev) => !prev)}
            >
              {navOpen ? (
                <IoClose className='icon' />
              ) : (
                <IoMenu className='icon' />
              )}
            </button>
            <Navbar navOpen={navOpen} />
          </div>

          <a
            href='#contact'
            className='btn btn-secondary max-md:hidden md:justify-self-end'
          >
            Contact Me
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;

import React, { useState, useEffect } from 'react';
import { GitHubIcon, LinkedInIcon, CVIcon, EmailIcon } from './Icons';

import '../styles/Text.css'
import '../styles/Header.css'

function FixedHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [iconSize, setIconSize] = useState(50);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIconSize(window.innerWidth <= 650 ? 30 : 50); // Smaller icons for screens <= 600px
    };

    // Set the initial size correctly
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`fixed-header ${isScrolled ? 'scrolled' : 'not-scrolled'}`}>
      <nav>
        <a href="https://www.lovisasvensson.se/">
          <h2 className='text'>Lovisa Svensson</h2>
        </a>
      </nav>
      <nav className="icon-nav">
        <div style={iconStyle}>
            <GitHubIcon size={iconSize} />
            <LinkedInIcon size={iconSize} />
            <CVIcon size={iconSize} />
            <EmailIcon size={iconSize} />
          </div>
      </nav>
  </header>
  );
}

const iconStyle = {
  marginRight: '30px',
  display: 'flex',

  //width: '100%',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  gap: '30px',
}

export default FixedHeader;

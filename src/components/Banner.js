import React, { useState, useEffect } from 'react';

import '../styles/Text.css'
import '../styles/Icon.css'

import StarrySky from '../components/StarrySky.js'

import { GitHubIcon, LinkedInIcon, CVIcon, EmailIcon } from './Icons';

function Banner() {
  const [iconSize, setIconSize] = useState(70);

  useEffect(() => {
    const handleResize = () => {
      setIconSize(window.innerWidth <= 600 ? 30 : 70);
    };

    // Set the initial size correctly
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={containerStyle}>
      <StarrySky />
      <div>
        <h1 style={{color: '#DABAFF', textAlign: 'center', marginLeft: 0}}>Lovisa Svensson</h1>
        <h3 style={{textAlign: 'center', marginLeft: 0, color: '#DABAFF'}}>m.sc in media technology / civilingenjör i medieteknik</h3>

        <div style={iconStyle}>
          <GitHubIcon size={iconSize} />
          <LinkedInIcon size={iconSize} />
          <CVIcon size={iconSize} />
          <EmailIcon size={iconSize} />
        </div>
      </div>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  backgroundColor: '#332B48',
  color: '#DABAFF',
  width: '100%',
  height: '500px',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
}

const iconStyle = {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-evenly',
}

export default Banner;
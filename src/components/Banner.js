import React, { useState, useEffect } from 'react';

import '../styles/Text.css'
import '../styles/Icon.css'

import StarrySky from '../components/StarrySky.js'

import { GitHubIcon, LinkedInIcon, CVIcon, EmailIcon } from './Icons';

function Banner() {

  return (
    <div style={containerStyle}>
      <StarrySky />
      <div>
        <h1 style={{color: '#DABAFF'}}>Lovisa Svensson</h1>
        <h3 style={{textAlign: 'center', marginLeft: 0, color: '#DABAFF'}}>m.sc in media technology / civilingenjör i medieteknik</h3>

        <div style={iconStyle}>
          <GitHubIcon/>
          <LinkedInIcon/>
          <CVIcon/>
          <EmailIcon/>
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

/*

TO-DO
Show header background on scroll
Outside link to resume
LinkedIn, GitHub, Mail icons
Space background
Mobile friendly
Animated name that is also a link

*/

import React, { useState, useEffect } from 'react';
import WebFont from 'webfontloader';

import '../styles/Text.css'

function Header() {

    // Load fonts
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Kanit']
          }
        });
       }, []);

  return (
    <div style={containerStyle}>
        <h1>Lovisa Svensson</h1>
    </div>
  );
}

const containerStyle = {
    backgroundImage: `url(${
        process.env.PUBLIC_URL + "/images/forest.jpg"
    })`,
    width: '100%',
    fontFamily: 'Kanit',
}

export default Header;

import React, { useState, useEffect } from 'react';

import '../styles/Text.css'

function Banner() {

  return (
    <div style={containerStyle}>
      <div style={{marginLeft: '30px'}}>
        <h1>Lovisa Svensson</h1>
        <h3>m.sc in media technology / civilingenjör i medieteknik</h3>
      </div>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  backgroundColor: '#8977c9',
  width: '100%',
  // height: ?,
  height: '300px',
  alignItems: 'center',
}

export default Banner;
import React from 'react';
import './footer.css'
import logo from './Raspberry Pi.svg'

function Footer() {
  return (
    <div className='hosted-on-rpi-footer'>
      <h3>This application is hosted on a</h3>
      <a href="https://www.raspberrypi.com/"> <img src={logo} /></a>
    </div>
  );
}

export default Footer;
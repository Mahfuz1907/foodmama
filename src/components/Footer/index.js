import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { Button } from '@mui/material';

const Footer = () => {
  return (
    <>
         <footer className='container-fixed'>
  <div class="footer-content">
    <p>Copyright 2024. All rights reserved</p>
    <div class="social-icons">
      <a href="https://www.facebook.com/?_rdc=1&_rdr#_=_"><Button><FaFacebook /></Button></a>
      <a href="https://twitter.com/mahfuzth1907"><Button><BsTwitterX /></Button></a>
      <a href="tel:+8801580569928"><Button><FaPhoneAlt /></Button></a>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer;
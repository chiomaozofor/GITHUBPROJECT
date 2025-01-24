import React from 'react'
import './Footerbottom.css'
import { FaLinkedin, FaInstagram, FaYoutube, FaTiktok, FaTwitch } from 'react-icons/fa';
const FooterBottom = () => {
  return (
    <div>
      <div className="footer-bottom">
        <p>© 2025 GitHub, Inc. &nbsp;
          <a href="#">Terms</a> &nbsp; | &nbsp; 
          <a href="#">Privacy</a> &nbsp; | &nbsp; 
          <a href="#">Sitemap</a> &nbsp; | &nbsp; 
          <a href="#">What is Git?</a> &nbsp; | &nbsp; 
          <a href="#">Manage cookies</a> &nbsp; | &nbsp; 
          <a href="#">Do not share my personal information</a>
        </p>
        <div className="social-icons">
          <FaLinkedin size={20}/>
          <FaInstagram size={20}/>
          <FaYoutube size={20}/>
          <FaTiktok size={20}/>
          <FaTwitch size={20}/>
        </div>
      </div>
    </div>
  )
}

export default FooterBottom
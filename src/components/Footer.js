import React from 'react';
import { Link } from 'react-router-dom';
import './css/home.css';
const Footer = () => {
  return (
    <div>
      <div className='footer'>
                <div className='left'>
                    <Link className='d-flex align-items-center my-2' to="/aboutus"><p>About Us</p></Link>
                    <p><Link to="/contact">Contact Us</Link></p>
                    <p>Privacy Policy</p>
                </div>
            </div>
    </div>
  )
}

export default Footer

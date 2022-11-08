import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './css/home.css';
const Footer = () => {

  return (
    <div>
      <div className='footer'>
                <div className='left'>
                    <p><a className='' href="/aboutus">About Us</a></p>
                    <p><Link to="/contact">Contact Us</Link></p>
                    <p>Privacy Policy</p>
                </div>
            </div>
    </div>
  )
}

export default Footer

import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';


export const FooterPage = () => {
  return (
    <div className="footer">
      <div className="footer-logo text-center mt-4">
        <img src='/assets/scanget.png' alt='getapp' className="img-fluid" />
      </div>

      <div className='cities text-center mt-4'>
        <h2>Major Cities Using Our Food delivery services</h2>
        <button className="city-btn">Hyderabad</button>
        <button className="city-btn">Bangalore</button>
        <button className="city-btn">Mumbai</button>
        <button className="city-btn">Chennai</button>
        <button className="city-btn">Vizag</button>
        <button className="city-btn">Delhi</button>
      </div>

      <div className='footer-links text-left mt-4'>
        <div className='footer-links-wrapper'>
          <div className='footer-links-column'>
            <ul>
              <li>About Us</li>
              <li>Career</li>
              <li>Help and Contact</li>
              <li>Partner With Us</li>
            </ul>
          </div>
          <div className='footer-links-column'>
            <ul>
              <li>Ride With Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy & Policy</li>
              <li>Team</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='social-icons text-center mt-4'>
        <div className="social-icon">
          <FaInstagram size={50} color="orangered" />
        </div>
        <div className="social-icon">
          <FaLinkedin size={50} color="blue" />
        </div>
        <div className="social-icon">
          <FaFacebook size={50} color="blue" />
        </div>
        <div className="social-icon">
          <FaYoutube size={50} color="red" />
        </div>
      </div>
    </div>
  );
};

export default FooterPage;

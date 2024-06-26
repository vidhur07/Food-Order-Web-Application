import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer_content">
        <div className="footer_content_left">
            <img src={assets.logo} alt="" />
            <p> BiteBuddy is your trusted companion for discovering and ordering delicious meals from your favorite local restaurants. We are dedicated to providing a seamless and enjoyable food ordering experience. If you have any questions, feedback, or need support, please contact us at support@bitebuddy.com. Follow us on social media for the latest updates, exclusive deals, and mouth-watering inspirations!</p>
            <div className="footer_social_icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer_content_center">
            <h2>COMPANY </h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer_content_right">
            <h2>CONNECT TODAY</h2>
            <ul>
                <li>+12 444-2323-789</li>
                <li>bitebuddy@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer_copyright">Copyright 2024 © BiteBuddy.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer

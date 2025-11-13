import React from 'react'
import Logo from '../../assets/logo.png';
import { PiPaperPlaneRightBold } from 'react-icons/pi';
import { FaMapMarkedAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { footerLinks } from '../../Data';
import ScrollLink from '../link/ScrollLink';
import { Link } from 'react-scroll';
import { animateScroll } from 'react-scroll';

import './footer.css';

const Footer = () => {

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <footer className='footer section'>
      <div className="footer-container container grid">
        <div className='spaces'>
          <Link to="/" onClick={scrollTop} className="footer-logo">
            <img src={Logo} alt="" className="footer-logo-img" />
          </Link>

          <p className="footer-description">Amicci es una cocina oculta que combina sabor artesanal y tradición italiana. Elaboramos pizzas con ingredientes frescos, 
            ideales para compartir y disfrutar una experiencia auténtica y deliciosa.
          </p>

          <p className="footer-newsletter">Unete a nuestro canal</p>

          <form action="" className="footer-form">
            <FaEnvelope className='footer-form-icon' />

            <input type="email" placeholder='Tu email' className="footer-input" />

            <button className="footer-button button">
              Únete <PiPaperPlaneRightBold className='button-icon'/>
            </button>
          </form>
        </div>

        <div className="footer-group grid">
          <div>
            <h3 className="footer-title">Links</h3>

            <ul className="footer-links grid">
              {footerLinks.map((footerLink, index) => {
                return (
                  <li className="footer-item" key={index}>
                    <ScrollLink 
                      to={footerLink} 
                      name={footerLink} 
                      className="footer-link"
                    />
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Horario de apertura</h3>

            <ul className="footer-opening grid">

              <li className="opening-item">
                <span>Jueves</span>
                <span>18:00 PM - 23:00 PM</span>
              </li>

              <li className="opening-item">
                <span>Viernes</span>
                <span>18:00 PM - 23:00 PM</span>
              </li>

              <li className="opening-item">
                <span>Sábado</span>
                <span>18:00 PM - 23:00 PM</span>
              </li>

              <li className="opening-item">
                <span>Domingo</span>
                <span>17:00 PM - 22:00 PM</span>
              </li>

              <li className="opening-item">
                <span>Féstivos</span>
                <span>18:00 PM - 21:00 PM</span>
              </li>

              <li className="opening-item">
                <span>Lun - Mar - Mie</span>
                <span className='closed'>Cerrado</span>
              </li>

            </ul>
          </div>

          <div>
            <h3 className="footer-title">Contactanos</h3>

            <div className="footer-contact grid">

              <div className="footer-item">
                <span className="footer-icon">
                  <FaMapMarkedAlt/>
                </span>

                <div>
                  <h3 className="footer-subtitle">Nuestra ubicación</h3>
                  <p className="footer-info">San Gil - Santander</p>
                </div>
              </div>
            </div>

            <div className="footer-contact grid">

              <div className="footer-item">
                <span className="footer-icon">
                  <FaPhoneAlt/>
                </span>

                <div>
                  <h3 className="footer-subtitle">Llamanos</h3>
                  <p className="footer-info">+57 321 9498792</p>
                </div>
              </div>
            </div>

            <div className="footer-contact grid">

              <div className="footer-item">
                <span className="footer-icon">
                  <FaEnvelope/>
                </span>

                <div>
                  <h3 className="footer-subtitle">Email</h3>
                  <p className="footer-info">amicciRestobar@gmail.com</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <span className="footer-copy"> 
          &#169; Copyright 2025 <span className='closed'>Amicci</span> All Rights Reserved. 
        </span>

        <div className="footer-socials">
          <a href="https://www.facebook.com/profile.php?id=61582410467167" target='_blank' className="footer-social-link">
            <FaFacebookF/>
          </a>

          <a href="https://www.instagram.com/amicci.p?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank' className="footer-social-link">
            <FaInstagram/>
          </a>

          <a href="https://www.linkedin.com/in/teatinJuan" target='_blank' className="footer-social-link">
            <FaLinkedinIn/>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
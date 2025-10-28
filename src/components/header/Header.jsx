import Logo from '../../assets/logo.png';
import { navLinks } from '../../Data';
import ScrollLink from '../link/ScrollLink';
import { FaCircleArrowRight } from "react-icons/fa6";
import { CgMenuLeft } from "react-icons/cg";

import "./header.css";
import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='/' className='nav-logo'>
          <img src={Logo} alt="" className='nav-logo-img' />
        </a>

        <div className="nav-menu">
          <ul className="nav-list">
            {navLinks.map((navLink, index) =>{
              return(
                <li className="nav-item" key={index}>
                  <ScrollLink 
                    to={navLink} 
                    name={navLink} 
                    className="nav-link"
                  />
                </li>
              )
            })}
          </ul>
        </div>

        <div className="nav-buttons">
          <ScrollLink 
            to='reservation' 
            name='Reserva' 
            className="button"
            icon={<FaCircleArrowRight className='button-icon' />}
          />

          <CgMenuLeft className='nav-toggler' />
        </div>

      </nav>
    </header>
  )
}

export default Header
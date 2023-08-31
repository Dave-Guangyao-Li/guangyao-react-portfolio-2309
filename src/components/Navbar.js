// import logo from '../images/logo.svg'
// import logo from '../images/personal/Free SVG Logo 6 (by FreeLogo.me).svg'
import logo from '../images/personal/logo.png'
import { pageLinks, socialLinks } from '../data'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'
import React, { useState } from 'react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    // <nav className='navbar'>
    <nav className={`navbar ${isMenuOpen ? 'show-menu' : ''}`}>
      {/* Backdrop for closing the menu */}
      <div className={`menu-backdrop ${isMenuOpen ? 'show-menu' : ''}`} onClick={closeMenu}></div>
      <div className='nav-center'>
        <div className='nav-header'>
          <img
            src={logo}
            className='nav-logo'
            alt='backroads'
            style={{ width: '6rem', height: 'auto' }} />
          <button
            type='button'
            className='nav-toggle'
            id='nav-toggle'
            onClick={toggleMenu}>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}

        {/* <PageLinks parentClass='nav-links' itemClass='nav-link' /> */}
        {/* <PageLinks parentClass={`nav-links ${isMenuOpen ? 'show-menu' : ''}`} itemClass='nav-link' /> */}
        <PageLinks parentClass={`nav-links ${isMenuOpen ? 'popup-menu' : ''}`} itemClass='nav-link' closeMenu={closeMenu} />

        <ul className='nav-icons'>
          {socialLinks.map((link) => {
            return <SocialLink {...link} key={link.id} itemClass='nav-icon' />
          })}
        </ul>
      </div>
    </nav >
  )
}
export default Navbar

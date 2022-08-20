import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="alexandria__navbar">
      <div className="alexandria__navbar-links">
        <div className="alexandria__navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="alexandria__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#whatsalexandria">What is Alexandria?</a></p>
          <p><a href="#possibility">A Whole New World</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Blog</a></p>
        </div>
      </div>
      <div className="alexandria__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="alexandria__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="alexandria__navbar-menu_container scale-up-center">
          <div className="alexandria__navbar-menu_container-links">
          <p><a href="#home">Home</a></p>
          <p><a href="#whatsalexandria">What is Alexandria?</a></p>
          <p><a href="#possibility">A Whole New World</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Blog</a></p>
          </div>
          <div className="alexandria__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
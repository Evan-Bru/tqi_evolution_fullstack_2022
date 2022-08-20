import React from 'react';
import people from '../../assets/people.png';
import pile from '../../assets/pile.png';
import './header.css';

const Header = () => (
  <div className="alexandria__header section__padding" id="home">
    <div className="alexandria__header-content">
      <h1 className="gradient__text">Discover new worlds just a few steps away</h1>
      <p>Here at the Library of Alexandria, our focus is on knowledge, on making you able to expand your collection, acquire new copies, discover new worlds, new ways of thinking, and finally feel complete.</p>

      <div className="alexandria__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Join us now</button>
      </div>

      <div className="alexandria__header-content__people">
        <img src={people} alt="people"/>
        <p>1,300,00 people visits in the last 24 hours</p>
      </div>
    </div>

    <div className="alexandria__header-image">
      <img src={pile} alt="pile"/>
    </div>
  </div>
);

export default Header;
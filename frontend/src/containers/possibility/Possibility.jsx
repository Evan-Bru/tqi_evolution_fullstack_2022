import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="alexandria__possibility section__padding" id="possibility">
    <div className="alexandria__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="alexandria__possibility-content">
      <h4>Reading is Good</h4>
      <h1 className="gradient__text">Come and <br /> free your imagination</h1>
      <p>Visit all your Favorite Universes, Have New Perspectives and Passions, Here is the Place for All your Needs.</p>
      <h4>Discover our Catalog</h4>
    </div>
  </div>
);

export default Possibility;
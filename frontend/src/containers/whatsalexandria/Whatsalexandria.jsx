import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatsalexandria.css';
import { Outlet, Link } from "react-router-dom";


const whatsalexandria = () => (
  <div className="alexandria__whatsalexandria section__margin" id="whatsalexandria">
    <div className="alexandria__whatsalexandria-feature">
      <Feature title="What is Alexandria Library" text="All of humanity was devastated when one of their greatest sources of knowledge was destroyed, but now you have access to it again. The Alexandria Library gives you access to thousands of volumes, many of which many thought no longer existed, with affordable prices for all tastes." />
    </div>
    <div className="alexandria__whatsalexandria-heading">
      <h1 className="gradient__text">You can't even imagine all the possibilities.</h1>
      <p>Explore the Unknow</p>
    </div>
    <div className="alexandria__whatsalexandria-container">
      <nav>
      <Link to="/Sales"><Feature title="Buy Right Now" text="Try your New Adventure Right Now" /></Link>
      <Link to="/Company"><Feature title="Access the Employees Area" text="Just Keep it in Secret" /></Link>
      </nav>
      <Outlet />
    </div>
  </div>
);

export default whatsalexandria;
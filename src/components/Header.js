import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';

const Header = () => (
  <div className="header">
    <div className="logo-div">
      <img src={planet} alt="space" className="logo-image" />
      <h1>Space Travelers hub</h1>
    </div>
    <nav className="navbar">
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="/missions">Missions</NavLink>
      <NavLink to="/myprofile">MyProfile</NavLink>
    </nav>
  </div>
);

export default Header;

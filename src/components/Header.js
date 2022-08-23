import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <h1>Space Travelers hub</h1>
    <nav className="navbar">
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="/missions">Missions</NavLink>
      <NavLink to="/myprofile">MyProfile</NavLink>
    </nav>
  </div>
);

export default Header;

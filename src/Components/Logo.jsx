import React from "react";
import { NavLink } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <NavLink to="/" className="logo-container">
      <div className="logo-text">
        <span className="logo-name">Prathamesh Walekar</span>
      </div>
    </NavLink>
  );
};

export default Logo;

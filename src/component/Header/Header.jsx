import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/Orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;

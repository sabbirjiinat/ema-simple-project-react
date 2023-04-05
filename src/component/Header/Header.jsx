import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="" />
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/Orders"
        >
          Orders
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/inventory"
        >
          Inventory
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/login"
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;

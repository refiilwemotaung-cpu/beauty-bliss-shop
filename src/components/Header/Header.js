import React from "react";
import { useCart } from "../../contexts/CartContext";
//import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Header.css";

const Header = () => {
  const { getTotalItems } = useCart();

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">💄 Beauty Bliss</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <button className="cart-icon">
            🛒 <span className="cart-count">{getTotalItems()}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { useCart } from "../../contexts/CartContext";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Header.css";

const Header = () => {
  const { getTotalItems, openCart } = useCart();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">💄 Beauty Bliss</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("products");
                }}
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
              >
                About
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <button className="cart-icon" onClick={openCart}>
            🛒 <span className="cart-count">{getTotalItems()}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

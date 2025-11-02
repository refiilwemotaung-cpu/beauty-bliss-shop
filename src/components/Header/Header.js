import React from "react";
import { useCart } from "../../contexts/CartContext";
import { useActiveSection } from "../../hooks/useActiveSection";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Header.css";

const Header = () => {
  const { getTotalItems, openCart } = useCart();
  const activeSection = useActiveSection();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = document.querySelector(".header").offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
    window.history.pushState(null, "", `#${sectionId}`);
  };

  const isActive = (section) => activeSection === section;

  return (
    <header className="header">
      <div className="container">
        <h1
          className="logo"
          onClick={(e) => handleNavClick(e, "home")}
          style={{ cursor: "pointer" }}
        >
          💄 Beauty Bliss
        </h1>
        <nav>
          <ul className="nav-links">
            <li>
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
                className={`nav-link ${isActive("home") ? "active" : ""}`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={(e) => handleNavClick(e, "products")}
                className={`nav-link ${isActive("products") ? "active" : ""}`}
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
                className={`nav-link ${isActive("about") ? "active" : ""}`}
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

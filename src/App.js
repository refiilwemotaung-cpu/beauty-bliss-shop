import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CartProvider } from "./contexts/CartContext";
import Header from "./components/Header/Header";
import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import ProductGallery from "./components/ProductGallery/ProductGallery";
import ProductList from "./components/ProductList/ProductList";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import { products } from "./data/products";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className="App">
          <Header />
          <main>
            <section id="home">
              <HeroCarousel />
              <ProductGallery />
            </section>
            <ProductList products={products} />
            <About />
          </main>
          <Cart />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;

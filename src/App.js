import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CartProvider } from "./contexts/CartContext";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import { products } from "./data/products";
//import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className="App">
          <Header />
          <main>
            <ProductList products={products} />
          </main>
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;

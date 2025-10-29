import React from "react";
import { useCart } from "../../contexts/CartContext";
import "./Cart.css";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    isCartOpen,
    closeCart,
    clearCart,
  } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
    }).format(price);
  };

  if (!isCartOpen) return null;

  return (
    <div className="cart-overlay" onClick={closeCart}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Shopping Cart</h2>
          <button className="close-btn" onClick={closeCart}>
            ×
          </button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-emoji">🛒</div>
              <p>Your cart is empty</p>
              <button className="continue-shopping" onClick={closeCart}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">{item.image}</div>
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <p className="item-price">{formatPrice(item.price)}</p>
                      <div className="quantity-controls">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="quantity-btn"
                        >
                          −
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="quantity-btn"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="remove-btn"
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="subtotal">
                  <span>Subtotal:</span>
                  <span>{formatPrice(getTotalPrice())}</span>
                </div>
                <div className="shipping">
                  <span>Shipping:</span>
                  <span>
                    {getTotalPrice() > 500 ? "FREE" : formatPrice(50)}
                  </span>
                </div>
                <div className="total">
                  <span>Total:</span>
                  <span>
                    {formatPrice(
                      getTotalPrice() + (getTotalPrice() > 500 ? 0 : 50)
                    )}
                  </span>
                </div>

                {getTotalPrice() < 500 && (
                  <p className="free-shipping-note">
                    Add {formatPrice(500 - getTotalPrice())} more for free
                    shipping! 🚚
                  </p>
                )}

                <div className="cart-actions">
                  <button className="clear-cart" onClick={clearCart}>
                    Clear Cart
                  </button>
                  <button className="checkout-btn">Proceed to Checkout</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

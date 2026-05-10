// App.js

import React, { useState } from "react";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Headphones",
      price: "₹1,999",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "₹2,499",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 3,
      name: "Laptop",
      price: "₹59,999",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 4,
      name: "Gaming Mouse",
      price: "₹1,299",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Add To Cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove From Cart
  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter(
      (_, index) => index !== indexToRemove
    );

    setCart(updatedCart);
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h1>Amazon Web Project</h1>

        <input type="text" placeholder="Search products..." />

        <button
          className="cart-btn"
          onClick={() => setShowCart(!showCart)}
        >
          Cart ({cart.length})
        </button>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h2>Welcome to Amazon Shopping Experience</h2>

        <p>
          Discover Amazing Deals, Trending Products & Smart Shopping
        </p>
      </div>

      {/* Product Section */}
      <h2 className="heading">Featured Products</h2>

      <div className="products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p className="price">{product.price}</p>

            <p className="rating">{product.rating}</p>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Panel */}
      {showCart && (
        <div className="cart-panel">
          <h2>Your Cart</h2>

          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.name} />

                <div className="cart-details">
                  <h4>{item.name}</h4>

                  <p>{item.price}</p>

                  <p>{item.rating}</p>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Footer */}
      <footer>
        <p>© 2026 Amazon Web Project | Built Using React JS</p>
      </footer>
    </div>
  );
}

export default App;
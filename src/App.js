import React, { useState } from "react";
import "./App.css";

function App() {
  const products = [
    { id: 1, name: "Headphones", price: "₹1,999", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e", rating: "⭐⭐⭐⭐⭐" },
    { id: 2, name: "Smart Watch", price: "₹2,499", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30", rating: "⭐⭐⭐⭐⭐" },
    { id: 3, name: "Laptop", price: "₹59,999", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853", rating: "⭐⭐⭐⭐⭐" },
    { id: 4, name: "Gaming Mouse", price: "₹1,299", image: "https://images.unsplash.com/photo-1527814050087-3793815479db", rating: "⭐⭐⭐⭐⭐" },

    { id: 5, name: "Keyboard", price: "₹3,499", image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae", rating: "⭐⭐⭐⭐⭐" },
    { id: 6, name: "Smartphone", price: "₹19,999", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9", rating: "⭐⭐⭐⭐⭐" },
    { id: 7, name: "Tablet", price: "₹14,999", image: "https://images.unsplash.com/photo-1587033411391-5d9e51cce126", rating: "⭐⭐⭐⭐⭐" },
    { id: 8, name: "Camera", price: "₹34,999", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32", rating: "⭐⭐⭐⭐⭐" },

    { id: 9, name: "Power Bank", price: "₹1,299", image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0", rating: "⭐⭐⭐⭐⭐" },
    { id: 10, name: "Speaker", price: "₹2,199", image: "https://images.unsplash.com/photo-1589003077984-894e133dabab", rating: "⭐⭐⭐⭐⭐" },
    { id: 11, name: "Laptop Stand", price: "₹999", image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04", rating: "⭐⭐⭐⭐⭐" },
    { id: 12, name: "Fitness Band", price: "₹1,499", image: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558", rating: "⭐⭐⭐⭐⭐" },
  ];

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [user, setUser] = useState("");
  const [tempName, setTempName] = useState("");
  const [location, setLocation] = useState("India");
  const [search, setSearch] = useState("");

  const addToCart = (p) => setCart([...cart, p]);
  const removeFromCart = (i) =>
    setCart(cart.filter((_, index) => index !== i));

  const login = () => {
    if (tempName.trim()) {
      setUser(tempName);
      setTempName("");
    }
  };

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="nav-left">
          <h1 className="logo">amazon<span>.in</span></h1>

          <div className="location">
            📍
            <div>
              <small>Deliver to</small>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
              </select>
            </div>
          </div>
        </div>

        <div className="nav-search">
          <input
            placeholder="Search Amazon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>🔍</button>
        </div>

        <div className="nav-right">

          {user ? (
            <div className="user-box">👤 {user}</div>
          ) : (
            <div className="login-box">
              <input
                placeholder="Name"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
              />
              <button className="signin-btn" onClick={login}>
                Sign In
              </button>
            </div>
          )}

          <button className="cart-btn" onClick={() => setShowCart(true)}>
            🛒 Cart ({cart.length})
          </button>

        </div>
      </nav>

      {/* HERO */}
      <div className="hero">
        <h2>👋 Welcome to Amazon Shopping</h2>
        <p>Best Deals • Fast Delivery • Lowest Prices</p>
      </div>

      {/* PRODUCTS */}
      <div className="section-title">🛍️ Recommended Products</div>

      <div className="products">
        {filtered.map((p) => (
          <div className="card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p className="rating">{p.rating}</p>
            <p className="price">{p.price}</p>
            <button className="add-btn" onClick={() => addToCart(p)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* CART */}
      {showCart && (
        <div className="cart-panel">

          <button
            className="close-cart"
            onClick={() => setShowCart(false)}
          >
            ✖
          </button>

          <h2>Your Cart ({cart.length})</h2>

          {cart.length === 0 ? (
            <p className="empty">Cart is empty</p>
          ) : (
            <div className="cart-list">
              {cart.map((c, i) => (
                <div className="cart-item" key={i}>
                  <img src={c.image} alt={c.name} />

                  <div className="cart-info">
                    <h4>{c.name}</h4>
                    <p>{c.price}</p>

                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(i)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      )}

      {/* FOOTER */}
      <footer>
        © 2026 Amazon Web Page | React Project
      </footer>

    </div>
  );
}

export default App;
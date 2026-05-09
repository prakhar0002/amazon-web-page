import './App.css';

function App() {

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "₹1,999",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "₹2,499",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500"
    },
    {
      id: 3,
      name: "Laptop",
      price: "₹54,999",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
    }
  ];

  return (
    <div>

      <nav className="navbar">
        <h2>Amazon Web Project</h2>

        <input
          type="text"
          placeholder="Search products..."
          className="search"
        />

        <button className="cart-btn">Cart</button>
      </nav>

      <div className="banner">
        <h1>Welcome to Amazon Shopping</h1>
        <p>Best Deals Available Here</p>
      </div>

      <div className="products">

        {products.map((product) => (

          <div className="card" key={product.id}>

            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>{product.price}</p>

            <button>Add to Cart</button>

          </div>

        ))}

      </div>

      <footer className="footer">
        <p>© 2026 Amazon Clone Project</p>
      </footer>

    </div>
  );
}

export default App;
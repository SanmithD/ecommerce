import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';

function App() {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f3f4f6'
    }}>
      <Navbar user={user} />
      <div style={{
        maxWidth: '100%',
        margin: '0 auto',
        padding: '0 1rem',
        '@media (min-width: 640px)': {
          padding: '0 2rem'
        }
      }}>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
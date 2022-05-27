import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';

import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Products from './component/Products';
import Product from './component/product';
import Error from './component/error';
import Cart from './component/cart';

function App() {
  return (
    <>
    

    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Error/>} />
    </Routes>

  </>
  );
}

export default App;

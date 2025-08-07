// import './App.css'
import { useState } from "react";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Swal from "sweetalert2";

function App() {
  const [cartItems, setCartItems] = useState([]);

const addToCart = (product) => {
  const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

  if (existingItemIndex !== -1) {
    const updatedCart = [...cartItems];
    updatedCart[existingItemIndex].quantity += 1;
    setCartItems(updatedCart);
    Swal.fire({
      title:  `¡Agregaste otra vez este producto al carrito!`,
      icon: "success",
      draggable: true
    });
  } else {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
     Swal.fire({
      title:  `¡Producto enviado al carrito!`,
      icon: "success",
      draggable: true
    });
  }
};


  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

const getTotalPrice = () => {
  return cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);
};

const updateQuantity = (id, newQuantity) => {
  const updatedCart = cartItems.map(item =>
    item.id === id ? { ...item, quantity: newQuantity } : item
  ).filter(item => item.quantity > 0);

  setCartItems(updatedCart);
};


  return (
    <>
      <Navigation cartCount={cartItems.length} total={getTotalPrice()} />

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route
          path="/carrito"
          element={
            <Cart cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />

          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

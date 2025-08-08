import './App.css'
import { useState } from "react";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { useTheme } from "./context/ThemeProvider";
import CartProvider from './context/CartProvider';


function App() {

   const { theme } = useTheme();

  return (
    <div className={theme === "light" ? "light-header" : "dark-header"}>
      <CartProvider>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/iniciar-sesion" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route
            path="/carrito"
            element={
              <Cart />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </CartProvider>
    </div>
  );
}

export default App;

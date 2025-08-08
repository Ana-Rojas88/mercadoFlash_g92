import { createContext, useState } from "react";
import Swal from "sweetalert2";

//Paso 1
export const CartContext = createContext();


//Paso 2
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += 1;
      setCartItems(updatedCart);
      Swal.fire({
        title: `¡Agregaste otra vez este producto al carrito!`,
        icon: "success",
        draggable: true,
      });
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      Swal.fire({
        title: `¡Producto enviado al carrito!`,
        icon: "success",
        draggable: true,
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
    const updatedCart = cartItems
      .map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
      .filter((item) => item.quantity > 0);

    setCartItems(updatedCart);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        getTotalPrice,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
import React from "react";
import { Container, Table, Button } from "react-bootstrap";

function Cart({ cartItems, updateQuantity, removeFromCart }) {
  const total = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <Container className="mt-4">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="me-2"
                    >
                      +
                    </Button>
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity === 1}
                        className="me-2"
                    >
                      -
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      m="2"
                      onClick={() => removeFromCart(index)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h4>Total a pagar: ${total}</h4>
        </>
      )}
    </Container>
  );
}

export default Cart;

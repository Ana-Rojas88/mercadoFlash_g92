import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import imgCart from "../assets/image/image.png";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const Navigation = () => {

  const {getTotalPrice, cartItems} = useContext(CartContext)
const total = getTotalPrice()

  return (
    <Navbar bg="dark" variant="dark">
      <Container className="justify-content-start">
        <Navbar.Brand>MercadoFlash</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className="nav-link text-light mx-2">Home</Link>
          <Link to="/iniciar-sesion" className="nav-link text-light mx-2">Iniciar sesión</Link>
          <Link to="/registro" className="nav-link text-light mx-2">Registrarse</Link>
          <Link to="/carrito" className="nav-link text-light mx-2">
            <img
              src={imgCart}
              alt="Carrito"
              width="24"
              height="24"
              style={{ marginRight: "6px" }}
            />
            <Badge bg="light" text="dark" className="me-2">{ cartItems.length}</Badge>
            <span style={{ color: '#fff' }}>Total: ${total}</span>
          </Link>
        </Nav>
         <ThemeToggle />
      </Container>
    </Navbar>
  );
};

export default Navigation;

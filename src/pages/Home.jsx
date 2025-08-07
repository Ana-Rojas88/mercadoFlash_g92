import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col, Spinner } from 'react-bootstrap';

function Home({ addToCart }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Productos</h2>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <Row>
          {productos.map(producto => (
            <Col key={producto.id} md={4} className="mb-4">
              <Card style={{padding:'1rem', width:'18rem'}}>
                <Card.Img variant="top" src={producto.image} height="200" style={{ objectFit: 'contain' }} />
                <Card.Body>
                  <Card.Title>{producto.title}</Card.Title>
                  <Card.Text>${producto.price}</Card.Text>
                  <Button variant="primary" onClick={() => addToCart(producto)}>
                    Añadir al carrito
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Home;

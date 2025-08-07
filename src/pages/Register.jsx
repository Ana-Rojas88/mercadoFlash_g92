import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
Swal.fire("Registro Exitoso");
    console.log('Datos del registro:', formData);
  };
  return (
   <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          <h2>Registro</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Ingresa tu nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="correo@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Repite la contraseña"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Registrarse
            </Button>
          </Form>
            <Link to="/iniciar-sesion"> ¿Ya tienes una cuenta? </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Register
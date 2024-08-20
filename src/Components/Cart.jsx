import { useState } from "react";
import { pizzas } from "./pizzas";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ListGroup,
  Table,
} from "react-bootstrap";

const Cart = () => {
  const [cart, setCart] = useState(
    pizzas.map((pizza) => ({ ...pizza, quantity: 0 }))
  );

  const incrementarQuantity = (index) => {
    const nuevoCart = [...cart];
    nuevoCart[index].quantity += 1;
    setCart(nuevoCart);
  };

  const disminuirQuantity = (index) => {
    const nuevoCart = [...cart];
    if (nuevoCart[index].quantity > 0) {
      nuevoCart[index].quantity -= 1;
      setCart(nuevoCart);
    }
  };

  const calcularTotal = () => {
    return cart.reduce(
      (total, pizza) => total + pizza.price * pizza.quantity,
      0
    );
  };

  const seleccionarPizzas = cart.filter((pizza) => pizza.quantity > 0);

  return (
    <Container className="mt-3 mb-3 text-center">
      <Row className="justify-content-center">
        <Col md={12}>
          <Card className="text-center">
            <Card.Header>
              <strong>Carrito de compras</strong>
            </Card.Header>
            <Row>
              <Col md={8}>
                <ListGroup variant="flush">
                  {cart.map((pizza, index) => (
                    <ListGroup.Item key={pizza.id}>
                      <Row className="align-items-center">
                        <Col md={3}>
                          <Card.Img src={pizza.img} alt={pizza.name} />
                        </Col>
                        <Col md={2}>
                          <h5>{pizza.name}</h5>
                          <p>
                            {pizza.price.toLocaleString("es-CL", {
                              style: "currency",
                              currency: "CLP",
                            })}
                          </p>
                        </Col>
                        <Col md={4}>
                          <Button
                            variant="primary"
                            onClick={() => disminuirQuantity(index)}
                          >
                            Quitar
                          </Button>
                          <span className="mx-2">{pizza.quantity}</span>
                          <Button
                            variant="success"
                            onClick={() => incrementarQuantity(index)}
                          >
                            Agregar
                          </Button>
                        </Col>
                        <Col md={3}>
                          <h5>Sub total:</h5>
                          <p>
                            {(pizza.price * pizza.quantity).toLocaleString(
                              "es-CL",
                              { style: "currency", currency: "CLP" }
                            )}
                          </p>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Card.Body>
        <br />
        <Card.Title className="mb-4">
          <span>Detalle de Pago</span>
        </Card.Title>
      </Card.Body>
      <Table bordered>
        <thead>
          <tr>
            <th>Cantidad</th>
            <th>Descripción</th>
            <th>Precio Unitario</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {seleccionarPizzas.map((pizza) => (
            <tr key={pizza.id}>
              <td>{pizza.quantity}</td>
              <td>{pizza.name}</td>
              <td>
                {pizza.price.toLocaleString("es-CL", {
                  style: "currency",
                  currency: "CLP",
                })}
              </td>
              <td>
                {(pizza.price * pizza.quantity).toLocaleString("es-CL", {
                  style: "currency",
                  currency: "CLP",
                })}
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="3" className="text-end">
              <strong>Total:</strong>
            </td>
            <td>
              <strong>
                {calcularTotal().toLocaleString("es-CL", {
                  style: "currency",
                  currency: "CLP",
                })}
              </strong>
            </td>
          </tr>
        </tbody>
      </Table>
      <Button variant="success" className="mt-3">
        Pagar
      </Button>
    </Container>
  );
};

export default Cart;

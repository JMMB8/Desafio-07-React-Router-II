import { useContext } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ListGroup,
  Table,
  Alert,
} from "react-bootstrap";
import usePizzaCart from "../hooks/usePizzaCart";
import { UserContext } from "../Context/UserContex";

const Cart = () => {
  const {
    cart,
    pizzas,
    incrementarQuantity,
    disminuirQuantity,
    calcularTotal,
  } = usePizzaCart();
  const { token } = useContext(UserContext);

  const getPizzaDetails = (pizzaId) => {
    return pizzas.find((pizza) => pizza.id === pizzaId);
  };
  if (cart.length === 0) {
    return (
      <Container className="mt-4">
        <Alert variant="info">El carrito esta vacío.</Alert>
      </Container>
    );
  }

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
                  {cart.map((cartItem, index) => {
                    const pizzaDetails = getPizzaDetails(cartItem.id);
                    return (
                      <ListGroup.Item key={cartItem.id}>
                        <Row className="align-items-center">
                          <Col md={3}>
                            <Card.Img
                              src={pizzaDetails?.img}
                              alt={pizzaDetails.name}
                            />
                          </Col>
                          <Col md={2}>
                            <h5>{pizzaDetails?.name}</h5>
                            <p>
                              {pizzaDetails?.price.toLocaleString("es-CL", {
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
                            <span className="mx-2">{cartItem.quantity}</span>
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
                              {(
                                pizzaDetails.price * cartItem.quantity
                              ).toLocaleString("es-CL", {
                                style: "currency",
                                currency: "CLP",
                              })}
                            </p>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    );
                  })}
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
          {cart.map((cartItem) => {
            const pizzaDetails = getPizzaDetails(cartItem.id);
            return (
              <tr key={cartItem.id}>
                <td>{cartItem.quantity}</td>
                <td>{pizzaDetails?.name}</td>
                <td>
                  {pizzaDetails?.price.toLocaleString("es-CL", {
                    style: "currency",
                    currency: "CLP",
                  })}
                </td>
                <td>
                  {(pizzaDetails.price * cartItem.quantity).toLocaleString(
                    "es-CL",
                    {
                      style: "currency",
                      currency: "CLP",
                    }
                  )}
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan="3" className="text-end">
              <strong>Total:</strong>
            </td>
            <td>
              <strong>
                {calcularTotal.toLocaleString("es-CL", {
                  style: "currency",
                  currency: "CLP",
                })}
              </strong>
            </td>
          </tr>
        </tbody>
      </Table>
      {!token && (
        <Alert variant="warning" className="mt-3">
          Debes iniciar sesión para proceder al pago.
        </Alert>
      )}
      <Button variant="success" className="mt-3" disabled={!token}>
        Pagar
      </Button>
    </Container>
  );
};

export default Cart;

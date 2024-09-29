import { Container, Row, Col, Alert } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../Context/UserContex";
import LoginForm from "../Components/LoginForm";

const LoginPage = () => {
  const { notification } = useContext(UserContext);

  return (
    <Container
      fluid
      className="p-3"
      style={{
        maxWidth: "70%",
        backgroundColor: "beige",
        margin: "10px auto",
        borderRadius: "10px",
        borderTop: "10px solid #333",
        borderBottom: "10px solid #333",
      }}
    >
      <Row>
        <Col md={4} className="d-none d-md-block">
          <img
            src="https://media.istockphoto.com/id/1442417585/es/foto/persona-recibiendo-un-pedazo-de-pizza-de-pepperoni-con-queso.jpg?s=612x612&w=0&k=20&c=Uk4fj96OIDxE4v2S5sRRXRY_gZ899_TE6jGD-T-TysI="
            alt="Decorative"
            style={{ width: "100%", height: "400px" }}
          />
        </Col>
        <Col md={8}>
          <h1>Regístrate</h1>
          <p>¿Ya tienes una cuenta?</p>
          {notification.message && (
            <Alert variant={notification.type}>{notification.message}</Alert>
          )}
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;

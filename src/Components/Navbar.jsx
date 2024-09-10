import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { formatNumber } from "../assets/scripts";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import lockopen from "../assets/img/lockOpen.png";
import lock from "../assets/img/lock.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function NavBar() {
  const { calcularTotal } = useContext(CartContext);
  const token = false;

  return (
    <Navbar expand="lg" bg="dark " data-bs-theme="dark">
      <Navbar.Brand
        style={{
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        Pizzeria Mamma Mia!
      </Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Button variant="outline-light" className="text-white me-2">
              <Link to="/" className="text-white ms-3 text-decoration-none">
                {" "}
                🍕Home
              </Link>
            </Button>
            <Button variant="outline-light" className="text-white me-2">
              <Link
                to="/registerPage"
                className="text-white ms-3 text-decoration-none"
              >
                🔐
                <image src={token ? lockopen : lock}></image>
                {token ? "Profile" : "Register"}
              </Link>
            </Button>
            <Button variant="outline-light" className="text-white me-2">
              {" "}
              <Link
                to="/LoginPage"
                className="text-white ms-3 text-decoration-none"
              >
                🔐
                <image src={token ? lockopen : lock}></image>
                {token ? "LogOut" : "Login"}
              </Link>
            </Button>{" "}
            <Button variant="outline-light" className="text-white me-2">
              <Link
                to="/Profile"
                className="text-white ms-3 text-decoration-none"
              >
                👤Profile
              </Link>
            </Button>
          </Nav>

          <Button
            variant="outline-light"
            className="text-primary mx-4 "
            style={{ whiteSpace: "nowrap" }}
          >
            {" "}
            <Link to="/cart" className="text-white ms-3 text-decoration-none">
              🛒Total:
              {calcularTotal.toLocaleString("es-CL", {
                style: "currency",
                currency: "CLP",
              })}
            </Link>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

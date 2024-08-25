import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { formatNumber } from "../assets/scripts";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import lockopen from "../assets/img/lockOpen.png";
import lock from "../assets/img/lock.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar() {
  const total = 25000;
  const token = false;

  return (
    <Navbar expand="lg" bg="dark " data-bs-theme="dark">
      <Navbar.Brand style={{
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  padding: '10px',
  borderRadius: '5px'
}}>Pizzeria Mamma Mia!</Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Button variant="outline-light" className="text-white me-2">
              🍕Home
            </Button>
            <Button variant="outline-light" className="text-white me-2">
              🔐
              <image src={token ? lockopen : lock}></image>
              {token ? "Profile" : "Register"}
            </Button>
            <Button variant="outline-light" className="text-white me-2">
              🔐
              <image src={token ? lockopen : lock}></image>
              {token ? "LogOut" : "Login"}
            </Button>{" "}
          </Nav>

          <Button
            variant="outline-light"
            className="text-primary mx-4"
            style={{ whiteSpace: "nowrap" }}
          >
            🛒Total:{formatNumber(total)}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

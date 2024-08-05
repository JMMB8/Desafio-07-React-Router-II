import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { formatNumber } from "../assets/scripts";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import lockopen from "../assets/img/lockOpen.png";
import lock from "../assets/img/lock.png";

function NavBar() {
  const total = 25000;
  const token = false;

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Pizzeria Mamma Mia!</Navbar.Brand>
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
      </Container>

      <Button
        variant="outline-light"
        className="text-primary mx-4"
        style={{ whiteSpace: "nowrap" }}
      >
        🛒Total:{formatNumber(total)}
      </Button>
    </Navbar>
  );
}

export default NavBar;

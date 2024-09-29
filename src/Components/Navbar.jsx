import {
  Container,
  Nav,
  Navbar,
  OverlayTrigger,
  Image,
  Tooltip,
} from "react-bootstrap";

import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context/UserContex";
import { CartContext } from "../Context/CartContext";

const NavbarApp = () => {
  const { calcularTotal } = useContext(CartContext);
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  const { token, logout } = useContext(UserContext);

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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="tooltip-home">Ir a la página principal</Tooltip>
              }
            >
              <NavLink
                to="/"
                className={`text-white ms-3 text-decoration-none ${setActiveClass}`}
              >
                🍕Home
              </NavLink>
            </OverlayTrigger>
            {token ? (
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-profile">Ver perfil</Tooltip>}
              >
                <NavLink
                  to="/profile"
                  className={`text-white ms-3 text-decoration-none ${setActiveClass}`}
                >
                  🔓Profile
                </NavLink>
              </OverlayTrigger>
            ) : (
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-login">Iniciar sesión</Tooltip>}
              >
                <NavLink
                  to="/loginPage"
                  className={`text-white ms-3 text-decoration-none ${setActiveClass}`}
                >
                  🔐Login
                </NavLink>
              </OverlayTrigger>
            )}
            {token ? (
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-logout">Cerrar sesión</Tooltip>}
              >
                <button onClick={logout} className="btn4">
                  🔒Logout
                </button>
              </OverlayTrigger>
            ) : (
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-register">Registrarse</Tooltip>}
              >
                <NavLink
                  to="/RegisterPage"
                  className={`text-white ms-3 text-decoration-none ${setActiveClass}`}
                >
                  🔐Register
                </NavLink>
              </OverlayTrigger>
            )}
          </Nav>
          <Nav>
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="tooltip-cart">Ver carrito de compras</Tooltip>
              }
            >
              <NavLink
                to="/cart"
                className={`text-white ms-3 text-decoration-none ${setActiveClass}`}
              >
                🛒Total:{" "}
                {calcularTotal.toLocaleString("es-CL", {
                  style: "currency",
                  currency: "CLP",
                })}
              </NavLink>
            </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarApp;

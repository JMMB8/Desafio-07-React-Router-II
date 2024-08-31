import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("success");

  const validarFormulario = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setMessage("Faltan campos");
      setVariant("danger");
      return false;
    }
    if (password.length < 6) {
      setMessage("El tamaño del password debe tener 6 caracteres o más");
      setVariant("danger");
      return false;
    }
    setMessage("Datos enviados");
    setVariant("success");
  };

  return (
    <Form className="formulario">
      <h1>Login</h1>
      {message && (
        <Alert variant={variant} onClose={() => setMessage("")} dismissible>
          {message}
        </Alert>
      )}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electronico </Form.Label>
        <h3>{email}</h3>
        <Form.Control
          type="email"
          placeholder="Ingresa tu correo"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Igresa tu contraseña"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>

      <Button
        variant="primary"
        type="submit"
        onClick={(e) => validarFormulario(e)}
      >
        Enviar
      </Button>
      <hr />
    </Form>
  );
};

export default LoginPage;

import { Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import Input from "./Input";

const FormularioDeAutenticacion = ({
  onSubmit,
  buttonText,
  showRepeatPassword,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  const isEmailValid = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = () => password.length >= 6;
  const doPasswordsMatch = () => password === repeatPassword;

  const validarDatos = async (e) => {
    e.preventDefault();

    if (
      !email.trim() ||
      !password.trim() ||
      !isEmailValid() ||
      !isPasswordValid() ||
      (showRepeatPassword && !doPasswordsMatch())
    ) {
      setError("Todos los campos son obligatorios y deben ser válidos.");
      return;
    }

    setError("");

    try {
      await onSubmit(email, password);
    } catch (error) {
      console.error("Error en la operación:", error);
      setError("Hubo un problema con la operación. Inténtalo más tarde.");
    }
  };

  return (
    <Form className="customForm" onSubmit={validarDatos}>
      <Input
        controlId="formBasicEmail"
        label="Correo *"
        type="email"
        placeholder="Ingresa tu correo"
        value={email}
        onChange={setEmail}
        isValid={isEmailValid}
        feedbackText="El correo no es válido."
        icon={faEnvelope}
      />
      <Input
        controlId="formBasicPassword"
        label="Contraseña *"
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={setPassword}
        isValid={isPasswordValid}
        feedbackText="La contraseña debe tener al menos 6 caracteres."
        icon={faLock}
      />
      {showRepeatPassword && (
        <Input
          controlId="formBasicRepeatPassword"
          label="Repite Contraseña *"
          type="password"
          placeholder="Repite la contraseña"
          value={repeatPassword}
          onChange={setRepeatPassword}
          isValid={doPasswordsMatch}
          feedbackText="Las contraseñas no coinciden."
          icon={faLock}
        />
      )}
      <Button
        type="submit"
        className="btn3"
        style={{ width: "100%", marginTop: "15px" }}
      >
        {buttonText}
      </Button>
      <div className="mt-3">
        {error && <Alert variant="danger">{error}</Alert>}
      </div>
    </Form>
  );
};

FormularioDeAutenticacion.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  showRepeatPassword: PropTypes.bool,
};

FormularioDeAutenticacion.defaultProps = {
  showRepeatPassword: false,
};

export default FormularioDeAutenticacion;

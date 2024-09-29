import React from "react";
import { useContext } from "react";
import { UserContext } from "../Context/UserContex";
import FormularioDeAutenticacion from "../Components/FormularioDeAutenticacion";

const RegisterForm = () => {
  const { register } = useContext(UserContext);

  return (
    <FormularioDeAutenticacion
      onSubmit={register}
      buttonText="Registrarse"
      showRepeatPassword={true}
    />
  );
};

export default RegisterForm;

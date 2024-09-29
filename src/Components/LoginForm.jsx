import { useContext } from "react";
import { UserContext } from "../Context/UserContex";
import FormularioDeAutenticacion from "../Components/FormularioDeAutenticacion";

const LoginForm = () => {
  const { login } = useContext(UserContext);

  return (
    <FormularioDeAutenticacion
      onSubmit={login}
      buttonText="Iniciar sesión"
      showRepeatPassword={false}
    />
  );
};

export default LoginForm;

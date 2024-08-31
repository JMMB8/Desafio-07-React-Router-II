import React from "react";
import { Button } from "react-bootstrap";

const Profile = () => {
  const handleLogout = () => {
    // Aquí iría la lógica para cerrar sesión
    console.log("Cerrar sesión");
  };
  return (
    <div className="profile-container"
      style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "4px" }}
    >
      <h2>Perfil del Usuario</h2>
      <p>Email: usuario@example.com</p>
      <Button
        variant="primary"
        type="submit"
        onClick={handleLogout}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Cerrar sesión
        </Button>
    </div>
  );
};

export default Profile;

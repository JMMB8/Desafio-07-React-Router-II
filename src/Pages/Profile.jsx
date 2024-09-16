import React from "react";
import { Button } from "react-bootstrap";
import { UserContext } from "../Context/UserContex";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const { logout } = useContext(UserContext);

  return (
    <div
      className="profile-container"
      style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "4px" }}
    >
      <h2>Perfil del Usuario</h2>
      <p>Email: usuario@example.com</p>

      <button onClick={logout} className="btn4">
        🔒Logout
      </button>
    </div>
  );
};

export default Profile;

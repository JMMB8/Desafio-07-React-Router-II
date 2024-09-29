import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContex";
import { useContext, useEffect } from "react";

const Profile = () => {
  const { userInfo, getUserInfo, logout } = useContext(UserContext);
  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  return (
    <Container
      className="mt-4 p-4 bg-light shadow-sm rounded"
      style={{ maxWidth: "700px" }}
    >
      <Row className="align-items-center">
        <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
          <Image
            src="https://media.istockphoto.com/id/1442417585/es/foto/persona-recibiendo-un-pedazo-de-pizza-de-pepperoni-con-queso.jpg?s=612x612&w=0&k=20&c=Uk4fj96OIDxE4v2S5sRRXRY_gZ899_TE6jGD-T-TysI="
            roundedCircle
            fluid
            className="profile-image"
            style={{ width: "150px", height: "150px" }}
          />
        </Col>
        <Col xs={12} md={8}>
          <h1>Bienvenido </h1>
          {userInfo ? (
            <>
              <h4>no hay nombre en el backend</h4>
              <p>
                <strong>Email:</strong> {userInfo.email}
              </p>
              <p>
                <strong>Username:</strong>{" "}
              </p>
              <p>
                <strong>Joined:</strong>{" "}
              </p>
            </>
          ) : (
            <p>Cargando información del usuario...</p>
          )}
          <div className="d-flex flex-column flex-sm-row mt-3">
            <button onClick={logout} className="btn4">
              🔒Logout
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;

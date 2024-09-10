import React from "react";
import CardPizza from "../Components/CardPizza";
import Header from "../Components/Header";
import { Col, Container, Alert, Spinner } from "react-bootstrap";
import usePizzaCart from "../hooks/usePizzaCart";

const Home = () => {
  const { pizzas, loading, error, agregarcarrito } = usePizzaCart();

  if (loading) {
    return (
      <Container className="mt-4 text-center">
        <Spinner animation="border">
          <output aria-live="polite" className="visually-hidden">
            Cargando...
          </output>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <>
      <Header></Header>
      <div className="pizzacontainer">
        {pizzas.map((pizza) => (
          <Col md={4} className="mb-4 d-flex" key={pizza.id}>
            <CardPizza
              id={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              agregarcarrito={() => agregarcarrito({ ...pizza, quantity: 1 })}
            ></CardPizza>
          </Col>
        ))}
      </div>
    </>
  );
};

export default Home;

import React from "react";
import { useState, useEffect } from "react";
import CardPizza from "../Components/CardPizza";
import Header from "../Components/Header";
// import { pizzas } from "./pizzas";
import { Col } from "react-bootstrap";

const Home = () => {
  const [pizzas, setPizas] = useState([]);
  const getPizzas = async () => {
    const response = await fetch("http://localhost:5000/api/pizzas");
    const pizzas = await response.json();
    setPizas(pizzas);
  };
  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <>
      <Header></Header>

      <div className="pizzacontainer">
        {pizzas.map((pizza) => (
          <Col md={4} className="mb-4 d-flex" key={pizza.id}>
            <CardPizza
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              picture={pizza.img}
            ></CardPizza>
          </Col>
        ))}
      </div>
    </>
  );
};

export default Home;

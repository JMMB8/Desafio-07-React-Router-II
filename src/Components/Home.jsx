import React from "react";

import CardPizza from "./CardPizza";
import Header from "./Header";
import { pizzas } from "./pizzas";
import { Col } from "react-bootstrap";

const Home = () => {
  
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

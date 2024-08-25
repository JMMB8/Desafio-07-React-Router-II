import React from "react";
import { useState, useEffect } from "react";
import CardPizza from "./CardPizza";
import { Col } from "react-bootstrap";

const Pizza = () => {
  const [pizza, setPizza] = useState({});
  const getPizza = async () => {
    const res = await fetch("http://localhost:5000/api/pizzas/p001");
    const pizza = await res.json();
    setPizza(pizza);
  };
  useEffect(() => {
    getPizza();
  }, []);

  return (
    <>
      <Col className=" pizzacontainer mb-4 d-flex">
        {Object.keys(pizza).length > 0 && (
          <CardPizza
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            picture={pizza.img}
            desc={pizza.desc}
          ></CardPizza>
        )}
      </Col>
    </>
  );
};

export default Pizza;

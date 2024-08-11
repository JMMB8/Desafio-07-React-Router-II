import React from "react";

import CardPizza from "./CardPizza";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header></Header>

      <div className="pizzacontainer">
        <CardPizza
          name="Napolitana"
          price={59500}
          ingredients={`mozzarella, tomates, jamón, orégano`}
          picture="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/UJQEGMANSJGG5CSZZ22TPK66DA.JPG"
        ></CardPizza>

        <CardPizza
          name="Española"
          price={69500}
          ingredients={`mozzarella, gorgonzola, parmesano, provolone`}
          picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjnx7Opml7a-KHhtQBJSOoxhBEhOuk4hOxWw&s"
        ></CardPizza>

        <CardPizza
          name="Pepperoni"
          price={69500}
          ingredients={`mozzarella, pepperoni, orégano`}
          picture="https://www.sortirambnens.com/wp-content/uploads/2019/02/pizza-de-peperoni.jpg"
        ></CardPizza>
      </div>
    </>
  );
};

export default Home;

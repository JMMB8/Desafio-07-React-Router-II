import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import CardPizza from "./Components/CardPizza";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home></Home>

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
      <Footer />
    </>
  );
}

export default App;

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { formatNumber } from "../assets/scripts";
import Button from "react-bootstrap/Button";

function CardPizza({   desc, name, price, ingredients, picture }) {
  return (
    <div className="PizzaContainer">
      <div>
        <Card style={{ width: "25rem" }} className="pizza">
          <Card.Img variant="top" src={picture} />
          <Card.Body>
            <Card.Title>Pizza {name}</Card.Title>
            <Card.Text className="items">
              Ingredientes: <br />
              <ul>
                {ingredients.map((ingredients) => (
                  <li key={ingredients}>🍕{ingredients}</li>
                ))}
              </ul>
            </Card.Text>
  <hr className="border border-warning" />
        {desc ? (
          <div>
            <Card.Text>{desc}</Card.Text>
          </div>
        ) : null}
          </Card.Body>
        
          
      
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              {" "}
              <b>Precio:{formatNumber(price)} </b>
            </ListGroup.Item>
          </ListGroup>

          <Card.Body className="d-flex justify-content-center" >

            <Button variant="dark">Añadir 🛒</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CardPizza;

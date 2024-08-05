import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { formatNumber } from "../assets/scripts";
import Button from "react-bootstrap/Button";

function CardPizza({ name, price, ingredients, picture }) {
  return (
    <div className="PizzaContainer">
      <div>
        <Card style={{ width: "25rem" }} className="pizza">
          <Card.Img variant="top" src={picture} />
          <Card.Body>
            <Card.Title>Pizza {name}</Card.Title>

            <Card.Text className="items">
              Ingredientes: <br />
              🍕 {ingredients}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              {" "}
              <b>Precio:{formatNumber(price)} </b>
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button variant="outline-dark" className="me-5">
              Ver más👀
            </Button>
            <Button variant="dark">Añadir 🛒</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CardPizza;

import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { PizzaContext } from "../Context/PizzaContext";

const usePizzaCart = () => {
  const {
    cart,
    incrementarQuantity,
    disminuirQuantity,
    calcularTotal,
    agregarCarrito,
  } = useContext(CartContext);
  const { pizzas, loading, error, getPizzaById } = useContext(PizzaContext);
  return {
    cart,
    pizzas,
    incrementarQuantity,
    disminuirQuantity,
    calcularTotal,
    loading,
    error,
    getPizzaById,
    agregarCarrito,
  };
};

export default usePizzaCart;

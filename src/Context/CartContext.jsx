import { createContext, useState, useMemo, useCallback } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarCarrito = useCallback((pizza) => {
    setCart((prevCart) => {
      const pizzaIndex = prevCart.findIndex((item) => item.id === pizza.id);
      if (pizzaIndex !== -1) {
        const newCart = [...prevCart];
        newCart[pizzaIndex].quantity += 1;
        return newCart;
      } else {
        return [...prevCart, { ...pizza, quantity: 1 }];
      }
    });
  }, []);
  const incrementarQuantity = useCallback((index) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart[index].quantity += 1;
      return newCart;
    });
  }, []);

  const disminuirQuantity = useCallback((index) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      if (newCart[index].quantity > 1) {
        newCart[index].quantity -= 1;
      } else {
        newCart.splice(index, 1);
      }
      return newCart;
    });
  }, []);

  const calcularTotal = useMemo(() => {
    return cart.reduce(
      (total, pizza) => total + pizza.price * pizza.quantity,
      0
    );
  }, [cart]);

  const value = useMemo(
    () => ({
      cart,
      agregarCarrito,
      incrementarQuantity,
      disminuirQuantity,
      calcularTotal,
    }),
    [
      cart,
      calcularTotal,
      agregarCarrito,
      incrementarQuantity,
      disminuirQuantity,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

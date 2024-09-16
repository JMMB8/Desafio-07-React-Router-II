import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Context/CartContext.jsx";
import { PizzaProvider } from "./Context/PizzaContext.jsx";
import { UserProvider } from "./Context/UserContex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <PizzaProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </PizzaProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

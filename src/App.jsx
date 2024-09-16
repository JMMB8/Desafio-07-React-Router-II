import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import CardPizza from "./Components/CardPizza";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import Pizza from "./Pages/Pizza";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./Pages/NotFound.jsx";
import Profile from "./Pages/Profile";
import { UserContext } from "./Context/UserContex.jsx";
import { useContext } from "react";

function App() {
  const { token } = useContext(UserContext);
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/registerPage"
          element={token ? <Navigate to="/" /> : <RegisterPage />}
        />
        <Route
          path="/loginPage"
          element={token ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route
          path="/Profile"
          element={token ? <Profile /> : <Navigate to="/loginPage" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

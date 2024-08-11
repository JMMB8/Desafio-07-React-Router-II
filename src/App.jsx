import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import CardPizza from "./Components/CardPizza";
import RegisterPage from "./Components/RegisterPage";
import LoginPage from "./Components/LoginPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      {/* <RegisterPage />*/}
       <LoginPage></LoginPage>
      {/* <Home></Home>*/}
      <Footer />
    </>
  );
}

export default App;

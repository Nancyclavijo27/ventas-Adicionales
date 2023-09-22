import React from "react";
import Narvar from "./components/Narvar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import './index.css'; // Importa tu hoja de estilos global


const App = () => {
  return (
    <div>
      <Narvar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;

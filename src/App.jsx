import React from "react";
import Narvar from "./components/Narvar";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="page">
      <Narvar />
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;

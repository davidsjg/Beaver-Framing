import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

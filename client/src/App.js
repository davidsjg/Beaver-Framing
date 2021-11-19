import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/Header/Header";
import Header2 from "./components/Header2/Header2";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Header2 />
      <Home />
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import Shop from "./App";

import "./styles.css";

function App() {
  /*const data = [
    {
      name: "product1",
      price: "30",
      url: "https://hello.world",
      quantity: "20",

    },
    {
      name: "product2",
      price: "20",
      url: "https://hello.mate",
      quantity: "40",

    
    },
    {
      name: "product3",
      price: "80",
      url: "https://hello.hello",
      quantity: "60",

     
    }
  ];
*/
  return (
    <div className="App">
      <Shop />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

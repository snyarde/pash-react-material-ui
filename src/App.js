import React, { Component } from "react";
import StockItems from "./Components/StockItems";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>PASH React Material UI</h1>
        <StockItems />
      </div>
    );
  }
}

export default App;

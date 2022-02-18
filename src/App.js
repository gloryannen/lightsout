import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App () {
  return (
    <div className="App">
      <h1>Lights<i>Out</i></h1>
      <Board ncols={ 5 } nrows={ 5 } chanceLightStartsOn={ .25 } />
    </div>
  );
}

export default App;

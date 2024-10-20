import React from "react";
import ReactDOM from "react-dom";
import LightContainer from "./components/LightContainer.jsx";

import "./index.css";

function App() {
  return (
    <div className="App">
      <LightContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


export default App

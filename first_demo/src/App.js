import React from "react";
import Main from "./components/Main";
import Main1 from "./components/Main1";

import "./App.css";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
function App() {
  return (
    <React.Fragment>
      <ClickCounter name="sahil" />
      <HoverCounter  />
    </React.Fragment>
  );
}

export default App;

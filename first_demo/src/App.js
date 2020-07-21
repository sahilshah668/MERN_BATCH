import React from "react";
import NewComponent from "./components/NewComponent";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

export default function App() {
  return (
    <div>
      {/* <NewComponent title="hello world" /> */}
      <ClickCounter name="sahil" />
      <HoverCounter />
    </div>
  );
}

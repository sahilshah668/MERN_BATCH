import React from "react";
import Tasks from "./components/Tasks";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/resuseable/Header";
import AddTasks from "./components/AddTasks";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/task" component={Tasks} />
      <Route exact path="/addtask" component={AddTasks} />
    </Router>
  );
}

export default App;

import React from "react";
import Tasks from "./components/Tasks";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/resuseable/Header";
import AddTasks from "./components/AddTasks";
import { Provider } from "./components/Context";

function App() {
  return (
    <Provider>
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/task" component={Tasks} />
        <Route exact path="/addtask" component={AddTasks} />
      </Router>
    </Provider>
  );
}

export default App;

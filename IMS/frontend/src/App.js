import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Register from "./Components/scripts/Auth/Register";
import Login from "./Components/scripts/Auth/Login";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Login} />
      </Router>
    </Provider>
  );
}

export default App;

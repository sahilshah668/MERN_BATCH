import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./Components/scripts/Auth/Register";
import Login from "./Components/scripts/Auth/Login";
import setAuthToken from "./Components/utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { onLoginSuccess } from "./Components/Redux/Authentication/AuthAction";
function App() {
  if (localStorage.getItem("jwtToken")) {
    let token = localStorage.getItem('jwtToken')
    setAuthToken(token);
    const decoded = jwt_decode(token);
    store.dispatch(onLoginSuccess(decoded));
  }
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

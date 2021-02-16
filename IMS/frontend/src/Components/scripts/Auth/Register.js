import React, { Component } from "react";
import { connect } from "react-redux";
import { onRegister } from "../../Redux/Authentication/AuthAction";
import { withRouter } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      branch: "",
      password: "",
    };
  }

  _onHandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  _onSubmit = () => {
    const { name, email, branch, password } = this.state;
    const newUser = {
      name,
      email,
      branch,
      password,
    };
    this.props.onRegister(newUser, this.props.history);
  };
  render() {
    const { name, email, branch, password } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-4" />
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h3 className="text-center">Register</h3>
                  <input
                    type="text"
                    value={name}
                    name="name"
                    onChange={this._onHandleChange}
                  />
                  <input
                    type="email"
                    value={email}
                    name="email"
                    onChange={this._onHandleChange}
                  />
                  <input
                    type="text"
                    value={branch}
                    name="branch"
                    onChange={this._onHandleChange}
                  />
                  <input
                    type="password"
                    value={password}
                    name="password"
                    onChange={this._onHandleChange}
                  />
                  <button className="btn-primary" onClick={this._onSubmit}>
                    Register
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null, { onRegister })(withRouter(Register));

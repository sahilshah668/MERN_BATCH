import React, { Component } from "react";

export default class NewComponent extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      name: "",
      email: "",
      hobby: "",
    };
  }

  // _onClickMe () {

  // }
  _onHandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  _onSubmit = () => {
    const { show, name, email, hobby } = this.state;
    if (!email) {
      console.log("no email found");
    } else {
      const newData = {
        show,
        name,
        email,
        hobby,
      };
      console.log(newData);
    }
  };

  _onClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    const { show, name, email, hobby } = this.state;
    return (
      <div>
        <h3 onClick={this._onClick}>Click me</h3>
        {show ? <h1>Welcome to ReactWorld</h1> : null}

        <input
          name="name"
          value={name}
          type="text"
          onChange={this._onHandleChange}
        />
        <input
          name="email"
          value={email}
          type="email"
          onChange={this._onHandleChange}
        />
        <input
          name="hobby"
          value={hobby}
          type="text"
          onChange={this._onHandleChange}
        />

        <button onClick={this._onSubmit}>Submit</button>

        <h3>name:{name}</h3>
        <h3>email:{email}</h3>
        <h3>hobby:{hobby}</h3>
      </div>
    );
  }
}

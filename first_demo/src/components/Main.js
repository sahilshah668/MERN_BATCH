import React, { Component } from "react";
import Header from "./Header";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      text: "",
    };
  }

  onButtonClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  onHandleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  render() {
    const { show, text } = this.state;

    let btn;
    if (show) {
      btn = <h1>when show</h1>;
    } else {
      btn = <h1>not showed</h1>;
    }
    return (
      <React.Fragment>
        <Header title="ReactDemo" bool={show} />
        <div>
          <button onClick={this.onButtonClick}>Show</button>
          <input
            type="text"
            value={text}
            name="text"
            onChange={this.onHandleChange}
          />
          <h3>{text}</h3>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;

import React, { Component } from "react";
import Header from "./Header";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  onButtonClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
      const {show} = this.state

      let btn 
    if(show) {
        btn = (
            <h1>when show</h1>
        )
    }else {
        btn = (
            <h1>not showed</h1>
        )
    }
    return (
      <React.Fragment>
        <Header title="ReactDemo" bool={show} />
        <div>
          <button onClick={this.onButtonClick}>Show</button>
          {show ? (
            <div>
              <h1>im Showed</h1>
            </div>
          ) : null}
          {btn}
        </div>
      </React.Fragment>
    );
  }
}

export default Main;

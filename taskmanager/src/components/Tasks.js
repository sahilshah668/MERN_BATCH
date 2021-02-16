import React, { Component } from "react";
import Task from "./Task";
import { Consumer } from "./Context";

export default class Tasks extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { tasks } = value;
          return (
            <div>
              {tasks.map((task) => (
                <Task key={task.id} id={task.id} title={task.title} />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

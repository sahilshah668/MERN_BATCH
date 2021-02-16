import React from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [ action.payload,...state.tasks],
      };
  }
};

export class Provider extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          id: 1,
          title: "task 1",
          description: "lorem ipsum",
        },
        {
          id: 2,
          title: "task 2",
          description: "lorem ipsum",
        },
        {
          id: 3,
          title: "task 3",
          description: "lorem ipsum",
        },
        {
          id: 4,
          title: "task 4",
          description: "lorem ipsum",
        },
        {
          id: 5,
          title: "task 5",
          description: "lorem ipsum",
        },
      ],
      dispatch: (action) => {
        this.setState((state) => reducer(state, action));
      },
    };
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

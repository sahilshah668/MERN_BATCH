import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Alert,
} from "reactstrap";
import {Consumer} from './Context'
import { withRouter } from "react-router-dom";
 class AddTasks extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      error: '',
    };
  }

  _onHandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  _onSubmit = (dispatch) => {
    const { title, description, error } = this.state;
    if (!title) {
      this.setState({
        error: "no title found",
      });
    }
    console.log(title);
    console.log(description);
    const newTask = {
      id:6,
      title,
      description
    }
    dispatch({
      type:'ADD_TASK',
      payload:newTask
    })
    this.props.history.push('/task')
  };

  render() {
    const { title, description, error } = this.state;
    return (
      <Consumer>
        {value => {
          const {dispatch} = value
          return (
            <Container>
              {error ? (
                <Alert color="danger">
                  This is a danger alert with{" "}
                  <a href="#" className="alert-link">
                    an example link
                  </a>
                  . Give it a click if you like.
                </Alert>
              ) : null}
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Title</Label>
                  <Input
                    type="text"
                    name="title"
                    value={title}
                    onChange={this._onHandleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Description</Label>
                  <Input
                    type="text"
                    name="description"
                    value={description}
                    onChange={this._onHandleChange}
                  />
                </FormGroup>
                <Button onClick={this._onSubmit.bind(this,dispatch)}>Submit</Button>
              </Form>
            </Container>
          );
        }}
      </Consumer>
    )
  }
}
export default withRouter(AddTasks)
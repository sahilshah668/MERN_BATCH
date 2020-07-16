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
export default class AddTasks extends Component {
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

  _onSubmit = () => {
    const { title, description, error } = this.state;
    if (!title) {
      this.setState({
        error: "no title found",
      });
    }
    console.log(title);
    console.log(description);
  };

  render() {
    const { title, description, error } = this.state;
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
          <Button onClick={this._onSubmit}>Submit</Button>
        </Form>
      </Container>
    );
  }
}

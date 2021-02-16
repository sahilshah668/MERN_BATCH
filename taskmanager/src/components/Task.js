import React, { Component } from "react";
import { Card, CardBody, CardTitle, Button, Row, Col } from "reactstrap";
import { Consumer } from "./Context";

export default class Task extends Component {
  _onDeleteTask = (id, dispatch) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  };
  render() {
    const { title, id } = this.props;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <Row>
              <Col md="4">
                <div key={id}>
                  <Card>
                    <CardBody>
                      <CardTitle>{title}</CardTitle>
                      <Button
                        onClick={this._onDeleteTask.bind(this, id, dispatch)}
                      >
                        Delete
                      </Button>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            </Row>
          );
        }}
      </Consumer>
    );
  }
}

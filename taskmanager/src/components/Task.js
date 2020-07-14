import React, { Component } from "react";
import { Card, CardBody, CardTitle, Button, Row, Col } from "reactstrap";

export default class Task extends Component {


   _onDeleteTask = (id) => {
       this.props.deleteTask(id)
   } 
  render() {
    const { id, title } = this.props;
    return (
      <Row>
        <Col md="4">
          <div key={id}>
            <Card >
              <CardBody>
                <CardTitle>{title}</CardTitle>
                <Button onClick={this._onDeleteTask.bind(this,id)}>Delete</Button>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
    );
  }
}

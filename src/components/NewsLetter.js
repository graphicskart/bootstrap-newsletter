import React, { Component } from "react";
import { Modal, Button, Col, FormControl, Form } from "react-bootstrap";

export default class NewsLetter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      email: ""
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    this.setState({
      email: ""
    });
    alert("Successfuly submitted!!");
  };

  render() {
    return (
      <React.Fragment>
        <Col xs={12} className="text-center btn-modal">
          <Button variant="primary" onClick={this.handleShow}>
            Launch demo modal
          </Button>
        </Col>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          centered
          size="lg"
          animation={false}
        >
          <Modal.Header closeButton />
          <Modal.Body className="text-center">
            <Form onSubmit={this.onSubmit}>
              <Col xs={12}>
                <h2 className="heading">SIGNUP & GET 10% OFF</h2>
                <p className="message">
                  Subscribe to our newsletters now and stay up-to-date with new
                  colletions, the latest lookbooks and exclusive offers.
                </p>
                <Col xs={12} sm={{ span: 8, offset: 2 }}>
                  <Form.Group>
                    <FormControl
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Button variant="primary" type="submit">
                    SUBMIT
                  </Button>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="formBasicChecbox" className="checkbox">
                    <Form.Check
                      type="checkbox"
                      label="Don't show this popup again"
                    />
                  </Form.Group>
                </Col>
              </Col>
            </Form>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }
}

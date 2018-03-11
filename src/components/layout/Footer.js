import React from "react";
import { Row, Col } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <Row>
        <Col md={12}>
          <div className="copyright">© 2018, Jose Fonseca, All rights reserved</div>
        </Col>
      </Row>
    );
  }
}

export default Footer;

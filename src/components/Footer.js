import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-body">
          <h3>Designed and Developed by Juan Camilo Pirachican</h3>
        </Col>
        <Col md="4" className="footer-body">
          <h3>
                <AiOutlineMail /> 
                camilo4614@gmail.com
          </h3>

        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

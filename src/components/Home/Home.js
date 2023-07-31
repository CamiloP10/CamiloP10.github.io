import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Foto from "../../Assets/Foto.jpg" ;
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>

            <Col md={5}>
              <img
                src={Foto}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>

            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 5 }} className="heading">
                Hi !{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I am
                <strong className="main-name"> JUAN CAMILO PIRACHICAN PINZÓN. </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "center" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

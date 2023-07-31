import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          > 
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="blue">Developer's</strong> focus
            </h1>
            <h4>
            I began my passion for programming at the university, where I started with <b className="blue">programming logic</b> focused 
            on <b className="blue">microcontrollers</b>. Using platforms and development environments like <b className="blue">MatLab</b>
            and <b className="blue">LabView</b>, I developed simulations and prototypes of various biomedical devices.
            Afterward, I complemented my studies with the MINTIC2022 project, strengthening my skills as a developer and acquiring 
            abilities in <b className="blue">web and mobile programming</b>.
            </h4>
            <br/>
            <h4>
            My true passion lies in using technology to <b className="blue">create innovative solutions</b> and positively impact people's lives.
            While I may be at the early stages of my programming journey, I am committed to <b className="blue">continuous learning</b> and 
            dedicated to becoming a <b className="blue">proficient developer</b>.
            </h4>
            <br/>
            <h4>
            Thank you for visiting my portfolio, and I look forward to the opportunity to contribute my skills and enthusiasm to exciting projects and teams in the future!
            </h4>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
         <strong className="blue">KNOWLEDGE AND SKILLS</strong>
        </h1>
        <Techstack />
      </Container>
    </Container>
  );
}

export default About;

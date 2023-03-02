import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJava,
  DiPython,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiPostgresql,
  DiAndroid
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava/>
        <h5>java</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <h5>C++</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h5>Pyton</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h5>Javascript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <  DiReact />
        <h5>React</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h5>NodeJS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h5>Mongo</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <h5>MySQL</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
        <h5>Postgres</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid />
        <h5>Android</h5>
      </Col>
    </Row>
  );
}

export default Techstack;

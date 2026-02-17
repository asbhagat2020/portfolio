import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiMysql,
} from "react-icons/di";

import { FaBootstrap, FaCss3Alt } from "react-icons/fa";
import { ImHtmlFive } from "react-icons/im";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiRedux,
  SiPostman,
  SiTypescript,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* Frontend */}
      <Col xs={4} md={2} className="tech-icons">
        <ImHtmlFive />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>

      {/* Backend */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>

      {/* Database */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>

      {/* Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>

    </Row>
  );
}

export default Techstack;

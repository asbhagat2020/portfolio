import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiNetlify,
  SiVercel,
  SiGithub,
  SiAmazonaws,
  SiDocker,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* VS CODE */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      {/* POSTMAN */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>

      {/* GITHUB */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>

      {/* AWS */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>

      {/* DOCKER */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>

      {/* VERCEL */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>

      {/* NETLIFY */}
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>

      {/* SLACK */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>

    </Row>
  );
}

export default Toolstack;

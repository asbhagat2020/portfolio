import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import "./Skills.css";

function Skills() {
  return (
    <Container fluid className="skills-section">
      <Container>
        <h1 className="skills-heading">
          Professional <strong className="purple">Skillset</strong>
        </h1>

        <Techstack />

        <h1 className="skills-heading tools-heading">
          <strong className="purple">Tools</strong> I Use
        </h1>

        <Toolstack />
      </Container>
    </Container>
  );
}

export default Skills;
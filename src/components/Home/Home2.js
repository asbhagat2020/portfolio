import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/my_image.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m a passionate{" "}
              <b className="purple">Full Stack MERN Developer</b> with 2+ years
              of hands-on experience building scalable and production-ready web
              applications.
              <br />
              <br />
              I specialize in technologies like
              <i>
                <b className="purple">
                  {" "}
                  MongoDB, Express.js, React.js, Node.js
                </b>
              </i>{" "}
              along with modern JavaScript tools and frameworks.
              <br />
              <br />
              My expertise includes developing
              <b className="purple">
                {" "}
                RESTful APIs, E-commerce Platforms, and Admin Dashboards
              </b>{" "}
              with secure authentication and real-time features.
              <br />
              <br />
              I have hands-on experience integrating payment gateways like
              <b className="purple"> Stripe</b> and optimizing application
              performance for better scalability and user experience.
              <br />
              <br />
              Whenever possible, I apply my passion for developing products
              using
              <b className="purple"> Next.js</b>, cloud services, and modern UI
              technologies to build impactful digital solutions.
              <br />
              <br />
              I’m always eager to learn new technologies and contribute to
              meaningful, real-world projects.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{
                  height: "400px",
                  width: "400px",
                  borderRadius: "50%",
                }}
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/asbhagat2020"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ashwin-bt/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              {/*
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/your_username/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

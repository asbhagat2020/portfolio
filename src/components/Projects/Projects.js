import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import fitbuddyImg from "../../Assets/Projects/Signin Singup.jpg";
import kukuImg from "../../Assets/Projects/kuku_img.png";
import realtorImg from "../../Assets/Projects/realistic_realtors.png";
import bookmarkImg from "../../Assets/Projects/bookmark.png";         

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          Professional & <strong className="purple">Personal Projects </strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are some production-grade and real-world applications I’ve built
          and contributed to.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* ================= KUKU PROJECT ================= */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={kukuImg}
              isBlog={false}
              title="Kuku — Resale E-commerce Platform"
              description="Contributed as a Full Stack Developer in building a scalable resale marketplace using Next.js, Node.js, Express.js, and MongoDB. Integrated Stripe payment gateway with webhooks, developed seller dashboards with real-time earnings, and built logistics & location-based APIs. Optimized AWS S3 media delivery, improving load performance significantly."
              ghLink=""
              demoLink=""
            />
          </Col>

          {/* ================= REALISTIC REALTORS ================= */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={realtorImg}
              isBlog={false}
              title="Realistic Realtors — Property Platform"
              description="Developed a high-performance real estate platform frontend using React.js. Integrated RESTful APIs for real-time property listings, advanced search filters, and location-based discovery. Implemented performance optimizations like lazy loading and memoization to enhance user engagement and reduce page load time."
              ghLink=""
              demoLink=""
            />
          </Col>

          {/* ================= FITBUDDY ================= */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={fitbuddyImg}
              isBlog={false}
              title="FitBuddy — Fitness Tracking Application"
              description="Built a full-stack MERN fitness tracking application with JWT authentication, workout logging, nutrition tracking, and progress analytics. Designed RESTful APIs, optimized MongoDB queries, and created a responsive React.js dashboard for real-time user insights."
              ghLink="https://github.com/shobhit9742/FitBuddy"
              demoLink="https://union-ubuntu-046.vercel.app/"
            />
          </Col>

          {/* ================= SMART BOOKMARK APP ================= */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bookmarkImg}
              isBlog={false}
              title="Smart Bookmark App — Real-Time Manager"
              description="Built a full-stack bookmark manager using Next.js (App Router) and Supabase with Google OAuth authentication. Implemented Row Level Security (RLS) for user-specific private data protection and integrated Supabase Realtime to sync bookmarks instantly across multiple tabs. Deployed securely on Vercel with environment-based configuration."
              ghLink="https://github.com/asbhagat2020/smart-bookmark-app"
              demoLink="https://smart-bookmark-app-7s9h.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

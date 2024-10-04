import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="TRELLTECH"
              description="An e-commerce site built with PHP, HTML5 and Tailwindcss"
              ghLink="https://github.com/EpitechCodingAcademyPromo2024/C-COD-290-COT-2-3-epicture-syntyche.saizonou.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="POST-IT"
              description="A notes managament app built with Vue js and Tailwind Css."
              ghLink="https://github.com/EpitechCodingAcademyPromo2024/C-DEV-121-COT-1-2-postit-syntyche.saizonou.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="My ShowTime"
              description="My Show Time is a concert and festival ticket booking platform built using NestJS and *MongoDB. It features both a frontoffice for users to book tickets and a backoffice for administrators to manage concerts and track bookings."
              ghLink="https://github.com/EpitechCodingAcademyPromo2024/C-COD-250-COT-2-3-showtime-gracias.daga.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="COMMENT-IT"
              description="A revolutionary web application that empowers users to comment on any content across the internet . The frontend is written in Vue js. The backend uses the Laravel framework. "
              ghLink="https://github.com/EpitechCodingAcademyPromo2024/C-DEV-160-COT-1-2-yowl-vivien.ogoun.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="DASHBOARD"
              description="A web application that works like Netvibes allowing users to subscribe to different services you that are accessible that offer different widgets. This app is built with Django and React js.."
              ghLink="https://github.com/EpitechCodingAcademyPromo2024/C-COD-280-COT-2-3-dashboard-vivien.ogoun.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Movie joy"
              description="This is a Next.js project bootstrapped with create-next-app. with typescript and tailwind css. My movie joy is a website managed by an admin and a user can comment on his favorite films."
              ghLink="https://github.com/EpitechCodingAcademyPromo2024/C-COD-270-COT-2-3-c2cod270p0-yelian.bakpe.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

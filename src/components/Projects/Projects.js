import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import reg_system from "../../Assets/Projects/reg_system.png";
import hb_comp from "../../Assets/Projects/hb_comp.png";
import discord from "../../Assets/Projects/discord.png";
import suicide from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>

        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I have been working on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reg_system}
              isBlog={false}
              title="University thesis work"
              description="An individual business registration system through a web application. This is my thesis work for university graduation. The system is developed using Python - Flask for backend and React.js for frontend. It is designed to make the business registration process easier and faster."
              ghLink="https://github.com/szabi01120/szakdolgozat_python"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={discord}
              isBlog={false}
              title="Always Typing on Discord"
              description="A small project to make Discord always typing. This is a Python script that sends a typing status to the Discord server every 10 seconds. This way, the user is always typing, even if they are not typing anything."
              ghLink="https://github.com/szabi01120/DiscordAlwaysType-python"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hb_comp}
              isBlog={false}
              title="Websites built with WordPress"
              description={
                <div style={{ textAlign: "center" }}>
                  Here are a few websites I created for clients using WordPress a few years ago. To view them, please visit this link: <a href="https://hb-computer.hu/referencia/" target="_blank" rel="noopener noreferrer">hb-computer.hu</a>
                </div>
              }
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

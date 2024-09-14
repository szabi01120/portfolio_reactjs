import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
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
              I started programming in my second year of high school, although I have loved computers since I was a child, 
              and I have always been interested in how they work.
              <br />
              <br />
              My area of expertise covers a wide range of technologies,
              but I am most passionate about
              <b className="purple"> software and web development.</b>
              <br />
              <br />
              I may say I am fluent in  
              <b className="purple"> C++, Javascript and Python. </b>
              <br />
              <br />
              My primary area of interest's currently building new&nbsp;
              <b className="purple">Web Technologies and Products</b>, and
              also in areas related to{" "}
              <b className="purple">
                Machine Learning and Data Science.
              </b>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <b className="purple">
                {" "}
                Modern Javascript Library and Frameworks
              </b>
              &nbsp; like
              <b className="purple"> React.js and Vue.js</b>
              , and also work with <b className="purple">Flask</b> or <b className="purple">Django</b> for backend development.
              <br />
              <br />
              <i>
                <b className="purple">
                  "A computer is like a violin, you can imagine it making beautiful music, but you have to learn how to play it." </b>
                  -Bill Gates
              </i>


            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
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
                  href="https://github.com/szabi01120"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/szabi01120/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/szabolcshajnal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

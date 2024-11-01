import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  const location = useLocation();
  const isMainPage = location.pathname === "/";

  return (
    <Container fluid className="footer">
      <Row style={{ minHeight: "50px" }} className="d-flex align-items-center">
        {isMainPage ? (
          <>
            <Col md="4" />
            <Col
              md="4"
              className="footer-copywright no-padding d-flex justify-content-center align-items-center"
            >
              <h3>Copyright © {year} SzH.</h3>
            </Col>
            <Col md="4" />
          </>
        ) : (
          <>
            <Col
              md="4"
              className="footer-copywright d-flex justify-content-center align-items-center"
            >
              <h3>Copyright © {year} SzH.</h3>
            </Col>
            <Col md="4" />
            <Col
              md="3"
              className="footer-icons d-flex justify-content-md-end justify-content-center" // Telefonon középre igazít, gépen jobbra
            >
              <ul className="footer-icons list-inline">
                <li className="social-icons list-inline-item">
                  <a
                    href="https://github.com/szabi01120"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons list-inline-item">
                  <a
                    href="https://www.linkedin.com/in/szabolcs-hajnal-3b3958328/"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons list-inline-item">
                  <a
                    href="https://www.instagram.com/szabolcshajnal/"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
}

export default Footer;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Szabolcs Hajnal </span>
            from <span className="purple"> Debrecen, Hungary.</span>
            <br />
            I am currently employed as a <span className="purple">Data Analyst</span> at <span className="purple">DataExpert Kft</span>.
            <br />

          </p>
          <p style={{ textAlign: "left" }}>
            I am a graduate student at the <span className="purple">University of Debrecen, Faculty of Informatics</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Hangout with friends
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            <i>{`.fear {display: none;}`}</i>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

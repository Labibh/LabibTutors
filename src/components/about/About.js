import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TagCloud from "react-tag-cloud";

import Wrapper from "../wrapper/Wrapper";

const AboutStyled = styled.div`
  background-color: #001219;

  .grid-wrapper {
    display: grid;
    min-height: 90vh;
    width: 80vw;
    margin: 4% auto 1%;
  }

  .about-header {
    padding: 25px 25px 0 25px;
    font-family: "Viaoda Libre", cursive;
    font-weight: 600;
    font-size: calc(100% + 2vw);
    text-align: left;
    line-height: 1.2;
  }

  .about-text {
    padding: 10px 25px 0 25px;
    font-family: "Alata", sans-serif;
    font-weight: 400;
    font-size: calc(90% + 0.7vw);
    text-align: justify;
    line-height: 1.2;
  }

  .box1 {
    background-color: rgb(255, 255, 255, 0.6);
    border-radius: 10px;
  }

  .box3 {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    background-color: azure;
    opacity: 0.7;
    border-radius: 5px;
  }

  .box3 > p {
    font-family: "Alata", sans-serif;
    font-weight: 400;
    font-size: calc(100% + 1.5vw);
  }

  .tag-cloud > div {
    transition: 1.5s;
  }

  @media only screen and (max-width: 768px) and (orientation: portrait) {
    .grid-wrapper {
      width: 90vw;
      grid-template-columns: 1fr;
      grid-template-rows: 5fr 1fr;
      gap: 10px 10px;
      margin-top: 55px;
    }

    .about-header {
      font-size: 2.3em;
    }

    .about-text {
      font-size: 5.3vw;
    }

    .box3 > p {
      font-size: 2em;
    }

    .box2 {
      display: none;
    }
  }
  @media only screen and (min-width: 769px),
    (max-width: 768px) and (orientation: landscape) {
    .grid-wrapper {
      grid-template-columns: 2fr 3fr;
      grid-template-rows: 8fr 2fr;
      gap: 20px 20px;
    }

    .box1 {
      grid-row: 1/2;
      grid-column: 1/2;
    }

    .box2 {
      grid-row: 1/3;
      grid-column: 2/3;
      background-color: rgb(255, 255, 255, 0.5);
      padding: 50px;
      border-radius: 10px;
    }

    .box3 {
      grid-row: 2/3;
      grid-column: 1/2;
    }
  }
`;
const About = (props) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AboutStyled id="about">
      <Wrapper>
        <div className="grid-wrapper">
          <div className="box1">
            <p className="about-header">
              About Myself and <br />
              My Philosophy
            </p>
            <p className="about-text">
              There are numerous students out there who are struggling with
              math, only a handful are naturally inclined. And that’s okay, it
              can all change with the right support and guidance. I have been
              tutoring Ontario high school and middle school students for over
              eight years, and helped bring them success in their math courses.
              I have a Bachelor of Engineering, and extensive experience in
              tutoring Mathematics to meet any student’s need.
            </p>
          </div>
          <div className="box2">
            <TagCloud
              className="tag-cloud"
              style={{
                fontFamily: "sans-serif",
                fontSize: 30,
                fontWeight: "bold",
                fontStyle: "italic",
                padding: 10,
                width: "100%",
                height: "100%",
              }}
            >
              <div style={{ fontSize: 40, color: "#F9844A" }}>Number Sense</div>
              <div style={{ fontSize: 60, color: "#F9C74F" }}>
                Linear Relation
              </div>
              <div style={{ fontSize: 30, color: "#90BE6D" }}>Functions</div>
              <div style={{ fontSize: 40, color: "#F9C74F" }}>Derivatives</div>
              <div style={{ fontSize: 60, color: "#4D908E" }}>Geometry</div>
              <div style={{ fontSize: 50, color: "#577590" }}>Algebra</div>
              <div style={{ fontSize: 30, color: "#277DA1" }}>Quadratics</div>
              <div style={{ fontSize: 40, color: "#43AA8B" }}>Parabola</div>
              <div style={{ fontSize: 50, color: "#F3722C" }}>Trigonometry</div>
            </TagCloud>
          </div>
          <div className="box3">
            <p>Students Tutored 51+</p>
          </div>
        </div>
      </Wrapper>
    </AboutStyled>
  );
};

export default About;

import React from "react";
import styled from "styled-components";
import ParticlesBg from "particles-bg";

import Wrapper from "../wrapper/Wrapper";

const SubjectsStyled = styled.div`
  .particles-bg-style {
    z-index: -1;
    height: 100vh;
    width: 98vw;
    position: absolute;
  }

  .grid-wrapper {
    display: grid;
    margin: 4% auto 1%;
  }

  .box1,
  .box2,
  .box3,
  .box4 {
    font-family: "Alata", sans-serif;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.85);
    border: 5px solid rgba(0, 0, 0, 0.8);
    border-radius: 10px;
  }

  .subject-code-text {
    font-weight: bold;
    line-height: 2;
  }

  @media only screen and (max-width: 768px) {
    .grid-wrapper {
      height: 90vh;
      width: 90vw;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 2fr 2fr;
      gap: 10px 0;
      margin-top: 55px;
    }

    .heading-grade {
      font-size: 5.5vw;
      line-height: 2;
    }

    .subject-text {
      display: inline-block;
      font-size: 17pt;
      padding-top: 5px;
    }

    .subject-code-text {
      font-size: 14pt;
      //font-weight: 500;
      line-height: 1.5;
    }
  }

  @media only screen and (min-width: 769px) {
    .grid-wrapper {
      height: 80vh;
      width: 70vw;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr 3fr;
      gap: 20px 20px;
    }

    .heading-grade {
      font-size: calc(100% + 1.1vw);
      line-height: 2;
    }

    .subject-text {
      display: inline-block;
      font-size: calc(100% + 0.4vw);
      padding-top: 10px;
    }

    .subject-code-text {
      font-size: 22px;
    }

    .box1 {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    }

    .box2 {
      grid-row: 2 / 3;
      grid-column: 1 / 2;
    }

    .box3 {
      grid-row: 1 / 3;
      grid-column: 2 / 3;
    }

    .box4 {
      grid-row: 1 /3;
      grid-column: 3 / 4;
    }
  }
`;

const Subjects = (props) => {
  return (
    <SubjectsStyled id="subjects">
      <Wrapper>
        <span className="particles-bg-style">
          <ParticlesBg type="polygon" />
        </span>
        <div className="grid-wrapper">
          <div className="box1">
            <p>
              <span className="heading-grade">Grades 6-8</span> <br />
              <span className="subject-text">Mathematics</span>
            </p>
          </div>
          <div className="box2">
            <p>
              <span className="heading-grade">Grades 9 & 10</span>
              <br />
              <span className="subject-text">Principles of Mathematics</span>
              <br />
              <span className="subject-code-text">MPM1D | MPM2D</span>
            </p>
          </div>
          <div className="box3">
            <p>
              <span className="heading-grade">Grades 11</span>
              <br />
              <span className="subject-text">Functions</span>
              <br />
              <span className="subject-code-text">MCR3U</span>
              <br />
              <span className="subject-text">Functions & Applications</span>
              <br />
              <span className="subject-code-text">MCF3M</span>
            </p>
          </div>
          <div className="box4">
            <p>
              <span className="heading-grade">Grades 12</span>
              <br />
              <span className="subject-text">Advanced Functions</span>
              <br />
              <span className="subject-code-text">MHF4U</span>
              <br />
              <span className="subject-text">Calculus & Vectors</span>
              <br />
              <span className="subject-code-text">MCV4U</span>
            </p>
          </div>
        </div>
      </Wrapper>
    </SubjectsStyled>
  );
};

export default Subjects;

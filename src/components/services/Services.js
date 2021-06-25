import React from "react";
import styled from "styled-components";

import Wrapper from "../wrapper/Wrapper";
import bgImage from "./bg-image-compass.jpg";
import bgImageVertical from "./bg-image-compass-vertical.jpg";
import boyIcon from "./boy-icon.svg";
import girlIcon from "./girl-icon.svg";

const ServicesStyled = styled.div`
  .background-image {
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 95%;
    width: 100%;
    min-height: 100vh;
    z-index: -1;
  }

  .grid-wrapper {
    display: grid;
    margin: 4% auto 1%;
  }

  .box1,
  .box2 {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 4fr;
    gap: 0;
  }

  .nested-box3,
  .nested-box5 {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    margin: 50px 50px 0 50px;
    border-radius: 15px 15px 0 0;
  }

  .nested-box4,
  .nested-box6 {
    display: flex;
    flex-flow: column nowrap;
    white-space: nowrap;
    align-items: center;
    font-family: "Alata", sans-serif;
    background-color: rgba(255, 255, 255, 0.85);
    margin: 0 50px 50px 50px;
    border-radius: 0 0 15px 15px;
  }

  .nested-box3 {
    background-color: rgba(46, 196, 182, 0.95);
  }

  .nested-box5 {
    background-color: rgba(255, 203, 119, 0.95);
  }

  @media only screen and (max-width: 768px) and (orientation: portrait) {
    .background-image {
      background-image: url(${bgImageVertical});
    }

    .grid-wrapper {
      min-height: 85vh;
      width: 90vw;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 10px 0;
    }

    .nested-box3,
    .nested-box5 {
      margin: 10px 10px 0 10px;
    }

    .nested-box4,
    .nested-box6 {
      margin: 0 10px 0 10px;
    }

    .student-icon {
      height: 80px;
      width: auto;
    }

    .girl-icon {
      padding: 0 18px;
    }

    .session-title {
      font-size: 19pt;
    }

    .session-info-text {
      text-align: left;
      font-size: 16pt;
      line-height: 1.2;
    }

    .session-price-text {
      font-size: 18pt;
    }

    .session-price-text > span {
      font-size: 14pt;
    }
  }

  @media only screen and (min-width: 769px),
    (max-width: 768px) and (orientation: landscape) {
    .background-image {
      background-image: url(${bgImage});
    }

    .grid-wrapper {
      min-height: 80vh;
      width: 70vw;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr;
      gap: 20px 20px;
    }

    .nested-box3 {
      margin: 50px 10px 0 50px;
    }

    .nested-box4 {
      margin: 0 10px 50px 50px;
    }

    .nested-box5 {
      margin: 50px 50px 0 10px;
    }

    .nested-box6 {
      margin: 0 50px 50px 10px;
    }

    .student-icon {
      height: 150px;
      width: auto;
      padding: 20px;
    }

    .nested-box5 > img {
      padding: 20px 25%;
    }

    .girl-icon {
      align-self: flex-start;
    }

    .session-title {
      font-size: calc(100% + 1.1vw);
      line-height: 2;
    }

    .session-info-text {
      text-align: left;
      font-size: calc(100% + 0.5vw);
      padding: 0 15px;
    }

    .session-price-text {
      font-size: calc(100% + 0.6vw);
      padding-top: 30px;
    }

    .session-price-text > span {
      font-size: 15pt;
    }
  }
`;

const Services = (props) => {
  return (
    <ServicesStyled id="services">
      <Wrapper>
        <div className="background-image" />
        <div className="grid-wrapper">
          <div className="box1">
            <div className="nested-box3">
              <img className="student-icon" src={boyIcon} alt="boy icon" />
              <img
                className="student-icon girl-icon"
                src={girlIcon}
                alt="girl icon"
              />
              <img className="student-icon" src={boyIcon} alt="boy icon" />
            </div>
            <div className="nested-box4">
              <p className="session-title">Group Session</p>
              <ul className="session-info-text">
                <li>Max 3 students/session</li>
                <li>Session length 2 hours</li>
                <li>Up to 3 sessions/week</li>
                <li>Online tutoring</li>
              </ul>
              <p className="session-price-text">
                $30<span>/session</span>
              </p>
            </div>
          </div>
          <div className="box2">
            <div className="nested-box5">
              <img className="student-icon" src={boyIcon} alt="boy icon" />
            </div>
            <div className="nested-box6">
              <p className="session-title">One-on-One</p>
              <ul className="session-info-text">
                <li>Private Tutoring</li>
                <li>Session length 1.5 hours</li>
                <li>Up to 3 sessions/week</li>
                <li>Online tutoring</li>
              </ul>
              <p className="session-price-text">
                $40<span>/session</span>
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </ServicesStyled>
  );
};

export default Services;

import React from "react";
import styled from "styled-components";

import Wrapper from "../wrapper/Wrapper";
import bgImage from "./bg-image-compass.jpg";
import bgImageVertical from "./bg-image-compass-vertical.jpg";

const ServicesStyled = styled.div`
  .background-image {
    //margin-top: 50px;
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 95%;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }

  @media only screen and (max-width: 768px) {
    .background-image {
      background-image: url(${bgImageVertical});
    }
  }

  @media only screen and (min-width: 769px) {
    .background-image {
      background-image: url(${bgImage});
    }
  }
`;

const Services = (props) => {
  return (
    <ServicesStyled id="services">
      <Wrapper>
        <div className="background-image" />
      </Wrapper>
    </ServicesStyled>
  );
};

export default Services;

import React from 'react';
import styled from 'styled-components';

import Wrapper from "../wrapper/Wrapper"
import bgImage from "./bg-image-compass.jpg";

const ServicesStyled = styled.div`
    .background-image {
      background-image: url(${bgImage});
      margin-top: 50px;
      position: absolute;
      background-size: cover;
      background-repeat: no-repeat;
      opacity: 95%;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
`

const Services = props => {

    return (
        <ServicesStyled id="services">
            <Wrapper>
                <div className="background-image"></div>
            </Wrapper>
        </ServicesStyled>
    );
}

export default Services;
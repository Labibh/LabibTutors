import React from 'react';
import styled from 'styled-components';
import ParticlesBg from 'particles-bg'

import Wrapper from "../wrapper/Wrapper"

const SubjectsStyled = styled.div`
    .particles-bg-style {
      z-index: -1;
      height: 100vh;
      width: 98vw;
      position: absolute;
    }
`

const Subjects = props => {

    return (
        <SubjectsStyled id="subjects">
            <Wrapper>
                <span className="particles-bg-style">
                    <ParticlesBg type="polygon"/>
                </span>
            </Wrapper>
            <Wrapper>
                <span className="particles-bg-style">
                    <ParticlesBg type="polygon"/>
                </span>
            </Wrapper>
        </SubjectsStyled>
    );
}

export default Subjects;
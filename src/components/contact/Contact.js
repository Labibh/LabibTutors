import React from 'react';
import styled from 'styled-components';
import ParticlesBg from 'particles-bg'

import Wrapper from "../wrapper/Wrapper"

const ContactStyled = styled.div`
  background-color: #14213D;
`

const Contact = props => {

    return (
        <ContactStyled id="contact">
            <Wrapper>
            </Wrapper>
        </ContactStyled>
    );
}

export default Contact;
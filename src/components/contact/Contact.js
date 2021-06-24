import React from "react";
import styled from "styled-components";

import Wrapper from "../wrapper/Wrapper";

const ContactStyled = styled.div`
  background-color: #14213d;
`;

const Contact = (props) => {
  return (
    <ContactStyled id="contact">
      <Wrapper></Wrapper>
    </ContactStyled>
  );
};

export default Contact;

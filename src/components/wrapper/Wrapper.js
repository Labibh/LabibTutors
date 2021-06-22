import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  //@media only screen and (max-width: 767px) {
  //  min-height: 200vh;
  //}
`;

export default function Wrapper({ children }) {
    return <WrapperStyled>{children}</WrapperStyled>;
}

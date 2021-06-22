import React from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap';
import ParticlesBg from 'particles-bg'

import Wrapper from "../wrapper/Wrapper"
import myPic from './Web_Face_Pic.jpg';

const LandingStyled = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Barlow&display=swap');

  .container {
    background-color: rgb(229, 229, 229, 0.6);
    min-height: 90vh;
    min-width: 90vw;
    margin-top: 50px;
  }

  .row-1 {
    height: 80vh;
    width: 75vw;
    margin: 0 auto;
  }

  .row-2 {
    height: 5vh;
    width: 80vw;
    margin: 0 auto;
  }

  .greetings {
    font-family: 'Barlow', sans-serif;
    font-size: 40px;
    height: 100%;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .subtitle {
    font-size: 20px;
    padding: 10px 0;
  }

  .my-picture {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .my-picture > img {
    border-radius: 10%;
  }
`

const Landing = props => {

    return (
        <LandingStyled id="landing">
            <Wrapper>
                <ParticlesBg type="cobweb" num={80} bg={true}/>
                <Container fluid className="container">
                    <Row className="row-1">
                        <Col md={6}>
                            <div className="greetings">
                                <p>Hi <br/>
                                    I'm Labib, <br/>
                                    the Math tutor</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="my-picture">
                                <img src={myPic}/>
                            </div>
                        </Col>
                    </Row>
                    <Row className="row-2">
                        <Col md={12}>
                            <div className="subtitle">
                                <p>Professionally Tutoring students of Ontario since 2012</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
        </LandingStyled>
    );
}

export default Landing;
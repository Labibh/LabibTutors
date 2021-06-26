import React from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import contactImage from "./contact-page-image.jpg";

import Wrapper from "../wrapper/Wrapper";

const ContactStyled = styled.div`
  background-color: #14213d;

  .grid-wrapper {
    display: grid;
    margin: 4% auto 1%;
  }

  .box3 {
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 10px;
  }

  .form-grid {
    display: grid;
    height: 100%;
    padding: 20px;
    text-align: left;
  }

  .box1 > h2 {
    font-family: "Barlow", sans-serif;
    color: white;
  }

  .form-label-text {
    font-family: "Alata", sans-serif;
    font-size: 15pt;
    color: white;
  }

  @media only screen and (max-width: 768px) and (orientation: portrait) {
  }

  @media only screen and (min-width: 769px),
    (max-width: 768px) and (orientation: landscape) {
    .grid-wrapper {
      min-height: 80vh;
      width: 70vw;
      grid-template-columns: 5fr 3fr;
      grid-template-rows: 2fr 8fr;
      gap: 20px;
    }

    .box1 {
      display: flex;
      flex-flow: row nowrap;
      justify-content: left;
      align-items: flex-end;
      padding-left: 15px;
      grid-row: 1 / 2;
      grid-column: 1 / 3;
    }

    .box2 {
      grid-row: 2 / 3;
      grid-column: 1 / 2;
    }

    .box3 {
      background-image: url(${contactImage});
      background-size: cover;
      background-repeat: no-repeat;
      grid-row: 2 /3;
      grid-column: 2 / 3;
    }
    .box1 > h2 {
      font-size: 4vw;
    }

    .form-grid {
      grid-template-columns: 0.5fr 0.5fr;
      grid-template-rows: 20% 20% 50% 10%;
      gap: 0 15px;
    }

    .form-grid > div:nth-child(1) {
      grid-row: 1 /2;
      grid-column: 1 / 2;
    }

    .form-grid > div:nth-child(2) {
      grid-row: 1 /2;
      grid-column: 2 / 3;
    }

    .form-grid > div:nth-child(3) {
      grid-row: 2 /3;
      grid-column: 1 / 3;
    }

    .form-grid > div:nth-child(4) {
      grid-row: 3 /4;
      grid-column: 1 / 3;
    }

    .form-grid > button:nth-child(5) {
      grid-row: 4 /5;
      grid-column: 1 / 2;
      margin-right: 40%;
    }
  }
`;

const Contact = (props) => {
  return (
    <ContactStyled id="contact">
      <Wrapper>
        <div className="grid-wrapper">
          <div className="box1">
            <h2>Contact Me</h2>
          </div>
          <div className="box2">
            <Form className="form-grid" noValidate>
              <Form.Group controlId="formGridFirstName">
                <Form.Label className="form-label-text">First Name</Form.Label>
                <Form.Control name="firstName" required type="text" />
              </Form.Group>

              <Form.Group controlId="formGridLastName">
                <Form.Label className="form-label-text">Last Name</Form.Label>
                <Form.Control name="lastName" required type="text" />
              </Form.Group>

              <Form.Group controlId="formGridEmail">
                <Form.Label className="form-label-text">
                  Email Address
                </Form.Label>
                <Form.Control required name="email" type="email" />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid E-mail address
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                className="form-textarea"
                controlId="formGridTextarea"
              >
                <Form.Label className="form-label-text">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  style={{
                    boxSizing: "border-box",
                    height: "80%",
                  }}
                />
              </Form.Group>

              <Button type="submit" className="submit-button">
                Send
              </Button>
            </Form>
          </div>
          <div className="box3"></div>
        </div>
      </Wrapper>
    </ContactStyled>
  );
};

export default Contact;

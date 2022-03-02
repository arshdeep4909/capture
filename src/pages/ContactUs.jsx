import React from "react";
//Framer Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import { Hide } from "../styles";

const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send Us A Message</h2>
          </Social>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Drop an email</h2>
          </Social>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Your Feedback Matters</h2>
          </Social>
        </Hide>
      </Title>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 5rem 10rem 3rem;
  color: #353535;
  min-height: 90vh;
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background-color: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    font-size: 2.5rem;
    color: #353535;
  }
`;

export default ContactUs;

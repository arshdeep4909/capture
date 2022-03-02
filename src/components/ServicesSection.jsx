import React from "react";
//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import wave from "../img/wave.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
//styles
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

function ServiceSection() {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <Description>
        <Hide>
          <h2>
            High <span>quality</span> services.
          </h2>
        </Hide>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt=" icon" />
              <h3>Efficient </h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt=" icon" />
              <h3>Teamwork </h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="icon " />
              <h3>Pro Grade Gear </h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Affordable </h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="camera" />
      </Image>
    </Services>
  );
}

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    flex-direction: row;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
      border-radius: 5px;
    }
  }
`;

//this way we copy all the styles definec in about and we can modify
//it as we want

export default ServiceSection;

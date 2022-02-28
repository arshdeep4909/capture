import React from "react";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

function FaqSection() {
  return (
    <Faq>
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      <div className="questions">
        <h4>How Do I Start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            laboriosam?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="questions">
        <h4>What Products do you Offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            laboriosam?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="questions">
        <h4>Different Payment Methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            laboriosam?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="questions">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            laboriosam?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
}

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;

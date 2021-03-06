import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

function FaqSection() {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              laboriosam?
            </p>
          </div>
        </Toggle>

        <Toggle title="What Products do you Offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              laboriosam?
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              laboriosam?
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              laboriosam?
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
}

const Faq = styled(About)`
  display: block;
  overflow: hidden;
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
  .questions {
    padding: 2rem 0;
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

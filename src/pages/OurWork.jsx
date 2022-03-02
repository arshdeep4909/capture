import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//images
import athlete from "../img/athlete-small.png";
import racer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//Framer Animations
import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
} from "../animation";

import { useScroll } from "../components/useScroll";
import { scrollReveal } from "../animation";
//Scroll up everytime a new page loads
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <motion.div variants={sliderContainer} initial="hidden" animate="show">
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div
          variants={lineAnim}
          initial="hidden"
          animate="show"
          className="line"
          className="line"
        ></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>

      <Movie
        variants={scrollReveal}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <h2>The Racer</h2>
        <motion.div
          variants={lineAnim}
          initial="hidden"
          animate="show"
          className="line"
          className="line"
        ></motion.div>
        <Link to="/work/the-racer">
          <Hide>
            <motion.img variants={photoAnim} src={racer} alt="racer" />
          </Hide>
        </Link>
      </Movie>
      <Movie
        variants={scrollReveal}
        ref={element2}
        animate={controls2}
        initial="hidden"
      >
        <h2>Good Times</h2>
        <motion.div
          variants={lineAnim}
          initial="hidden"
          animate="show"
          className="line"
          className="line"
        ></motion.div>
        <Link to="/work/good-times">
          <Hide>
            <motion.img variants={photoAnim} src={goodtimes} alt="goodtimes" />
          </Hide>
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 3rem;
  background: #fff;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
// styling that appears on the screen right when we load OurWork.
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%; // so we do not end up covering the Nav(nav height is 10%)
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;

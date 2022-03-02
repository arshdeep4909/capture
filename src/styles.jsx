import styled from "styled-components";
import { motion } from "framer-motion";

// mostly doing the layout style in this file

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;
export const Description = styled.div`
  flex: 1; //flex: flex-grow flex-shrink flex-basis
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
`;

export const Image = styled.div`
  flex: 1; //flex: flex-grow flex-shrink flex-basis
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;

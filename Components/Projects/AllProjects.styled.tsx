import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  h4 {
    cursor: pointer;
    display: inline-block;
  }
  padding-bottom: 40px;
`;

export const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  div {
    padding: 5px 0;
    margin: 20px 0;
  }
  p {
  }
`;

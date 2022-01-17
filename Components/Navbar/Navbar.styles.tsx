import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  background-color: #001f3f;
  height: 40px;
  align-items: center;
  padding: 0 10px;
  color: white;
  position: fixed;
  width: 100vw;
  z-index: 100;
  top: 0;
  transition: all 0.3s;

  p {
    margin: 0 5px;
    cursor: pointer;
  }

  @media (max-width: 450px) {
    font-size: 10px;
  }
`;

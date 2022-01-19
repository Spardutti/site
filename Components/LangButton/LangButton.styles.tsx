import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  border-radius: 30px;
  height: 10px;
  width: 100px;
  right: 5%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-around;
  user-select: none;
  align-items: center;
  p {
    padding: 0;
  }
`;

export const SelectorContainer = styled(motion.div)`
  background-color: #fff;
  width: 25px;
  height: 10px;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
`;

export const Selector = styled(motion.div)`
  background-color: #85144b;
  height: 7px;
  width: 7px;
  border-radius: 10px;
  top: 50%;
  left: ${(props: any) => props.position};
  transform: translateY(-50%);
  position: absolute;
  transition: all 0.3s;
`;

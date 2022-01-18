import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  border-radius: 30px;
  height: 20px;
  width: 100px;
  right: 5%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-around;
  user-select: none;
  align-items: center;
`;

export const SelectorContainer = styled(motion.div)`
  background-color: #fff;
  width: 34px;
  height: 20px;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
`;

export const Selector = styled(motion.div)`
  background-color: #85144b;
  height: 14px;
  width: 14px;
  border-radius: 10px;
  top: 50%;
  left: ${(props: any) => props.position};
  transform: translateY(-50%);
  position: absolute;
  transition: all 0.3s;
`;

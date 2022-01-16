import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

export const Wrapper = styled.div`
  background-color: #111111;
  color: #ffffff;
  height: 100vh;
  display: grid;
  width: 100vw;
  grid-template-columns: repeat(2, 1fr);
  position: relative;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const NavContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 30%;
  font-size: 30px;
  text-align: center;

  h4 {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    font-size: 20px;

    h4 {
      margin-bottom: 5px;
    }
  }
`;

export const Switch = styled.div`
  position: absolute;
  right: 20%;
  top: 5%;
  width: 10px;

  p {
    margin: 0 5px;
  }
`;

export const Title = styled(motion.div)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20%;

  h1 {
    text-align: center;
    font-size: 80px;
  }
  @media (max-width: 600px) {
    height: 50vh;
    h1 {
      font-size: 50px;
    }
  }
  @media (max-width: 400px) {
    h1 {
      font-size: 30px;
    }
  }
`;

export const TitleContainer: React.FC<{ text: string }> = ({ text }) => {
  return (
    <AnimatePresence>
      <Title
        animate={{ x: [-1000, 100, 0] }}
        transition={{
          delay: 0.5,
        }}
      >
        <h1>{text}</h1>
      </Title>
    </AnimatePresence>
  );
};

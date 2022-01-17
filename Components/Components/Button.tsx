import styled from "styled-components";
import { motion } from "framer-motion";

export const ButtonStyles = styled(motion.button)`
  background-color: ${(props: any) => props.color};
  text-decoration: none;
  list-style: none;
  padding: 5px 10px;
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  border: none;
  font-family: monospace;
  cursor: pointer;
`;

export const Button: React.FC<{ text: string; color: string }> = ({
  text,
  color,
}) => {
  return (
    <ButtonStyles
      color={color}
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.3,
        },
      }}
    >
      {text}
    </ButtonStyles>
  );
};

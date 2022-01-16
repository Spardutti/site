import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 250px;
  margin: 30px;
  background-color: #ddd;
  padding: 10px;
  color: black;
  border-radius: 15px;
  h3 {
    padding-top: 10px;
  }
  a {
    margin-left: 10px;
  }

  div {
    background-image: url(${(props: any) => props.image});
    height: 200px;
    width: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  p {
    margin-bottom: 15px;
  }
`;

export const Button = styled(motion.button)`
  background-color: ${(props: any) => props.color};
  text-decoration: none;
  list-style: none;
  padding: 5px 10px;
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  color: white;
`;

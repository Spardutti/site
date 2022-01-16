import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 30px;
  height: 20px;
  width: 50px;
  background-color: #aaaaaa;
  right: 5%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  div {
    background-color: #111;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    position: relative;
    left: ${(props: any) => props.pos};
    transition: all 0.3s;
    text-align: center;
  }
`;

export const Es = styled.p`
  position: absolute;
  left: -3px;
  top: 0px;
  cursor: pointer;
  font-size: 14px;
  color: white;
`;

export const En = styled.p`
  position: absolute;
  left: 28px;
  top: 0px;
  cursor: pointer;
  font-size: 14px;
  color: white;
`;

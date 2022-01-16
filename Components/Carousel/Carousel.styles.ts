import styled from "styled-components";

export const Wrapper = styled.div`
  bottom: 0;
  position: fixed;
  background-color: #ffffff;
  z-index: 100;

  i {
    margin: 0 10px;
    padding: 0px;
    width: 80px;
    height: 90px;
    font-size: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
  @media (max-width: 420px) {
    i {
      height: 40px;
      width: 40px;
      font-size: 40px;
    }
  }
`;

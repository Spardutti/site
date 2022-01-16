import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  text-align: center;
  margin-bottom: 50px;
  h2 {
    font-size: 50px;
    color: #7fdbff;
  }
  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 60px;

    i {
      font-size: 30px;
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        transform: scale(1.2);
      }
    }
    img {
      transition: all 0.3s;
      cursor: pointer;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

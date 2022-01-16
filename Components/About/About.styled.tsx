import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  padding: 40px 0 100px 0;
  text-align: center;

  h2 {
    color: #7fdbff;
    font-size: 50px;
    text-align: center;
    margin-bottom: 40px;
  }

  div {
    q {
      display: inline-block;
      margin-bottom: 30px;
      font-style: italic;
    }

    p {
      padding: 0 10px;
    }
  }
`;

export const Stack = styled.div`
  margin-top: 30px;
  h4 {
    font-size: 30px;
    color: #7fdbff;
  }
  div {
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    div {
      background-color: #fff;
      padding: 5px;
      border-radius: 10px;
      margin-left: 5px;
    }
  }

  i {
    cursor: pointer;
    font-size: 30px;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

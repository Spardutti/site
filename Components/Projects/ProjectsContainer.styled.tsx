import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  text-align: center;
  padding-top: 40px;
  background-color: #111111;
  color: #fff;
  h2 {
    font-size: 50px;
    color: #7fdbff;
  }

  h5 {
    font-size: 16px;
  }
`;

export const LatestProjects = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 30px 0;

  h5 {
    width: 100%;
  }
`;

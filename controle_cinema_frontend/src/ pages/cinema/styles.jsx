import styled from "styled-components";

export const Background = styled.div`
  padding: 93px 0px;
  color: white;
  min-height: 100vh;
  background-image: url("/Frame 60.jpg");
  background-position: center;

  width: 100%;
  max-width: 100%;
  overflow: auto;
`;

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const TextFinish = styled.h2`
  font-size: 2rem;
  font-family: "Saira";
  margin-top: 1rem;
  font-weight: 600;
  text-align: center;

  @media (min-width: 481px) and (max-width: 768px) {
    margin-top: 0;
  }
`;

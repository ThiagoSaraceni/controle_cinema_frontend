import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  gap: 40px;
  align-items: start;

  @media (min-width: 481px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    /* display: none; */
  }
`;

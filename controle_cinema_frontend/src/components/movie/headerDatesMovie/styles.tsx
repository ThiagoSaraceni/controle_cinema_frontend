import styled from "styled-components";
import { CardBackground } from "../../card";

interface PropsDayItem {
  isActive: boolean;
}

export const WeekCard = styled(CardBackground)`
  @media (min-width: 481px) and (max-width: 768px) {
    border-radius: 0px;
    position: fixed;
    width: 100%;
    background-color: rgb(45, 53, 63);
  }
`;

export const DivHeader = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 2rem;
  font-family: "Saira";
  font-weight: 300;
  font-style: normal;

  @media (min-width: 481px) and (max-width: 768px) {
    display: flex;
    gap: 1.4rem;
    font-size: 22px;
    flex-wrap: wrap;
    width: 100%;

    border-radius: 0;
  }
`;

export const DayItem = styled.div<PropsDayItem>`
  color: ${({ isActive }) => !isActive && "#737380"};
  cursor: pointer;
`;

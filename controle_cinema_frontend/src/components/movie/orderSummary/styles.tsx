import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { CardBackground } from "../../card";

interface IOrder {
  ticket?: boolean;
}

export const Order = styled.div<IOrder>`
  h3 {
    font-family: "Saira", serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
    font-size: 24px;
    margin-bottom: 12px;
  }

  .flex {
    display: flex;
    align-items: center;
    gap: 22px;
  }

  img {
    width: 3.8em;
    height: 3.8em;
    border-radius: 50%;
    object-fit: cover;
  }

  label {
    font-family: "Saira";
    font-size: 20px;
    font-weight: 300;
  }

  hr {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  span {
    font-family: "Saira";
    font-size: 18px;
  }

  min-height: ${({ ticket }) =>
    ticket ? "calc(-402px + 100vh)" : "calc(-570px + 100vh)"};
`;

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TrashIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  margin-bottom: 12px;
  &:hover {
    color: #ea5455;
    transition: 0.3s ease;
    cursor: pointer;
  }
`;

export const CardSummary = styled(CardBackground)`
  @media (min-width: 481px) and (max-width: 768px) {
    display: none;
  }
`;

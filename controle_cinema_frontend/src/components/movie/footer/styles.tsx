import styled from "styled-components";
import { Card } from "../../card";

interface InterfaceBtn {
  isDisabled?: boolean;
}

export const Fixed = styled(Card)`
  position: fixed;
`;

export const BtnBack = styled.button<InterfaceBtn>`
  border: none;
  cursor: ${({ isDisabled }) => !isDisabled && "pointer"};
  border-radius: 6px;
  width: 15rem;
  padding: 15px;
  border: ${({ isDisabled }) => (isDisabled ? "none" : "1px solid #47DDFF")};
  background-color: ${({ isDisabled }) =>
    isDisabled ? "#BBBBBB" : "transparent"};
  color: ${({ isDisabled }) => (isDisabled ? "#FFFF" : "#47DDFF")};
  font-family: "Saira";
  font-size: 1rem;
`;

export const BtnStraight = styled.button<InterfaceBtn>`
  border: none;
  cursor: ${({ isDisabled }) => !isDisabled && "pointer"};
  border-radius: 6px;
  width: 15rem;
  padding: 15px;
  background-color: ${({ isDisabled }) => (isDisabled ? "#666666" : "#D0FF00")};
  color: ${({ isDisabled }) => (isDisabled ? "#21262" : "black")};
  font-family: "Saira";
  font-size: 1rem;
`;

export const JustifyBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

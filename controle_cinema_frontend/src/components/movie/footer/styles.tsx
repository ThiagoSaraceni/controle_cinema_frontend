import styled from "styled-components";
import { Card } from "../../card";

interface InterfaceBtn {
  isDisabledBtnBack?: boolean;
  isDisableBtnForward?: boolean;
  bgForward?: string;
}

export const Fixed = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 1440px;
  border-radius: 8px;
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%) !important;
  background-color: #21262d;
  padding: 1rem;
`;

export const BtnBack = styled.button<InterfaceBtn>`
  border: none;
  cursor: ${({ isDisabledBtnBack }) => !isDisabledBtnBack && "pointer"};
  border-radius: 6px;
  width: 15rem;
  padding: 15px;
  border: ${({ isDisabledBtnBack }) =>
    isDisabledBtnBack ? "none" : "1px solid #47DDFF"};
  background-color: ${({ isDisabledBtnBack }) =>
    isDisabledBtnBack ? "#BBBBBB" : "transparent"};
  color: ${({ isDisabledBtnBack }) =>
    isDisabledBtnBack ? "#FFFF" : "#47DDFF"};
  font-family: "Saira";
  font-size: 1rem;
`;

export const BtnStraight = styled.button<InterfaceBtn>`
  border: none;
  cursor: ${({ isDisableBtnForward }) => !isDisableBtnForward && "pointer"};
  border-radius: 6px;
  width: 15rem;
  padding: 15px;
  background-color: ${({ bgForward }) => (bgForward ? bgForward : "#D0FF00")};
  background-color: ${({ isDisableBtnForward }) =>
    isDisableBtnForward && "#666666"};
  color: ${({ isDisableBtnForward }) =>
    isDisableBtnForward ? "#21262" : "black"};
  font-family: "Saira";
  font-size: 1rem;
`;

export const JustifyBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 40px;
`;

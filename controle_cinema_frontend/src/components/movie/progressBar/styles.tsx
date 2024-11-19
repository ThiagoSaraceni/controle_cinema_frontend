import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

interface IconProps {
  active?: boolean;
  passed?: boolean;
}

export const Center = styled.div`
  display: flex;
  justify-content: center;
`;

export const BarProgression = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 25%;
`;

export const Icon = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: ${({ active }) => (active ? "12px" : "8px")};
  background-color: ${({ active }) => (active ? "#7367F0" : "#000000")};
  color: ${({ active }) => (active ? "#FFFFFF" : "#A259FF")};
  border: ${({ passed }) =>
    passed ? "1px solid rgba(0, 207, 232, 0.7)" : null};
`;

export const Line = styled.div<IconProps>`
  flex: 1;
  height: 2px;
  border: none;
  background-color: ${({ active }) => (active ? "#7367F0" : "#343c44")};
`;

export const FontAwesome = styled(FontAwesomeIcon)<IconProps>`
  width: ${({ active }) => (active ? "22px" : "18px")};
  height: ${({ active }) => (active ? "22px" : "18px")};
`;

import styled from "styled-components";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

const BadgeBody = styled.div`
  background-color: #699bf7;
  padding: 5px 6px 5px 6px;
  border-radius: 6px;
  width: fit-content;
  font-weight: 600;
  font-family: "Inter", sans-serif;
`;

export const Badge = ({ children }: BadgeProps) => {
  return <BadgeBody>{children}</BadgeBody>;
};

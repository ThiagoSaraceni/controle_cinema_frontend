import styled from "styled-components";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const CardBackground = styled.div`
  border-radius: 8px;
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%) !important;
  background-color: #21262d;
`;

export const Card = ({ children }: CardProps) => {
  return <CardBackground>{children}</CardBackground>;
};

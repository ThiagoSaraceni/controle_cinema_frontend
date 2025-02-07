import styled from "styled-components";
import { ReactNode } from "react";

interface CardBodyProps {
  children: ReactNode;
}

const Padding = styled.div`
  padding: 1.9rem;

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 0.9rem;
  }
`;

export const CardBody = ({ children }: CardBodyProps) => (
  <Padding>{children}</Padding>
);

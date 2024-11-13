import styled from "styled-components";
import { ReactNode } from "react";

interface CardBodyProps {
  children: ReactNode;
}

const Padding = styled.div`
  padding: 1.9rem;
`;

export const CardBody = ({ children }: CardBodyProps) => (
  <Padding>{children}</Padding>
);

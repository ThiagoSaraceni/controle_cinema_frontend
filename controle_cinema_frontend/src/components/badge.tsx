import styled from "styled-components";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  thin?: boolean;
  bgColor?: string;
}

const BadgeBody = styled.div<BadgeProps>`
  padding: 5px 6px 5px 6px;
  width: fit-content;
  border-radius: 6px;
  background-color: ${({ bgColor }) => bgColor || "#699bf7"};
  font-weight: ${({ thin }) => (thin ? 200 : 700)};

  font-family: "Inter", sans-serif;

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 10px;
  }
`;

export const Badge = ({ children, thin, bgColor }: BadgeProps) => {
  return (
    <BadgeBody bgColor={bgColor} thin={thin}>
      {children}
    </BadgeBody>
  );
};

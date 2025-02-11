import styled from "styled-components";
import { CardBackground } from "../../../../components/card";

interface IAvatarProps {
  bgColor?: string;
  disabled?: boolean;
  clicked?: boolean;
}

interface ICircleProps {
  bg?: string;
  color?: string;
}

export const H5 = styled.h5`
  font-weight: 600;
  font-family: "Saira";
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const Legend = styled.ul`
  display: flex;
  gap: 20px;

  li {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  span {
    font-family: "Saira";
    font-weight: 400;
    margin-right: 0.8rem;
  }
`;

export const Circle = styled.div<ICircleProps>`
  background-color: ${({ bg }: any) => bg};
  background-color: ${({ theme, color }: any) => theme.colors[color]};
  border-radius: 50%;
  width: 1.8rem;
  height: 1.8rem;
  padding: 2px;
  display: inline-block;
`;

export const DFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  p {
    font-family: "Saira";
    text-align: center;
    font-weight: 400;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    gap: 7px;
  }
`;

export const DisplayFlexHeader = styled.div`
  display: flex;
  gap: 40px;

  .space {
    height: 18px;
    width: 8px;
  }

  .sit {
    p {
      font-family: "Saira";
      text-align: center;
      font-weight: 700;
    }
    width: 30px;
    height: 30px;

    @media (min-width: 481px) and (max-width: 768px) {
      width: 10px;
      height: 10px;
    }
  }
`;

export const Avatar = styled.div<IAvatarProps>`
  margin: 0.5rem 0rem;
  background-color: ${({ bgColor }) => bgColor ?? "rgb(152, 170, 236)"};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  color: #000000;
  font-weight: bold;
  font-family: "Saira";
  cursor: ${({ disabled }) => !disabled && "pointer"};
  transition: ${({ clicked }) => clicked && "200ms"};
  transform: ${({ clicked }) => clicked && "scale(1.5) !important"};
`;

export const CenterContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Screen = styled.div`
  margin: 1rem 0rem;
  height: 23px;
  background: #d9d9d9;
  width: 100%;
  border-top-right-radius: 17px;
  border-top-left-radius: 17px;
  font-family: "Saira";
  text-align: center;
  color: #000000a4;
  font-weight: bold;
  border-bottom: 3px solid rgb(240, 240, 240);
`;

export const CardWfull = styled(CardBackground)`
  width: 100%;
  overflow: hidden;
`;

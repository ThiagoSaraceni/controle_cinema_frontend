import styled from "styled-components";

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

export const Circle = styled.div`
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
  gap: 40px;
`;

export const Avatar = styled.div`
  margin: 0.5rem 0rem;
  background-color: rgb(152, 170, 236);
  border-radius: 50%;
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const CenterContent = styled.div`
  display: flex;
  justify-content: center;
`;

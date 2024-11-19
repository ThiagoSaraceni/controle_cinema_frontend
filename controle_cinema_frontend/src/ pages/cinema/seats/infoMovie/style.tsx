import styled from "styled-components";

export const BodyInfo = styled.div`
  img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    object-fit: cover;
    background-color: #f0f0f0 !important;
  }

  label {
    font-family: "Saira";
    display: block;
    font-size: 20px;
    margin-bottom: 8px;
  }

  h4 {
    font-family: "Saira";
    font-size: 16px;
    font-weight: 800;
  }

  .bg {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props: any) => props.theme.colors[props.color]};
    //desestruturando
    /* background-color: ${({ theme, color }: any) => theme.colors[color]};
    */
    width: 80px;
    height: 80px;
    border-radius: 50%;
    font-size: 26px;
  }

  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Dflex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

import styled from "styled-components";

export const BodyInfo = styled.div`
  img {
    border-radius: 50%;
    width: 6rem;
    height: 6rem;
    object-fit: cover;
    background-color: #f0f0f0 !important;
  }

  label {
    display: inline-block;
    font-family: "Saira";
    font-size: 20px;
    margin-bottom: 8px;
  }

  h4 {
    font-family: "Saira";
    font-size: 16px;
    font-weight: 800;
  }

  .bg {
    background-color: ${(props: any) => props.theme.colors[props.color]};
    /* background-color: ${({ theme, color }: any) => theme.colors[color]};
    */
    padding: 34px;
    border-radius: 50%;
    font-size: 26px;
  }

  display: flex;
  align-items: center;
  gap: 20px;
`;

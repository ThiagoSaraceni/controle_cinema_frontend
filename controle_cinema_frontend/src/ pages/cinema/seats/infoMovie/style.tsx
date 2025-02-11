import styled from "styled-components";

export const BodyInfo = styled.div`
  img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    object-fit: cover;
    background-color: #f0f0f0 !important;

    @media (min-width: 481px) and (max-width: 768px) {
      width: 50px;
      height: 50px;
    }
  }

  label {
    font-family: "Saira";
    display: block;
    font-size: 20px;
    margin-bottom: 8px;

    @media (min-width: 481px) and (max-width: 768px) {
      font-size: 14px;
      margin: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 200px;
    }
  }

  h4 {
    font-family: "Saira";
    font-size: 13px;
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

    @media (min-width: 481px) and (max-width: 768px) {
      width: 50px;
      height: 50px;

      font-size: 18px;
    }
  }

  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Dflex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 481px) and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

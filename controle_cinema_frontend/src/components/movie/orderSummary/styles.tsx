import styled from "styled-components";

export const Order = styled.div`
  h3 {
    font-family: "Saira", serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
    font-size: 24px;
    margin-bottom: 12px;
  }

  .flex {
    display: flex;
    align-items: center;
    gap: 22px;
  }

  img {
    width: 3.8em;
    height: 3.8em;
    border-radius: 50%;
    object-fit: cover;
  }

  label {
    font-family: "Saira";
    font-size: 20px;
    font-weight: 300;
  }

  hr {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  span {
    font-family: "Saira";
    font-size: 18px;
  }
`;

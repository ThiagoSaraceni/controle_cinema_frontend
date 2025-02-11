import styled from "styled-components";
import { CardBackground } from "../../card";

interface CardMovieProps {
  firstItem: boolean;
}

export const CardImg = styled.div`
  display: flex;

  img {
    width: 30%;
    background-size: cover;
    object-fit: cover;
    aspect-ratio: 2 / 3;
    max-height: 350px;
    border-radius: 4px;

    transition: transform 0.2s ease !important;

    &:hover {
      transform: scale(1.1) !important;
    }
  }

  .movie {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 70%;
    margin-left: 33px;

    .justify-content-between {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    h4 {
      font-size: 24px;
      font-family: "Inika", serif;
      font-weight: 400;
      font-style: normal;
    }

    hr {
      margin-top: 2px;
      margin-bottom: 15px;
    }

    p {
      font-family: "Josefin Slab", serif;
      font-optical-sizing: auto;
      font-weight: 300;
      font-style: normal;
      font-size: 17px;
      display: block;
      margin-bottom: 15px;
    }

    .minute {
      font-family: "Inter", sans-serif;
      font-size: 18px;
    }

    label {
      font-family: "Notable", sans-serif;
      font-weight: 400;
      margin-top: 10px;
      font-size: 22px;
    }

    .text-yellow {
      color: #d0ff00;
    }

    .text-blue {
      color: #699bf7;
    }

    time {
      display: block;
      margin-top: 6px;
      border: 1px solid #737380;
      border-radius: 6px;
      font-family: "Abhaya Libre", serif;
      font-weight: 500;
      font-size: 20px;
      font-style: normal;
      padding: 3px;
      width: fit-content;
      cursor: pointer;
    }

    @media (min-width: 481px) and (max-width: 768px) {
      h4 {
        font-size: 18px;
      }

      span {
        padding-left: 10px;
      }

      p {
        overflow: hidden;
        display: -webkit-box;
        line-height: 20px;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }

      label {
        font-size: 1rem;
      }

      time {
        font-size: 1rem;
      }
    }
  }
`;

export const ImgBgCard = styled.div`
  background-image: url("card-image.png");
  background-size: cover;
`;

export const DFlexGap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

//primeiro item tem 90 px q deixa igual os positions entao dou o margin pra ficar igual e mais 16 de px que é 1rem para n sair do padrao.
export const CardMovie = styled(CardBackground)<CardMovieProps>`
  @media (min-width: 481px) and (max-width: 768px) {
    margin: 1rem;
    margin-top: ${({ firstItem }) => firstItem && "106px"};
  }
`;

import { PageHeader } from "../../../components/pageHeader";
import movieIcon from "../../../assets/movie-icon.png";

import { MoviesCard } from "../../../components/movie/cardMovie";
import { HeaderDates } from "../../../components/movie/headerDatesMovie";
import { mock } from "./mock";
import styled from "styled-components";

export const HomeCinema = () => {
  const DCol = styled.div`
    @media (min-width: 481px) and (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  `;

  return (
    <>
      <DCol>
        <PageHeader
          iconImg={movieIcon}
          altImg="Claquete cinema"
          text="Filmes em cartazes"
        />
        {/* logica do header dates é dar um get pelo dia que tem os filmes e meu retorno sera os filmes desse dia */}
        <HeaderDates />
      </DCol>
      {mock.map((item, key) => (
        <MoviesCard data={item} keyItem={key} />
      ))}
    </>
  );
};

import { PageHeader } from "../../../components/pageHeader";
import movieIcon from "../../../assets/movie-icon.png";

import { MoviesCard } from "../../../components/movie/cardMovie";
import { HeaderDates } from "../../../components/movie/headerDatesMovie";
import { mock } from "./mock";

export const HomeCinema = () => {
  return (
    <>
      <PageHeader
        iconImg={movieIcon}
        altImg="Claquete cinema"
        text="Filmes em cartazes"
      />
      {/* logica do header dates é dar um get pelo dia que tem os filmes e meu retorno sera os filmes desse dia */}
      <HeaderDates />
      {mock.map((item) => (
        <MoviesCard data={item} />
      ))}
    </>
  );
};

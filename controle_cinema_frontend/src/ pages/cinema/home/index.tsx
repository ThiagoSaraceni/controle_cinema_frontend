import { PageHeader } from "../../../components/pageHeader";
import movieIcon from "../../../assets/movie-icon.png";

import { MoviesCard } from "../../../components/movie/cardMovie";
import { HeaderDates } from "../../../components/movie/headerDatesMovie";

export const HomeCinema = () => {
  return (
    <>
      <PageHeader
        iconImg={movieIcon}
        altImg="Claquete cinema"
        text="Filmes em cartazes"
      />
      <HeaderDates />
      <MoviesCard />
    </>
  );
};

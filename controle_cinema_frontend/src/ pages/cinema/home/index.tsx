import { PageHeader } from "../../../components/pageHeader";
import movieIcon from "../../../assets/movie-icon.png";

import { MoviesCard } from "../../../components/movie/cardMovie";
import { HeaderDates } from "../../../components/movie/headerDatesMovie";
import * as GS from "../styles";

export const HomeCinema = () => {
  return (
    <GS.Background>
      <PageHeader
        iconImg={movieIcon}
        altImg="Claquete cinema"
        text="Filmes em cartazes"
      />
      <HeaderDates />
      <MoviesCard />
    </GS.Background>
  );
};

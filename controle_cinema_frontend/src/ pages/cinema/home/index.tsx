import styled from "styled-components";
import { PageHeader } from "../../../components/pageHeader";
import movieIcon from "../../../assets/movie-icon.png";

import { MoviesCard } from "../../../components/movie/cardMovie";
import { HeaderDates } from "../../../components/movie/headerDatesMovie";

const Background = styled.div`
  padding: 92px 200px 92px 200px;
  color: white;
  min-height: 100vh;
  background-image: url("Frame 60.jpg");
`;

export const HomeCinema = () => {
  return (
    <Background>
      <PageHeader
        iconImg={movieIcon}
        altImg="Claquete cinema"
        text="Filmes em cartazes"
      />
      <HeaderDates />
      <MoviesCard />
    </Background>
  );
};

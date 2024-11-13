import styled from "styled-components";
import { PageHeader } from "../../../components/pageHeader";
import movieIcon from "../../../assets/movie-icon.png";

import { CardMovie } from "../../../components/movie/cardMovie";

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
      <CardMovie />
    </Background>
  );
};

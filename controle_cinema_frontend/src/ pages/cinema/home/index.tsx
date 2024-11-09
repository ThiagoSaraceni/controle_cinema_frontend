import styled from "styled-components";
import { PageHeader } from "../../../components/pageHeader";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import movieIcon from "../../../assets/movie-icon.png";

const Background = styled.div`
  //background-color: #08141c;
  padding: 92px 200px 92px 200px;
  color: white;
  min-height: 100vh;
  //opacity: 98%;
  background-image: url("Frame 60.jpg");
`;

export const HomeCinema = () => {
  return (
    <>
      <Background>
        <PageHeader
          iconImg={movieIcon}
          altImg="Claquete cinema"
          text="Filmes em cartazes"
          //iconFontAwesome={<FontAwesomeIcon icon={faClapperboard} />}
          //colorIconFontAwesome="yellow"
        />
      </Background>
    </>
  );
};

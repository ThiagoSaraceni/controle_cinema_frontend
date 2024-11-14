import { Badge } from "../../badge";
import { Card } from "../../card";
import { CardBody } from "../../cardBody";

import styled from "styled-components";

const CardImg = styled.div`
  display: flex;

  img {
    width: 30%;
    background-size: cover;
    object-fit: cover;
    aspect-ratio: 2 / 3;
    max-height: 350px;
    border-radius: 4px;
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
  }
`;

const movieData = {
  filmeName: "Beetlejuice: Os Fantasmas Se Divertem",
  description:
    "Depois de morrerem em um acidente de carro, Bárbara e Adam Maitland se encontram presos, assombrando sua antiga casa. Quando uma nova família e sua filha adolescente, Lydia, mudam para a residência, o casal de fantasmas tenta, sem sucesso, assustar os novos moradores. Suas tentativas de assombração atraem um espírito espalhafatoso, cuja ajuda se torna perigosa tanto para o par de almas, quanto para a inocente Lydia.",
  categoria: "12",
  genero: ["Terror", "Comédia"],
  tempo: "134",
  img_url:
    "https://i0.wp.com/geekpopnews.com.br/wp-content/uploads/2024/07/beetlejuice-2-thumbnail.jpg?resize=1201%2C640&ssl=1",
};

export const MoviesCard = () => {
  return (
    <Card>
      <CardBody>
        <CardImg>
          <img src={movieData?.img_url} alt="imagem-filme" />
          <div className="movie">
            <div>
              <div className="justify-content-between">
                <h4>{movieData?.filmeName}</h4>
                <span className="minute">1h32</span>
              </div>
              <hr />
              <p>{movieData.description}</p>
              <Badge>ANIMAÇÃO</Badge>
            </div>
            <div>
              <label className="text-yellow">SALAS: </label>
              <label className="text-blue">DUBLADO</label>
              <time>19:49</time>
            </div>
            <div>
              <label className="text-yellow">SALAS: </label>
              <label className="text-blue">LEGENDADO</label>
              <time>19:49</time>
            </div>
          </div>
        </CardImg>
      </CardBody>
    </Card>
  );
};

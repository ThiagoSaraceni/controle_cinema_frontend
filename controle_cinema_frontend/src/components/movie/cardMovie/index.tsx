import { Badge } from "../../badge";
import { Card } from "../../card";
import { CardBody } from "../../cardBody";
import * as S from "./style";

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
      <S.ImgBgCard>
        <CardBody>
          <S.CardImg>
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
          </S.CardImg>
        </CardBody>
      </S.ImgBgCard>
    </Card>
  );
};

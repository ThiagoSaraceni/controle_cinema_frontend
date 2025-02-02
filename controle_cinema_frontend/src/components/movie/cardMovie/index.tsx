import { useNavigate } from "react-router-dom";
import { Badge } from "../../badge";
import { Card } from "../../card";
import { CardBody } from "../../cardBody";
import * as S from "./style";
import { useDispatch } from "react-redux";
import { addMovieInfo } from "../../../redux/movieSlice";

export interface MovieRoom {
  data: {
    id: number;
    movie: {
      movieName: string;
      description: string;
      categoria: string;
      gender: string[];
      time: number;
      img_url: string;
    };
    dateTimeDubbed: string[];
    dateTimeSubtitled: string[];
    status: string;
    room_id: number;
  };
}

export const MoviesCard = ({ data }: MovieRoom) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goSeatPage = (id: number) => {
    navigate(`/seats/${id}`);
    dispatch(addMovieInfo(data?.movie));
  };

  return (
    <Card>
      <S.ImgBgCard>
        <CardBody>
          <S.CardImg>
            <img src={data?.movie?.img_url} alt="imagem-filme" />
            <div className="movie">
              <div>
                <div className="justify-content-between">
                  <h4>{data?.movie?.movieName}</h4>
                  <span className="minute">1h32</span>
                </div>
                <hr />
                <p>{data?.movie?.description}</p>
                <S.DFlexGap>
                  {data?.movie?.gender?.map((item) => (
                    <Badge>{item}</Badge>
                  ))}
                </S.DFlexGap>
              </div>
              <div>
                <label className="text-yellow">SALAS: </label>
                <label className="text-blue">DUBLADO</label>
                <S.DFlexGap>
                  {data?.dateTimeDubbed?.map((item) => (
                    <time onClick={() => goSeatPage(data?.room_id)}>
                      {item}
                    </time>
                  ))}
                </S.DFlexGap>
              </div>
              <div>
                <label className="text-yellow">SALAS: </label>
                <label className="text-blue">LEGENDADO</label>
                <S.DFlexGap>
                  {data?.dateTimeSubtitled?.map((item) => (
                    <time onClick={() => goSeatPage(data?.room_id)}>
                      {item}
                    </time>
                  ))}
                </S.DFlexGap>
              </div>
            </div>
          </S.CardImg>
        </CardBody>
      </S.ImgBgCard>
    </Card>
  );
};

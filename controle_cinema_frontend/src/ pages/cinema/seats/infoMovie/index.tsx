import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "../../../../components/card";
import { CardBody } from "../../../../components/cardBody";
import * as S from "./style";
import { faCalendar, faClock, faFilm } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux";

export const InfoMovie = () => {
  const { movieInfo } = useSelector((state: RootState) => state.movie);

  const INFOS = [
    {
      title: "Sala",
      label: "3",
      icon: <FontAwesomeIcon icon={faFilm} />,
      color: "success",
    },
    {
      title: "Data",
      label: "24/10/2024",
      icon: <FontAwesomeIcon icon={faCalendar} />,
      color: "primary",
    },
    {
      title: "Horário",
      label: "19:29",
      icon: <FontAwesomeIcon icon={faClock} />,
      color: "warning",
    },
  ];

  return (
    <Card>
      <CardBody>
        <S.Dflex>
          <S.BodyInfo>
            <img src={movieInfo?.img_url} alt="blabla" />
            <div>
              <label>{movieInfo?.movieName}</label>
              <h4>Filme</h4>
            </div>
          </S.BodyInfo>
          {INFOS.map((item) => (
            <S.BodyInfo color={item?.color}>
              <div className="bg">{item?.icon}</div>
              <div>
                <label>{item?.label}</label>
                <h4>{item?.title}</h4>
              </div>
            </S.BodyInfo>
          ))}
        </S.Dflex>
      </CardBody>
    </Card>
  );
};

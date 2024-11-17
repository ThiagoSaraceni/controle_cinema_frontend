import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "../../../../components/card";
import { CardBody } from "../../../../components/cardBody";
import * as S from "./style";
import { faCalendar, faClock, faFilm } from "@fortawesome/free-solid-svg-icons";

export const InfoMovie = () => {
  const INFOS = [
    {
      title: "Sala",
      label: "3",
      icon: <FontAwesomeIcon icon={faFilm} style={{ fontSize: "35px" }} />,
      color: "success",
    },
    {
      title: "Data",
      label: "24/10/2024",
      icon: <FontAwesomeIcon icon={faCalendar} style={{ fontSize: "35px" }} />,
      color: "primary",
    },
    {
      title: "Horário",
      label: "19:29",
      icon: <FontAwesomeIcon icon={faClock} style={{ fontSize: "35px" }} />,
      color: "warning",
    },
  ];

  return (
    <>
      <Card>
        <CardBody>
          <S.Dflex>
            <S.BodyInfo>
              <img
                src="https://i0.wp.com/geekpopnews.com.br/wp-content/uploads/2024/07/beetlejuice-2-thumbnail.jpg?resize=1201%2C640&ssl=1"
                alt="blabla"
              />
              <div>
                <label>Beatle Juice</label>
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
    </>
  );
};

import { Card } from "../../../../components/card";
import { CardBody } from "../../../../components/cardBody";
import * as S from "./styles";

export const CardSeats = () => {
  interface SubtitleInterface {
    label: string;
    color: string;
  }

  const SUBTITLES: SubtitleInterface[] = [
    {
      label: "DISPONÍVEL",
      color: "primary",
    },
    {
      label: "SELECIONADO",
      color: "light",
    },
    {
      label: "RESERVADO",
      color: "danger",
    },
  ];

  return (
    <Card>
      <CardBody>
        <S.H5>LEGENDA</S.H5>
        <S.Legend>
          {SUBTITLES.map((item) => (
            <li>
              <S.Circle color={item?.color} />
              <span>{item?.label}</span>
            </li>
          ))}
        </S.Legend>
      </CardBody>
    </Card>
  );
};

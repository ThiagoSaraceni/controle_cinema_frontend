import { Card } from "../../../../components/card";
import { CardBody } from "../../../../components/cardBody";
import { SeatPlaces } from "../places";
import { SubtitlesChair } from "../subtitlesChair";
import * as S from "./styles";

export const CardSeats = () => {
  return (
    <S.CardWfull>
      <CardBody>
        <SeatPlaces />
        <SubtitlesChair />
      </CardBody>
    </S.CardWfull>
  );
};

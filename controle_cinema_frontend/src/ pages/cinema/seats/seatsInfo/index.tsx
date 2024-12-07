import { Card } from "../../../../components/card";
import { CardBody } from "../../../../components/cardBody";
import { SeatPlaces } from "../places";
import { SubtitlesChair } from "../subtitlesChair";

export const CardSeats = () => {
  return (
    <Card>
      <CardBody>
        <SeatPlaces />
        <SubtitlesChair />
      </CardBody>
    </Card>
  );
};

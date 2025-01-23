import { SeatStatus } from ".";
import * as S from "../seatsInfo/styles";

type HeaderSeatsProps = {
  seats: SeatStatus[]; // Array de números 0 | 1 | 2
};

export const HeaderSeats = ({ seats }: HeaderSeatsProps) => {
  console.log({ seats });
  return (
    <S.DisplayFlexHeader>
      <div className="space" />
      {seats.map((_, colIndex) => (
        <div className="sit" key={colIndex}>
          <p>{colIndex + 1}</p>
        </div>
      ))}
      <p />
    </S.DisplayFlexHeader>
  );
};

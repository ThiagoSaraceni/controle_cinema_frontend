import { UserBlockSvg } from "../../../../assets/svg/cinema/user-icon";
import * as S from "../seatsInfo/styles";

interface SubtitleInterface {
  label: string;
  color?: string;
  bg?: string;
}

const SUBTITLES: SubtitleInterface[] = [
  {
    label: "DISPONÍVEL",
    color: "rgb(152, 170, 236)",
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

export const SubtitlesChair = () => {
  return (
    <>
      <S.Avatar bgColor="#D0FF00">h4</S.Avatar>
      <S.Avatar bgColor="#EA5455">
        <UserBlockSvg />
      </S.Avatar>

      <S.H5>LEGENDA</S.H5>
      <S.Legend>
        {SUBTITLES.map((item) => (
          <li>
            <S.Circle color={item?.color} bg={item?.color} />
            <span>{item?.label}</span>
          </li>
        ))}
      </S.Legend>
    </>
  );
};

import * as S from "../seatsInfo/styles";

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

export const SubtitlesChair = () => {
  return (
    <>
      <S.H5>LEGENDA</S.H5>
      <S.Legend>
        {SUBTITLES.map((item) => (
          <li>
            <S.Circle color={item?.color} />
            <span>{item?.label}</span>
          </li>
        ))}
      </S.Legend>
    </>
  );
};

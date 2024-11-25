import {
  faCircleCheck,
  faCouch,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";

export const ProgressBar = () => {
  //TODO: para me reentender depois, props passed e quando ja passei dessa fase, no caso estava em assentos e agora em bilheteria, entao passei da parte de assentos. active e o momento atual que estou
  const index = 1;
  return (
    <S.Center>
      <S.BarProgression>
        <S.Icon active={Number(index) === 0} passed={index > 0}>
          <S.FontAwesome icon={faCouch} />
        </S.Icon>
        <S.Line active={Number(index) >= 1} />
        <S.Icon active={Number(index) === 1} passed={index > 1}>
          <S.FontAwesome active={Number(index) === 1} icon={faTicket} />
        </S.Icon>
        <S.Line active={Number(index) >= 2} />
        <S.Icon active={Number(index) === 2}>
          <S.FontAwesome active={Number(index) === 2} icon={faCircleCheck} />
        </S.Icon>
      </S.BarProgression>
    </S.Center>
  );
};

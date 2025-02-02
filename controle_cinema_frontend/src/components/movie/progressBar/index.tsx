import {
  faCircleCheck,
  faCouch,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";

interface ProgressBarInterface {
  index: number;
}

export const ProgressBar = ({ index }: ProgressBarInterface) => {
  //TODO: para me reentender depois, props passed e quando ja passei dessa fase, no caso estava em assentos e agora em bilheteria, entao passei da parte de assentos. active e o momento atual que estou
  return (
    <S.Center>
      <S.BarProgression>
        <S.Icon active={index === 0} passed={index > 0}>
          <S.FontAwesome icon={faCouch} />
        </S.Icon>
        <S.Line active={index >= 1} />
        <S.Icon active={index === 1} passed={index > 1}>
          <S.FontAwesome active={index === 1} icon={faTicket} />
        </S.Icon>
        <S.Line active={index >= 2} />
        <S.Icon active={index === 2}>
          <S.FontAwesome active={index === 2} icon={faCircleCheck} />
        </S.Icon>
      </S.BarProgression>
    </S.Center>
  );
};

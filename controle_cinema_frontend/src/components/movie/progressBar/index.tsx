import {
  faCircleCheck,
  faCouch,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";

export const ProgressBar = () => {
  //TODO: para me reentender depois, props passed e quando ja passei dessa fase, no caso estava em assentos e agora em bilheteria, entao passei da parte de assentos. active e o momento atual que estou
  return (
    <>
      <S.Center>
        <S.BarProgression>
          <S.Icon passed>
            <S.FontAwesome icon={faCouch} />
          </S.Icon>
          <S.Line active />
          <S.Icon active>
            <S.FontAwesome active icon={faTicket} />
          </S.Icon>
          <S.Line />
          <S.Icon>
            <S.FontAwesome icon={faCircleCheck} />
          </S.Icon>
        </S.BarProgression>
      </S.Center>
    </>
  );
};

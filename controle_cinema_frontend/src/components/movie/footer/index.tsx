import { CardBody } from "../../cardBody";
import * as S from "./styles";

interface InterfaceFooterMovie {
  txtBtnForward?: string;
  isDisabled?: boolean;
  bgForward?: string;
  isDisabledBtnBack?: boolean;
  isDisableBtnForward?: boolean;
}

export const FooterMovie = ({
  txtBtnForward,
  isDisabled,
  bgForward,
  isDisabledBtnBack,
  isDisableBtnForward,
}: InterfaceFooterMovie) => {
  //botao adiante, se tiver algo selecionado o disabled dele e tirado na hora.

  // ver depois se da pra mudar o cursor no disabled
  return (
    <>
      <S.Fixed>
        <CardBody>
          <S.JustifyBetween>
            <S.BtnBack isDisabledBtnBack={isDisabledBtnBack}>VOLTAR</S.BtnBack>
            <S.BtnStraight
              bgForward={bgForward}
              isDisableBtnForward={isDisableBtnForward}
            >
              {txtBtnForward}
            </S.BtnStraight>
          </S.JustifyBetween>
        </CardBody>
      </S.Fixed>
    </>
  );
};

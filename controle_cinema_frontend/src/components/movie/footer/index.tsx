import { CardBody } from "../../cardBody";
import * as S from "./styles";

interface InterfaceFooterMovie {
  txtBtnForward?: string;
}

export const FooterMovie = ({ txtBtnForward }: InterfaceFooterMovie) => {
  //botao adiante, se tiver algo selecionado o disabled dele e tirado na hora.

  // ver depois se da pra mudar o cursor no disabled
  return (
    <>
      <S.Fixed>
        <CardBody>
          <S.JustifyBetween>
            <S.BtnBack>VOLTAR</S.BtnBack>
            <S.BtnStraight>{txtBtnForward}</S.BtnStraight>
          </S.JustifyBetween>
        </CardBody>
      </S.Fixed>
    </>
  );
};

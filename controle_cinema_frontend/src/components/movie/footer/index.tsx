import * as S from "./styles";

interface InterfaceFooterMovie {
  txtBtnForward?: string;
  isDisabled?: boolean;
  bgForward?: string;
  isDisabledBtnBack?: boolean;
  isDisableBtnForward?: boolean;
  clickBtnForward?: () => void;
  clickBtnBack?: () => void;
}

export const FooterMovie = ({
  txtBtnForward,
  isDisabled,
  bgForward,
  isDisabledBtnBack,
  isDisableBtnForward,
  clickBtnForward,
  clickBtnBack,
}: InterfaceFooterMovie) => {
  //botao adiante, se tiver algo selecionado o disabled dele e tirado na hora.

  // ver depois se da pra mudar o cursor no disabled

  return (
    <S.Fixed>
      <S.JustifyBetween>
        <S.BtnBack isDisabledBtnBack={isDisabledBtnBack} onClick={clickBtnBack}>
          VOLTAR
        </S.BtnBack>
        <S.BtnStraight
          disabled={isDisableBtnForward}
          onClick={clickBtnForward}
          bgForward={bgForward}
          isDisableBtnForward={isDisableBtnForward}
        >
          {txtBtnForward}
        </S.BtnStraight>
      </S.JustifyBetween>
    </S.Fixed>
  );
};

import { AlertIcon } from "../../assets/svg/cinema/alert-colered-icon";
import * as S from "./styles";

interface PropsModalAlert {
  isOpen: boolean;
  description?: string;
  title?: string;
  clickBtnCancel?: () => void;
  clickBtnConfirm?: () => void;
}

export const ModalAlert = ({
  isOpen,
  title = "Atenção",
  description,
  clickBtnCancel,
  clickBtnConfirm,
}: PropsModalAlert) => {
  return (
    <>
      {isOpen && (
        <S.BackgroundModal isOpen={isOpen}>
          <S.ContainerModal isOpen={isOpen}>
            <S.ContainerIcon>
              <AlertIcon />
            </S.ContainerIcon>

            <div className="p-3">
              <h4 className="title">{title}!</h4>
              <p className="description">{description}</p>
              <div className="space-between">
                <button className="btnBack" onClick={clickBtnCancel}>
                  Cancelar
                </button>
                <button className="btnContinue" onClick={clickBtnConfirm}>
                  Continuar
                </button>
              </div>
            </div>
          </S.ContainerModal>
        </S.BackgroundModal>
      )}
    </>
  );
};

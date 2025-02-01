import { AlertIcon } from "../../assets/svg/cinema/alert-colered-icon";
import * as S from "./styles";

export const ModalAlert = () => {
  return (
    <S.BackgroundModal>
      <S.ContainerModal>
        <S.ContainerIcon>
          <AlertIcon />
        </S.ContainerIcon>

        <div className="p-3">
          <h4 className="title">Atenção!</h4>
          <p className="description">
            Deseja mesmo excluir essa sessão do seu carrinho?
          </p>
          <div className="space-between">
            <button className="btnBack">Cancelar</button>
            <button className="btnContinue">Continuar</button>
          </div>
        </div>
      </S.ContainerModal>
    </S.BackgroundModal>
  );
};

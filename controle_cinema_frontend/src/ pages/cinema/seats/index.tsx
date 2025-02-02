import { Card } from "../../../components/card";
import { CardBody } from "../../../components/cardBody";
import * as S from "./styles";
import { InfoMovie } from "./infoMovie";
import { CardSeats } from "./seatsInfo";
import { OrderSummary } from "../../../components/movie/orderSummary";
import { ProgressBar } from "../../../components/movie/progressBar";
import { FooterMovie } from "../../../components/movie/footer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { useNavigate } from "react-router-dom";
import { ModalAlert } from "../../../components/modal";
import { handleOpenModal } from "../../../redux/movieSlice";

export const Seats = () => {
  const navigate = useNavigate();
  const { seatsMarked, modal } = useSelector((state: RootState) => state.movie);
  const dispatch = useDispatch();

  const isTicketsChosed = seatsMarked?.length > 0;

  const goFinishedBuy = () => {
    if (isTicketsChosed) {
      return navigate(`/tickets`);
    }
  };

  const handleOpeningModal = () => dispatch(handleOpenModal(!modal));

  const cancelBuy = () => {
    navigate(`/`);
    dispatch(handleOpenModal(false));
  };

  return (
    <>
      <Card>
        <CardBody>
          <ProgressBar index={0} />
        </CardBody>
      </Card>
      <InfoMovie />
      <S.Grid>
        <CardSeats />
        <OrderSummary />
      </S.Grid>
      <FooterMovie
        isDisabledBtnBack={true}
        txtBtnForward="ESCOLHER INGRESSOS"
        isDisableBtnForward={!isTicketsChosed}
        clickBtnForward={goFinishedBuy}
      />
      <ModalAlert
        clickBtnCancel={handleOpeningModal}
        clickBtnConfirm={cancelBuy}
        isOpen={modal}
        description="Deseja mesmo excluir essa sessão do seu carrinho?"
      />
    </>
  );
};

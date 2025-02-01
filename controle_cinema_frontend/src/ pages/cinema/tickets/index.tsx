import { Card } from "../../../components/card";
import { CardBody } from "../../../components/cardBody";
import { ProgressBar } from "../../../components/movie/progressBar";
import * as Styled from "../seats/styles";
import { OrderSummary } from "../../../components/movie/orderSummary";
import { FooterMovie } from "../../../components/movie/footer";
import { BuyTickets } from "../../../components/movie/buyTickets";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { ModalAlert } from "../../../components/modal";
import { handleOpenModal } from "../../../redux/movieSlice";

export const TicketsMovie = () => {
  const navigate = useNavigate();

  const { finishPurchase, modal } = useSelector(
    (state: RootState) => state.movie
  );

  console.log(finishPurchase);

  const handleEndBuy = () => {
    //exemplo enviando ao banco o finish purchase
    console.log("compra finalizada", finishPurchase);
    navigate(`/end-purchase`);
  };

  const dispatch = useDispatch();
  const handleOpeningModal = () => dispatch(handleOpenModal(!modal));

  const cancelBuy = () => {
    navigate(`/`);
    dispatch(handleOpenModal(false));
  };
  // TODO: colocar aviso na tela se n tem items no meu useSelector mostrar que precisa escolher um filme e os assentos
  return (
    <>
      <Card>
        <CardBody>
          <ProgressBar index={1} />
        </CardBody>
      </Card>
      <Styled.Grid>
        <BuyTickets />
        <OrderSummary ticket />
      </Styled.Grid>
      <FooterMovie
        bgForward="#28C76F"
        clickBtnBack={() => navigate(-1)}
        clickBtnForward={handleEndBuy}
        txtBtnForward="FINALIZAR  COMPRA"
        isDisableBtnForward={!finishPurchase?.endBuy}
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

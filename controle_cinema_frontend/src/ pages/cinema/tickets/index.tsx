import { Card } from "../../../components/card";
import { CardBody } from "../../../components/cardBody";
import { ProgressBar } from "../../../components/movie/progressBar";
import * as Styled from "../seats/styles";
import { OrderSummary } from "../../../components/movie/orderSummary";
import { FooterMovie } from "../../../components/movie/footer";
import { BuyTickets } from "../../../components/movie/buyTickets";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";

export const TicketsMovie = () => {
  const navigate = useNavigate();

  const { finishPurchase } = useSelector((state: RootState) => state.movie);

  console.log(finishPurchase);
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
        clickBtnForward={() => console.log("compra finalizada", finishPurchase)}
        txtBtnForward="FINALIZAR  COMPRA"
        isDisableBtnForward={!finishPurchase?.endBuy}
      />
    </>
  );
};

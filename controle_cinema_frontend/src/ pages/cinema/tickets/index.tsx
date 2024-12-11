import { Card } from "../../../components/card";
import { CardBody } from "../../../components/cardBody";
import { ProgressBar } from "../../../components/movie/progressBar";
import * as GS from "../styles";
import * as Styled from "../seats/styles";
import { OrderSummary } from "../../../components/movie/orderSummary";
import { FooterMovie } from "../../../components/movie/footer";
import { BuyTickets } from "../../../components/movie/buyTickets";

export const TicketsMovie = () => {
  return (
    <>
      <Card>
        <CardBody>
          <ProgressBar />
        </CardBody>
      </Card>
      <Styled.Grid>
        <BuyTickets />
        <OrderSummary />
      </Styled.Grid>
      <FooterMovie bgForward="#28C76F" txtBtnForward="FINALIZAR  COMPRA" />
    </>
  );
};

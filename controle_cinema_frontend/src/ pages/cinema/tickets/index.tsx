import { Card } from "../../../components/card";
import { CardBody } from "../../../components/cardBody";
import { ProgressBar } from "../../../components/movie/progressBar";
import * as Styled from "../seats/styles";
import { OrderSummary } from "../../../components/movie/orderSummary";
import { FooterMovie } from "../../../components/movie/footer";
import { BuyTickets } from "../../../components/movie/buyTickets";
import { useNavigate } from "react-router-dom";

export const TicketsMovie = () => {
  const navigate = useNavigate();

  return (
    <>
      <Card>
        <CardBody>
          <ProgressBar />
        </CardBody>
      </Card>
      <Styled.Grid>
        <BuyTickets />
        <OrderSummary ticket />
      </Styled.Grid>
      <FooterMovie
        bgForward="#28C76F"
        clickBtnBack={() => navigate(`/seats`)}
        txtBtnForward="FINALIZAR  COMPRA"
      />
    </>
  );
};

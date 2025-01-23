import { Card } from "../../../components/card";
import { CardBody } from "../../../components/cardBody";
import * as S from "./styles";
import { InfoMovie } from "./infoMovie";
import { CardSeats } from "./seatsInfo";
import { OrderSummary } from "../../../components/movie/orderSummary";
import { ProgressBar } from "../../../components/movie/progressBar";
import { FooterMovie } from "../../../components/movie/footer";

export const Seats = () => {
  const lessThanOneTicketsChoosen = true;

  return (
    <>
      <Card>
        <CardBody>
          <ProgressBar />
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
        isDisableBtnForward={lessThanOneTicketsChoosen}
      />
    </>
  );
};

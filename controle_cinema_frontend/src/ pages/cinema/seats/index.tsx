import { Card } from "../../../components/card";
import { CardBody } from "../../../components/cardBody";
import * as S from "./styles";
import { InfoMovie } from "./infoMovie";
import { CardSeats } from "./seatsInfo";
import { OrderSummary } from "../../../components/movie/orderSummary";
import { ProgressBar } from "../../../components/movie/progressBar";
import { FooterMovie } from "../../../components/movie/footer";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { useNavigate } from "react-router-dom";

export const Seats = () => {
  const navigate = useNavigate();
  const { seatsMarked } = useSelector((state: RootState) => state.movie);

  const isTicketsChosed = seatsMarked?.length > 0;

  const goFinishedBuy = () => {
    if (isTicketsChosed) {
      return navigate(`/tickets`);
    }
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
    </>
  );
};

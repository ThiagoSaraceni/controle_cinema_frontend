import styled from "styled-components";
import { Card } from "../../../components/card";
import { CardBody } from "../../../components/cardBody";
import { InfoMovie } from "./infoMovie";
import { CardSeats } from "./seatsInfo";
import { OrderSummary } from "../../../components/movie/orderSummary";
import * as S from "./styles";

const Bg = styled.div`
  padding: 92px 200px 92px 200px;
  color: white;
  min-height: 100vh;
  background-image: url("Frame 60.jpg");
`;

export const Seats = () => {
  return (
    <Bg>
      <Card>
        <CardBody>
          <h4>oi</h4>
        </CardBody>
      </Card>
      <InfoMovie />
      <S.Grid>
        <CardSeats />
        <OrderSummary />
      </S.Grid>
    </Bg>
  );
};

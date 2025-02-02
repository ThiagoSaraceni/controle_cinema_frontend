import { useState } from "react";
import { Card } from "../../card";
import { CardBody } from "../../cardBody";
import { Ticket } from "./ticket";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { finishPurchase } from "../../../redux/movieSlice";

export const BuyTickets = () => {
  const { seatsMarked, finishPurchase: isFinishedPurchase } = useSelector(
    (state: RootState) => state.movie
  );
  const qntSeats = seatsMarked?.length;
  const [fullPrice, setFullPrice] = useState(0);
  const [halfPrice, setHalfPrice] = useState(0);
  const sumTickets = halfPrice + fullPrice;

  const dispatch = useDispatch();

  const cantAdd = qntSeats === sumTickets;

  if (cantAdd && !isFinishedPurchase?.endBuy) {
    dispatch(
      finishPurchase({ endBuy: true, tickets: { halfPrice, fullPrice } })
    );
  } else if (!cantAdd && isFinishedPurchase?.endBuy) {
    dispatch(
      finishPurchase({ endBuy: false, tickets: { halfPrice: 0, fullPrice: 0 } })
    );
  }

  console.log({ fullPrice, halfPrice });

  return (
    <Card>
      <CardBody>
        <Ticket
          title="INTEIRA"
          value="24.00"
          currentValue={fullPrice}
          setValue={setFullPrice}
          cantAdd={cantAdd}
        />
        <Ticket
          margin
          title="MEIA"
          value="12.00"
          currentValue={halfPrice}
          setValue={setHalfPrice}
          cantAdd={cantAdd}
        />
      </CardBody>
    </Card>
  );
};

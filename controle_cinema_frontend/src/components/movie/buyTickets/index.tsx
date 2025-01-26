import { useState } from "react";
import { Card } from "../../card";
import { CardBody } from "../../cardBody";
import { Ticket } from "./ticket";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";

export const BuyTickets = () => {
  const { seatsMarked } = useSelector((state: RootState) => state.movie);
  const qntSeats = seatsMarked?.length;
  const [fullPrice, setFullPrice] = useState(0);
  const [halfPrice, setHalfPrice] = useState(0);
  const sumTickets = halfPrice + fullPrice;

  const cantAdd = qntSeats === sumTickets;

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

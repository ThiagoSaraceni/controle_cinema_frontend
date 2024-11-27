import { Card } from "../../card";
import { CardBody } from "../../cardBody";
import { Ticket } from "./ticket";

export const BuyTickets = () => {
  return (
    <Card>
      <CardBody>
        <Ticket title="INTEIRA" value="24.00" />
        <Ticket margin title="MEIA" value="12.00" />
      </CardBody>
    </Card>
  );
};

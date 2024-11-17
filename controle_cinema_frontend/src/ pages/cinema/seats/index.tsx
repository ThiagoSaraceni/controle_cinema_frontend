import styled from "styled-components";
import { Card } from "../../../components/card";
import { CardBody } from "../../../components/cardBody";
import { InfoMovie } from "./infoMovie";

const Bg = styled.div`
  background-color: #08141c;
  padding: 92px 200px 92px 200px;
  color: white;
  min-height: 100vh;
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
    </Bg>
  );
};

import { useSelector } from "react-redux";
import { Badge } from "../../badge";
import { Card } from "../../card";
import { CardBody } from "../../cardBody";
import * as S from "./styles";
import { RootState } from "../../../redux";

interface IPropsOrder {
  ticket?: boolean;
}

export const OrderSummary = ({ ticket }: IPropsOrder) => {
  const { seatsMarked } = useSelector((state: RootState) => state.movie);
  console.log(seatsMarked);

  return (
    <Card>
      <CardBody>
        <S.Order ticket={ticket}>
          <h3>RESUMO DO PEDIDO</h3>
          <div className="flex">
            <img
              src="https://i0.wp.com/geekpopnews.com.br/wp-content/uploads/2024/07/beetlejuice-2-thumbnail.jpg?resize=1201%2C640&ssl=1"
              alt="logo-filme"
            />
            <div>
              <label>Coringa - Delírio a Dois</label>
              <div className="flex">
                <Badge thin bgColor={`#F24E1E`}>
                  +16
                </Badge>
                <Badge thin>Dublado</Badge>
              </div>
            </div>
          </div>
          <hr />
          <span>
            ASSENTOS:
            {seatsMarked.map((item, key) => (
              <span key={key}>
                &nbsp; {item?.fileira}
                {item?.coluna}
                {key !== seatsMarked.length - 1 && ","}
              </span>
            ))}
          </span>
        </S.Order>
      </CardBody>
    </Card>
  );
};

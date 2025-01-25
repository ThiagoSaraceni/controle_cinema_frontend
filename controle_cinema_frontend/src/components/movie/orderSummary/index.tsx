import { useSelector } from "react-redux";
import { Badge } from "../../badge";
import { Card } from "../../card";
import { CardBody } from "../../cardBody";
import * as S from "./styles";
import { RootState } from "../../../redux";
import { Movie } from "../../../redux/movieSlice";

interface IPropsOrder {
  ticket?: boolean;
  orderInfo?: Movie | null;
}

export const OrderSummary = ({ ticket, orderInfo }: IPropsOrder) => {
  const { seatsMarked } = useSelector((state: RootState) => state.movie);

  return (
    <Card>
      <CardBody>
        <S.Order ticket={ticket}>
          <h3>RESUMO DO PEDIDO</h3>
          <div className="flex">
            <img src={orderInfo?.img_url} alt="logo-filme" />
            <div>
              <label>{orderInfo?.movieName}</label>
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

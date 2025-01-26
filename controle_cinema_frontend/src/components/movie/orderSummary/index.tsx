import { useSelector } from "react-redux";
import { Badge } from "../../badge";
import { Card } from "../../card";
import { CardBody } from "../../cardBody";
import { RootState } from "../../../redux";
import { Movie } from "../../../redux/movieSlice";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";

interface IPropsOrder {
  ticket?: boolean;
  orderInfo?: Movie | null;
}

export const OrderSummary = ({ ticket, orderInfo }: IPropsOrder) => {
  const { seatsMarked, movieInfo } = useSelector(
    (state: RootState) => state.movie
  );

  // TODO: colocar cor para os badges de classificacao filme
  return (
    <Card>
      <CardBody>
        <S.Order ticket={ticket}>
          <S.FlexBetween>
            <h3>RESUMO DO PEDIDO</h3>
            <S.TrashIcon icon={faTrashCan} />
          </S.FlexBetween>
          <div className="flex">
            <img src={movieInfo?.img_url} alt="logo-filme" />
            <div>
              <label>{movieInfo?.movieName}</label>
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

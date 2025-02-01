import { useDispatch, useSelector } from "react-redux";
import { Badge } from "../../badge";
import { Card } from "../../card";
import { CardBody } from "../../cardBody";
import { RootState } from "../../../redux";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";
import { handleOpenModal } from "../../../redux/movieSlice";

interface IPropsOrder {
  ticket?: boolean;
}

export const OrderSummary = ({ ticket }: IPropsOrder) => {
  const dispatch = useDispatch();
  const { seatsMarked, movieInfo, modal } = useSelector(
    (state: RootState) => state.movie
  );

  const handleOpeningModal = () => dispatch(handleOpenModal(!modal));

  // TODO: colocar cor para os badges de classificacao filme
  return (
    <Card>
      <CardBody>
        <S.Order ticket={ticket}>
          <S.FlexBetween>
            <h3>RESUMO DO PEDIDO</h3>
            <S.TrashIcon onClick={handleOpeningModal} icon={faTrashCan} />
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

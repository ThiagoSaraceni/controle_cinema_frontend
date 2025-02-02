import { faPlus, faTicket } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";

interface TicketProps {
  margin?: boolean;
  title: string;
  value: string;
  currentValue: number;
  setValue: any;
  cantAdd: boolean;
}

export const Ticket = ({
  margin,
  title,
  value,
  currentValue,
  setValue,
  cantAdd,
}: TicketProps) => {
  const handleAddMore = () => {
    if (!cantAdd) {
      return setValue(currentValue + 1);
    }
  };

  const handleTakeIt = () => {
    if (currentValue > 0) {
      return setValue(currentValue - 1);
    }
  };

  return (
    <S.DisplayFlex mg={margin}>
      <S.DFAl>
        <S.BgIcon>
          <S.FontAwesome icon={faTicket} />
        </S.BgIcon>
        <S.ColumnInfo>
          <span>R$ {value}</span>
          <label>{title}</label>
        </S.ColumnInfo>
      </S.DFAl>
      <S.DFAl>
        <S.BtnTicket isDisabled={currentValue === 0} onClick={handleTakeIt}>
          <S.Less />
        </S.BtnTicket>
        <S.Span>{currentValue}</S.Span>
        <S.BtnTicket isDisabled={cantAdd} onClick={handleAddMore}>
          <S.TxtBlack>
            <S.FontAwesomee icon={faPlus} />
          </S.TxtBlack>
        </S.BtnTicket>
      </S.DFAl>
    </S.DisplayFlex>
  );
};

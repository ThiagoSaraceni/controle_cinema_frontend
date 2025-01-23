import { faPlus, faTicket } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";

interface TicketProps {
  margin?: boolean;
  title: string;
  value: string;
}

export const Ticket = ({ margin, title, value }: TicketProps) => {
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
        <S.BtnTicket isDisabled>
          <S.Less />
        </S.BtnTicket>
        <S.Span>2</S.Span>
        <S.BtnTicket>
          <S.TxtBlack>
            <S.FontAwesomee icon={faPlus} />
          </S.TxtBlack>
        </S.BtnTicket>
      </S.DFAl>
    </S.DisplayFlex>
  );
};

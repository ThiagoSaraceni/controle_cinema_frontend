import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

interface BtnTicketInterface {
  isDisabled?: boolean;
}

interface InterfaceDisplay {
  mg?: boolean;
}

export const BgIcon = styled.div`
  background-color: rgb(115, 103, 240, 0.2);
  border-radius: 6px;
  padding: 1rem;
  color: #7367f0;
`;

export const FontAwesome = styled(FontAwesomeIcon)`
  font-size: 30px;
  transform: rotate(220deg);
`;

export const ColumnInfo = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-family: "Saira";
    font-size: 1.2rem;
  }

  span {
    font-family: "Saira";
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

export const DFAl = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const DisplayFlex = styled.div<InterfaceDisplay>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #7367f0;
  border-radius: 6px;
  padding: 1rem;
  margin: ${({ mg }) => mg && "1rem 0rem"};
`;

export const Span = styled.span`
  font-family: "Saira";
  font-weight: 600;
  font-size: 2rem;
`;

export const TxtBlack = styled.span`
  font-size: 1.2rem;
  font-weight: 1000;
  color: black;
  display: flex;
  justify-content: center;
`;

export const Less = styled.div`
  height: 2px;
  width: 30%;
  background-color: black;
`;

export const BtnTicket = styled.div<BtnTicketInterface>`
  background-color: ${({ isDisabled }) => (isDisabled ? "#D9D9D9" : "#47ddff")};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: ${({ isDisabled }) => !isDisabled && "pointer"};
`;

export const FontAwesomee = styled(FontAwesomeIcon)`
  color: black;
  font-size: 13px;
`;

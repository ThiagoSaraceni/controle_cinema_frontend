import { useEffect, useMemo, useState } from "react";
import { ChairIcon } from "../../../../assets/svg/cinema/chair-icon";
import { UserBlockSvg } from "../../../../assets/svg/cinema/user-icon";
import * as S from "../seatsInfo/styles";
import { HeaderSeats } from "./header";
import { useDispatch } from "react-redux";
import { addSeats, Seat } from "../../../../redux/movieSlice";
import { FILEIRAS } from "../../../../constants/movieSeats";

export type SeatStatus = 0 | 1 | 2; // 0: Disponível, 1: Selecionado, 2: Reservado

export const SeatPlaces = () => {
  const mockApiResponse = {
    seats: [
      { row: "b", column: 1, status: 2 }, // Reservado
      { row: "h", column: 3, status: 2 }, // Reservado
      { row: "h", column: 2, status: 2 }, // Reservado
      { row: "a", column: 1, status: 2 }, // Reservado
    ],
  };

  const dispatch = useDispatch();
  const inicializarAssentos = () => {
    const seatMatrix = Array(8)
      .fill(0)
      .map(() => Array(10).fill(0));

    mockApiResponse.seats.forEach((seat) => {
      // o fileiras.indexOf(seat.row) serve para eu pegar o indice da minha letra se for 'b' no caso vai ser indice 1 e eu coloco o menos 1 no final pq o array começa em 0, nisso eu pego meu seatMatrix que é 8 - 2 que é do indice b e o -1 do  final sobra linha 6, que invertida seria a coluna b.
      //se fosse linha h, seria indice 7 do array, menos 1 fica 8, menos 8 de tamanho do seat matrix, se for subtrair da indice zero, no caso a linha h, ultima linha!
      const rowIndex = seatMatrix.length - FILEIRAS.indexOf(seat.row) - 1; // Índice invertido
      //coluna éa mesma coisa, indice da coluna menos 1, pq o array começa em 0.
      const colIndex = seat.column - 1;

      seatMatrix[rowIndex][colIndex] = seat.status;
    });

    return seatMatrix;
  };

  const [seats, setSeats] = useState<SeatStatus[][]>(inicializarAssentos);

  // const toggleSeat = (row: number, col: number) => {
  //   if (seats[row][col] === 2) return; // Assento reservado não pode ser alterado.

  //   //se a linha do meu parametro existe no meu prevstate ele irá acessar esse array e verificar o valor da coluna se altera ou nao.
  //   setSeats((prevSeats) => {
  //     const newSeats = prevSeats.map((rowSeats, rowIndex) => {
  //       if (rowIndex === row) {
  //         return rowSeats.map((seat, colIndex) =>
  //           colIndex === col ? (seat === 0 ? 1 : 0) : seat
  //         );
  //       }
  //       return rowSeats;
  //     });

  //     return newSeats;
  //   });
  // };

  const toggleSeat = (row: number, col: number) => {
    if (seats[row][col] === 2) return; // Assento reservado não pode ser alterado.

    setSeats((prevSeats) => {
      const newSeats = prevSeats.map((rowSeats, rowIndex) =>
        rowIndex === row
          ? rowSeats.map((seat, colIndex) =>
              colIndex === col ? (seat === 0 ? 1 : 0) : seat
            )
          : rowSeats
      );
      return newSeats;
    });
  };

  // const seatsMarked: Seat[] = [];

  // // Acumula todos os assentos selecionados
  // seats.forEach((array, rowIndex) => {
  //   array.forEach((valueArray, colIndex) => {
  //     if (valueArray === 1) {
  //       seatsMarked.push({
  //         fileira: FILEIRAS[seats.length - (rowIndex + 1)],
  //         coluna: colIndex + 1,
  //       });
  //     }
  //   });
  // });

  const seatsMarked = useMemo(() => {
    const marked: Seat[] = [];
    seats.forEach((array, rowIndex) => {
      array.forEach((valueArray, colIndex) => {
        if (valueArray === 1) {
          marked.push({
            fileira: FILEIRAS[seats.length - (rowIndex + 1)],
            coluna: colIndex + 1,
          });
        }
      });
    });
    return marked;
  }, [seats]);

  useEffect(() => {
    dispatch(addSeats(seatsMarked));
  }, [seatsMarked, dispatch]);

  if (seats.length === 0) {
    return <p>Carregando assentos...</p>;
  }

  return (
    <>
      <S.CenterContent>
        <div>
          <HeaderSeats seats={seats[0]} />
          {seats.map((array, rowIndex) => (
            <S.DFlex key={rowIndex}>
              {array.map((valueArray, colIndex) => {
                const col = colIndex + 1;
                return (
                  <>
                    {colIndex === 0 && (
                      <p>
                        {FILEIRAS[seats.length - (rowIndex + 1)].toUpperCase()}
                      </p>
                    )}
                    {valueArray === 0 ? (
                      <S.Avatar onClick={() => toggleSeat(rowIndex, colIndex)}>
                        <ChairIcon />
                      </S.Avatar>
                    ) : valueArray === 1 ? (
                      <S.Avatar
                        bgColor="#D0FF00"
                        onClick={() => toggleSeat(rowIndex, colIndex)}
                      >
                        {FILEIRAS[seats.length - (rowIndex + 1)].toUpperCase()}
                        {col}
                      </S.Avatar>
                    ) : (
                      <S.Avatar bgColor="#EA5455" disabled>
                        <UserBlockSvg />
                      </S.Avatar>
                    )}
                    {colIndex === array.length - 1 && (
                      <p>
                        {FILEIRAS[seats.length - (rowIndex + 1)].toUpperCase()}
                      </p>
                    )}
                  </>
                );
              })}
            </S.DFlex>
          ))}
          <S.Screen>TELA</S.Screen>
        </div>
      </S.CenterContent>
    </>
  );
};

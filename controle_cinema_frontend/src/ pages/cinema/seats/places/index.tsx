import { useEffect, useState } from "react";
import { ChairIcon } from "../../../../assets/svg/cinema/chair-icon";
import { UserBlockSvg } from "../../../../assets/svg/cinema/user-icon";
import * as S from "../seatsInfo/styles";

type SeatStatus = 0 | 1 | 2; // 0: Disponível, 1: Selecionado, 2: Reservado

export const SeatPlaces = () => {
  const initialSeats: SeatStatus[][] = Array(8)
    .fill(0)
    .map(() => Array(10).fill(0)); // Matriz 8x11 com assentos disponíveis

  const [seats, setSeats] = useState<SeatStatus[][]>(initialSeats);

  const fileiras = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
  ];

  console.log(seats);

  const toggleSeat = (row: any, col: any) => {
    if (seats[row][col] === 2) {
      return;
    }
    const newSeats = [...seats];
    newSeats[row][col] = seats[row][col] === 0 ? 1 : 0;
    setSeats(newSeats);
  };

  const seatsMarked: any = [];
  seats.forEach((array, rowIndex) => {
    array.forEach((valueArray, colIndex) => {
      if (valueArray === 1) {
        seatsMarked.push({
          fileira: fileiras[seats.length - (rowIndex + 1)],
          coluna: colIndex + 1,
        });
      }
    });
  });

  console.log(seatsMarked);

  //logica existe reservad ou n, se n ta reservado ao clicar vc pega o valor atual e seta e algum e muda, mas ja se o valor é igual a 1 mostrar o tipo ocuapdo
  return (
    <>
      <S.CenterContent>
        <div>
          <S.DisplayFlexHeader>
            <div className="space" />
            {seats[0].map((_, colIndex) => (
              <div className="sit">
                <p>{colIndex + 1}</p>
              </div>
            ))}
            <p />
          </S.DisplayFlexHeader>
          {seats.map((array, rowIndex) => {
            /*aqui dou um map no meus 8 arrays, e o rowIndex é o count do array atual, que vai de 0 a 7*/

            return (
              <>
                <S.DFlex>
                  {array.map((valueArray, colIndex) => {
                    const col = colIndex + 1;
                    /*Map no array atual, que todos os valores do meu array contem 0, e o col index é o numero da poltrona atual*/
                    return (
                      <>
                        {/**verifico se é o primeiro valor da coluna, se sim sobrescrevo algo antes. */}
                        {colIndex === 0 && (
                          <p>
                            {
                              /*Explicação pego o tamanho do meu array principal, e faço sempre um menos valor da minha linha atual, assim fazendo a soma decrescente. do maior para o menor. */
                              fileiras[seats.length - (rowIndex + 1)]
                            }
                          </p>
                        )}
                        {valueArray === 0 ? (
                          <S.Avatar
                            onClick={() => {
                              toggleSeat(rowIndex, colIndex);
                            }}
                            /* onClick={() =>
                              console.log(
                                `${
                                  fileiras[seats.length - (rowIndex + 1)]
                                }${col}`
                              )
                            }*/
                          >
                            <ChairIcon />
                          </S.Avatar>
                        ) : valueArray === 1 ? (
                          <S.Avatar
                            bgColor="#D0FF00"
                            onClick={() => {
                              toggleSeat(rowIndex, colIndex);
                            }}
                          >
                            {fileiras[seats.length - (rowIndex + 1)]}
                            {col}
                          </S.Avatar>
                        ) : (
                          <S.Avatar bgColor="#EA5455">
                            <UserBlockSvg />
                          </S.Avatar>
                        )}

                        {
                          /*Faço isso para escrever o valor apos o ultimo valor do meu array */
                          colIndex === array.length - 1 && (
                            <p>{fileiras[seats.length - (rowIndex + 1)]}</p>
                          )
                        }
                      </>
                    );
                  })}
                </S.DFlex>
              </>
            );
          })}
          <S.Screen>TELA</S.Screen>
        </div>
      </S.CenterContent>
    </>
  );
};

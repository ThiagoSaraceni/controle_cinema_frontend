import { ChairIcon } from "../../../../assets/svg/cinema/chair-icon";
import * as S from "../seatsInfo/styles";

type SeatStatus = 0 | 1 | 2; // 0: Disponível, 1: Selecionado, 2: Reservado

export const SeatPlaces = () => {
  const initialSeats: SeatStatus[][] = Array(8)
    .fill(0)
    .map(() => Array(10).fill(0)); // Matriz 8x11 com assentos disponíveis

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

  return (
    <>
      <S.CenterContent>
        <div>
          <S.DisplayFlexHeader>
            <div className="space" />
            {initialSeats[0].map((_, colIndex) => (
              <div className="sit">
                <p>{colIndex + 1}</p>
              </div>
            ))}
            <p />
          </S.DisplayFlexHeader>
          {initialSeats.map((array, rowIndex) => {
            /*aqui dou um map no meus 8 arrays, e o rowIndex é o count do array atual, que vai de 0 a 7*/
            const row = rowIndex;

            console.log({
              initialSeats: initialSeats.length,
              rowIndex,
              math: initialSeats.length - (rowIndex + 1),
            });

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
                              fileiras[initialSeats.length - (rowIndex + 1)]
                            }
                          </p>
                        )}
                        <S.Avatar onClick={() => console.log(`${row}${col}`)}>
                          <ChairIcon />
                        </S.Avatar>
                        {
                          /*Faço isso para escrever o valor apos o ultimo valor do meu array */
                          colIndex === array.length - 1 && (
                            <p>
                              {fileiras[initialSeats.length - (rowIndex + 1)]}
                            </p>
                          )
                        }
                      </>
                    );
                  })}
                </S.DFlex>
              </>
            );
          })}
        </div>
      </S.CenterContent>
    </>
  );
};

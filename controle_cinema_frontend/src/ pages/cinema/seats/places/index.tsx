import { ChairIcon } from "../../../../assets/svg/cinema/chair-icon";
import * as S from "../seatsInfo/styles";

type SeatStatus = 0 | 1 | 2; // 0: Disponível, 1: Selecionado, 2: Reservado

export const SeatPlaces = () => {
  const initialSeats: SeatStatus[][] = Array(8)
    .fill(0)
    .map(() => Array(11).fill(0)); // Matriz 8x11 com assentos disponíveis

  return (
    <>
      <S.CenterContent>
        <div>
          {initialSeats.map((array, rowIndex) => {
            /*aqui dou um map no meus 8 arrays, e o rowIndex é o count do array atual, que vai de 0 a 7*/
            const row = rowIndex + 1;
            return (
              <>
                <S.DFlex>
                  {array.map((valueArray, colIndex) => {
                    const col = colIndex + 1;
                    /*Map no array atual, que todos contem 0 e o col index é o numero da poltrona atual*/
                    return (
                      <>
                        {colIndex === 0 && <p>{row}</p>}
                        <S.Avatar onClick={() => console.log(`${row}${col}`)}>
                          <ChairIcon />
                        </S.Avatar>
                        {colIndex === array.length - 1 && <p>{row}</p>}
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

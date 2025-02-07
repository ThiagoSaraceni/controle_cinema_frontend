import { useState } from "react";
import { CardBody } from "../../cardBody";
import * as S from "./styles";

interface WeekDay {
  label: string;
  day: string;
}

const date = "14/10";

export const HeaderDates = () => {
  const [currentDate, setCurrentDate] = useState(date);
  const weekDays: WeekDay[] = [
    {
      label: "SEG",
      day: "14/10",
    },
    {
      label: "TER",
      day: "15/10",
    },
    {
      label: "QUA",
      day: "16/10",
    },
    {
      label: "QUI",
      day: "17/10",
    },
    {
      label: "SEX",
      day: "18/10",
    },
    {
      label: "SAB",
      day: "19/10",
    },
    {
      label: "DOM",
      day: "20/10",
    },
  ];

  return (
    <S.WeekCard>
      <CardBody>
        <S.DivHeader>
          {weekDays.map((item) => (
            <S.DayItem
              isActive={currentDate === item?.day}
              onClick={() => setCurrentDate(item?.day)}
            >
              <h6>{item?.label}</h6>
              <h6>{item.day}</h6>
            </S.DayItem>
          ))}
        </S.DivHeader>
      </CardBody>
    </S.WeekCard>
  );
};

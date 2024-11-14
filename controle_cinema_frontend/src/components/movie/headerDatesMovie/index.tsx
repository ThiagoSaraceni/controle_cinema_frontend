import { useState } from "react";
import { Card } from "../../card";
import { CardBody } from "../../cardBody";
import styled from "styled-components";

interface WeekDay {
  label: string;
  day: string;
}

interface PropsDayItem {
  isActive: boolean;
}

const DivHeader = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 2rem;
  font-family: "Saira", serif;
  font-optical-sizing: auto;
  font-weight: 300 !important;
  font-style: normal;
`;

const DayItem = styled.div<PropsDayItem>`
  color: ${(props) => !props.isActive && "#737380"};
  cursor: pointer;
`;

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
    <Card>
      <CardBody>
        <DivHeader>
          {weekDays.map((item) => (
            <DayItem
              isActive={currentDate === item?.day}
              onClick={() => setCurrentDate(item?.day)}
            >
              <h6>{item?.label}</h6>
              <h6>{item.day}</h6>
            </DayItem>
          ))}
        </DivHeader>
      </CardBody>
    </Card>
  );
};

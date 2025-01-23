import { Route, Routes } from "react-router-dom";
import { HomeCinema } from "../../ pages/cinema/home";
import { Seats } from "../../ pages/cinema/seats";
import { TicketsMovie } from "../../ pages/cinema/tickets";
import * as MStyle from "../../ pages/cinema/styles";

export const CinemaRoutes = () => {
  return (
    <>
      <MStyle.Background>
        <MStyle.Content>
          <Routes>
            <Route path="/" element={<HomeCinema />} />
            <Route path="/seats" element={<Seats />} />
            <Route path="/tickets" element={<TicketsMovie />} />
          </Routes>
        </MStyle.Content>
      </MStyle.Background>
    </>
  );
};
